'use server';

import { getFirestore } from "firebase-admin/firestore";
import { initAdmin } from "~/libs/db/firebase-admin";
import { SiteConfigType, SiteLinkType, SiteProductType } from "~/libs/types";

export const getSiteConfig = async (): Promise<SiteConfigType> => {
  await initAdmin()
  const firestore = getFirestore();
  const snapshot = await firestore
    .collection("site_config")
    .get();

  const documentData = snapshot.docs[0].data();
  return {
    title: documentData.title,
    description: documentData.description
  };
};

export const getLinks = async (): Promise<SiteLinkType[]> => {
  await initAdmin()
  const firestore = getFirestore()
  const snapshot = await firestore
    .collection("links")
    .orderBy('order', 'asc')
    .get();

  const documents = snapshot.docs.map((link) => {
    const linkData = link.data();
    return {
      url: linkData.url,
      title: linkData.title,
      color: linkData.color,
    }
  });

  return documents;
}

export const getSelectedProducts = async (): Promise<SiteProductType[]> => {
  await initAdmin()
  const firestore = getFirestore()
  const snapshot = await firestore
    .collection("products")
    .where('groups', 'array-contains', 'selected-product')
    .limit(10)
    .get();

  const documents = snapshot.docs.map((product) => {
    const data = product.data();
    return {
      title: data.title,
      slug: data.slug,
      images: data.images,
      groups: data.groups,
      shortDescription: data.short_description,
      shopLinks: data.shop_links || [],
    }
  });

  return documents;
}

