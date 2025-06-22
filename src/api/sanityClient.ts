/**
 * TODO: This can be done so much better...
 * Reducing unnecessary re-fetches and stuff I'll get back on that
 */
import { createClient } from "@sanity/client";
import {
  ALL_COLLECTIONS_QUERY,
  CARD_BY_SLUG_COLLECTION_SLUG_QUERY,
  CARD_BY_SLUG_QUERY,
  CARDS_BY_COLLECTION_SLUG_QUERY,
  COLLECTION_QUERY,
} from "./queryConstants";

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
  params?: Record<string, string | undefined>;
  transform?: (result: T) => T;
};

export const sanityClient = createClient({
  projectId: "22nh6e56",
  dataset: "production",
  apiVersion: "2025-06-22",
  useCdn: false,
});

const promiseCache = new Map<string, Promise<unknown>>();

function cacheFetch<T>({
  key,
  query,
  params,
  transform,
}: CacheFetchProps<T>): Promise<T> {
  if (!promiseCache.has(key)) {
    const promise = sanityClient
      .fetch(query, params)
      .then((res) => (transform ? transform(res) : res));
    promiseCache.set(key, promise);
  }

  return promiseCache.get(key)! as Promise<T>;
}

export const getCard = (slug: string, collectionSlug?: string) => {
  /**
   * That's because depending of what I want, I can get a single card
   * no matter if it's in any collection or I can only get it
   * if it's part of the specified collection
   */
  const queryKey = collectionSlug
    ? `card:${collectionSlug}/${slug}`
    : `card:${slug}`;
  const query = collectionSlug
    ? CARD_BY_SLUG_COLLECTION_SLUG_QUERY
    : CARD_BY_SLUG_QUERY;

  return cacheFetch<SanityCard>({
    key: queryKey,
    query,
    params: { slug, collectionSlug },
    transform: (card) => {
      if (!card) {
        throw new Error(`No cards with slug: ${slug}`);
      }
      return card;
    },
  });
};

export const getCardsFromCollection = (collectionSlug: string) => {
  return cacheFetch<{ collection: SanityCollection; cards: SanityCard[] }>({
    key: `collectionCards:${collectionSlug}`,
    query: CARDS_BY_COLLECTION_SLUG_QUERY,
    params: { collectionSlug },
    transform: (result) => {
      if (!result.collection) {
        throw new Error(`No collection with slug: ${collectionSlug}`);
      }
      return result;
    },
  });
};

export const getCollection = (collectionSlug: string) => {
  return cacheFetch<SanityCollection>({
    key: `collection:${collectionSlug}`,
    query: COLLECTION_QUERY,
    params: { collectionSlug },
    transform: (result) => {
      if (!result) {
        throw new Error(`No collection with slug: ${collectionSlug}`);
      }
      return result;
    },
  });
};

export const getCollections = sanityClient.fetch<SanityCollection[]>(
  ALL_COLLECTIONS_QUERY
);
