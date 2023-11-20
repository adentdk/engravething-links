'use client'

import { sendGTMEvent } from "@next/third-parties/google";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { SiteProductType } from "~/libs/types";

type ProductCardProps = SiteProductType & {}

export default function ProductCard({ images, title, shopLinks, shortDescription, slug }: ProductCardProps) {
  const handleShopLinkClicked = (linkName: string, productSlug: string) => () => {
    sendGTMEvent({
      event: 'shop-link-clicked', value: `${linkName}-${productSlug}`
    })
  }
  return (
    <div className="card card-compact shadow-xl rounded-none sm:rounded-box glass" >
      <figure className="relative h-52 overflow-hidden">
        <Image fill className="object-cover" src={images[0]} alt={title} />
      </figure>
      <div className="card-body">
        <Link href={`/products/details/${slug}`} className="card-title drop-shadow-md text-neutral">{title}</Link>
        <p className="drop-shadow-md text-neutral">{shortDescription}</p>
        <div className="card-actions justify-end">
          {shopLinks.map((shopLink, shopLinkIndex) => (
            <Link
              href={shopLink.url}
              target="_blank"
              key={['shopLink', shopLinkIndex].join('-')}
              style={{
                color: shopLink.color,
              }}
              onClick={handleShopLinkClicked(shopLink.label, slug)}
              className={classNames(
                'badge badge-outline',
                'badge-neutral'
              )}
            >
              {shopLink.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}