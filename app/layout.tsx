import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  if (process.env.VERCEL_BRANCH_URL) {
    return `https://${process.env.VERCEL_BRANCH_URL}`
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'https://kalyani-tau.vercel.app'
})()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`),
  title: 'Kalyani Stampings | Precision in motion',
  description: 'Electrical laminations, motor stampings, and transformer cores made with precision from concept to completion.',
  generator: 'Next.js',
  applicationName: 'Kalyani Stampings',
  keywords: [
    'Electrical Laminations',
    'Motor Stampings',
    'Transformer Cores',
    'Precision Stamping',
    'Automotive Press Components',
    'Deep Drawn Enclosures',
    'IATF 16949',
    'Chennai Manufacturing',
    'Sriperumbudur Stampings',
  ],
  authors: [{ name: 'Kalyani Stampings Private Limited' }],
  creator: 'Kalyani Stampings',
  publisher: 'Kalyani Stampings Private Limited',
  openGraph: {
    title: 'Kalyani Stampings | Precision in motion',
    description: 'Electrical laminations, motor stampings, and transformer cores made with precision from concept to completion.',
    url: '/',
    siteName: 'Kalyani Stampings',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/kalyani/logo_horizontal.png',
        width: 1200,
        height: 630,
        alt: 'Kalyani Stampings Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalyani Stampings | Precision in motion',
    description: 'Electrical laminations, motor stampings, and transformer cores made with precision from concept to completion.',
    images: [
      {
        url: '/kalyani/logo_horizontal.png',
        width: 1200,
        height: 630,
        alt: 'Kalyani Stampings Logo',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fff6e8',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jakarta.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
