'use server';

import { getFirestore } from "firebase-admin/firestore";
import { initAdmin } from "~/libs/db/firebase-admin";
import { SiteConfigType, SiteLinkType } from "~/libs/types";

export const getSiteConfig = async (): Promise<SiteConfigType> => {
  await initAdmin()
  const firestore = getFirestore();
  const siteConfigSnapshot = await firestore.collection("site_config").get();
  const documentData = siteConfigSnapshot.docs[0].data();
  return {
    title: documentData.title,
    description: documentData.description
  };
};

export const getLinks = async (): Promise<SiteLinkType[]> => {
  await initAdmin()
  const firestore = getFirestore()
  const linkSnapshot = await firestore.collection("links").orderBy('order', 'asc').get();
  const documents = linkSnapshot.docs.map((link) => {
    const linkData = link.data();
    return {
      url: linkData.url,
      title: linkData.title,
    }
  });
 
  return documents;
}

