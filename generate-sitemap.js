import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { createClient } from "@sanity/client";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = createClient({
  projectId: "22nh6e56",
  dataset: "production",
  apiVersion: "2025-06-22",
  useCdn: false,
});

const baseUrl = "https://designapi.netlify.app";

async function getDynamicRoutes() {
  const collections = await client.fetch(`*[_type == "collection"]{"slug": slug.current}`);
  const cards = await client.fetch(`
*[_type == "card"]{
  "slug":slug.current,
  "collectionSlug": collection -> slug.current
}`);

  return {
    collections: collections.map((col) => `/collections/${col.slug}`),
    cards: cards.map(
      (card) => `/collections/${card.collectionSlug}/${card.slug}`
    ),
  };
}

async function generateSitemap() {
  const staticRoutes = ["/", "/resources"];
  const { collections, cards } = await getDynamicRoutes();

  const allRoutes = [...staticRoutes, ...collections, ...cards];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => `<url><loc>${baseUrl}${route}</loc></url>`)
    .join("\n")}
</urlset>`;

  fs.writeFileSync(path.resolve(__dirname, "public/sitemap.xml"), sitemap);
  console.log("✅ jonny says: sitemap.xml generated!");
}

generateSitemap().catch(console.error);
