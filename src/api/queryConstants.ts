export const ALL_COLLECTIONS_QUERY = `
*[_type == "collection"]{
  title,
  color,
  "slug": slug.current,
  "iconUrl": icon.asset -> url
}
`;

export const CARD_BY_SLUG_QUERY = `
*[_type == "card" && slug.current == $slug]{
  title,
  "slug":slug.current,
  "collectionSlug": collection -> slug.current,
  "imgFrontLightUrl": imgFrontLight.asset -> url,
  "imgBackLightUrl": imgBackLight.asset -> url,
  "imgFrontDarkUrl": imgFrontDark.asset -> url,
  "imgBackDarkUrl": imgBackDark.asset -> url,
}[0]
`;

export const CARD_BY_SLUG_COLLECTION_SLUG_QUERY = `
*[_type == "card" && slug.current == $slug && collection -> slug.current == $collectionSlug]{
  title,
  "slug":slug.current,
  "collectionSlug": collection -> slug.current,
  "imgFrontLightUrl": imgFrontLight.asset -> url,
  "imgBackLightUrl": imgBackLight.asset -> url,
  "imgFrontDarkUrl": imgFrontDark.asset -> url,
  "imgBackDarkUrl": imgBackDark.asset -> url,
}[0]
`;

export const CARDS_BY_COLLECTION_SLUG_QUERY = `
{
  "collection": *[_type == "collection" && slug.current == $collectionSlug]{
    title,
    color,
    "slug": slug.current,
    "iconUrl": icon.asset->url
  }[0],
  "cards": *[_type == "card" && collection->slug.current == $collectionSlug] | order(slug.current asc){
    title,
    "slug": slug.current,
    "collectionSlug": collection->slug.current,
    "imgFrontLightUrl": imgFrontLight.asset->url,
    "imgBackLightUrl": imgBackLight.asset->url,
    "imgFrontDarkUrl": imgFrontDark.asset->url,
    "imgBackDarkUrl": imgBackDark.asset->url
  }
}
`;
