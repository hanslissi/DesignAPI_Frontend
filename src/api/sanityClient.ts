import { createClient } from "@sanity/client";
import { CARD_BY_SLUG, CARDS_BY_COLLECTION_SLUG } from "./queryConstants";

export type SanityCollection = {
  title: string;
  color: string;
  slug: string;
  iconUrl: string;
};

export type SanityCard = {
  title: string;
  slug: string;
  collectionSlug: string;
  imgFrontLightUrl: string;
  imgBackLightUrl: string;
  imgFrontDarkUrl: string;
  imgBackDarkUrl: string;
};

type CacheFetchProps<T> = {
  key: string;
  query: string;
  params?: Record<string, string>;
  transform?: (result: T) => T;
};

export const sanityClient = createClient({
  projectId: "22nh6e56",
  dataset: "production",
});

const promiseCache = new Map<string, Promise<unknown>>();
const cardBySlugCache = new Map<string, Promise<SanityCard>>();

function cacheFetch<T>({
  key,
  query,
  params,
  transform,
}: CacheFetchProps<T>): Promise<T> {
  if (!promiseCache.has(key)) {
    console.log('FETCHING: ' + key);
    const promise = sanityClient
      .fetch(query, params)
      .then((res) => (transform ? transform(res) : res));
    promiseCache.set(key, promise);
  }

  return promiseCache.get(key)! as Promise<T>;
}

export const getCard = (slug: string) => {
  if (cardBySlugCache.has(slug)) {
    console.log('Getting out of cardslug');
    return cardBySlugCache.get(slug)!;
  }
  return cacheFetch<SanityCard>({
    key: `card:${slug}`,
    query: CARD_BY_SLUG,
    params: { slug },
    transform: (card) => {
      if (!card) {
        throw new Error(`No cards with slug: ${slug}`);
      }
      cardBySlugCache.set(slug, Promise.resolve(card));
      return card;
    },
  });
};

export const getCardsFromCollection = (collectionSlug: string) => {
  return cacheFetch<SanityCard[]>({
    key: `collectionCards:${collectionSlug}`,
    query: CARDS_BY_COLLECTION_SLUG,
    params: { collectionSlug },
    transform: (cards) => {
      cards.forEach((card) => cardBySlugCache.set(card.slug, Promise.resolve(card)));
      return cards;
    },
  });
};

export const fetchCollections = sanityClient.fetch<SanityCollection[]>(
  `*[_type == "collection"]{
      title,
      color,
      "slug": slug.current,
      "iconUrl": icon.asset -> url
    }`
);
