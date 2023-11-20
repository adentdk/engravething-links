import { Metadata } from "next"
import { getSiteConfig } from "../actions"
import { GoogleTagManager } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

export const revalidate = 1200

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getSiteConfig()
  return {
    title,
    description
  }
}

export default async function MainLayout(props: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>{props.children}</main>
      <GoogleTagManager gtmId="G-FW5V8QG2NN" />
      <Analytics />
    </>
  )
}
