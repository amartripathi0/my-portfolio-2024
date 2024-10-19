import type { Metadata } from 'next'
import { Montserrat, Raleway, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ClientLayout from '@/components/ClientLayout'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Amar Tripathi | Full Stack Web Developer',
  metadataBase: new URL('https://amartripathi.vercel.app/'),
  description:
    "Experienced full stack web developer specializing in modern web technologies. View Amar Tripathi's portfolio showcasing innovative projects and technical expertise.",
  keywords:
    'full stack developer, web development, React, Node.js, JavaScript, portfolio, Amar Tripathi',
  authors: [{ name: 'Amar Tripathi' }],
  openGraph: {
    title: 'Amar Tripathi | Full Stack Web Developer Portfolio',
    description:
      'Explore the projects and skills of Amar Tripathi, a passionate full stack web developer creating innovative web solutions.',
    type: 'website',
    url: 'https://www.amartripathi.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@amartripathi_',
    creator: '@amartripathi_',
  },
  icons: {
    icon: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon-16x16.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${raleway.variable}`}>
      <body className={`${montserrat.variable} font-montserrat`}>
        <ClientLayout>{children}</ClientLayout>
        <Toaster richColors closeButton theme="dark" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
