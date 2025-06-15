export const CARD_BY_SLUG = `
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

export const CARDS_BY_COLLECTION_SLUG = `
*[_type == "card" && collection -> slug.current == $collectionSlug]{
  title,
  "slug":slug.current,
  "collectionSlug": collection -> slug.current,
  "imgFrontLightUrl": imgFrontLight.asset -> url,
  "imgBackLightUrl": imgBackLight.asset -> url,
  "imgFrontDarkUrl": imgFrontDark.asset -> url,
  "imgBackDarkUrl": imgBackDark.asset -> url,
}
`;
