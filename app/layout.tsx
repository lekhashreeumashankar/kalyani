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

export const metadata: Metadata = {
  title: 'Kalyani Stampings | Precision in motion',
  description: 'Electrical laminations, motor stampings, and transformer cores made with precision from concept to completion.',
  generator: 'Next.js',
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
