import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { getSiteConfig } from './actions'

const nunito = Nunito({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const {title, description} = await getSiteConfig()
  return {
    title,
    description
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="default">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
