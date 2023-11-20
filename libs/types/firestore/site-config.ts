export type SiteConfigType = {
  title: string
  description: string
  [key: string]: any
}

export type SiteLinkType = {
  title: string
  url: string
}

export type SiteProductType = {
  title: string
  slug: string
  images: string[]
  groups: string[]
  shortDescription: string
}