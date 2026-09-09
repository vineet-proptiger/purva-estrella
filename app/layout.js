import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://purva-estrella-lokhandwala.co.in'),
  title: 'Purva Estrella | Luxury 2/3/4 BHK Residences in Lokhandwala, Andheri West, Mumbai',
  description: "Purva Estrella — A premium residential development in Lokhandwala, Andheri West, Mumbai offering luxury 2, 3, and 4 BHK residences.",
  alternates: {
    canonical: 'https://purva-estrella-lokhandwala.co.in/',
  },
  openGraph: {
    title: 'Purva Estrella | Luxury Integrated Development in Lokhandwala',
    description: "Discover luxury 2/3/4 BHK residences at Purva Estrella, a premium development in Lokhandwala, Andheri West, Mumbai.",
    url: 'https://purva-estrella-lokhandwala.co.in/',
    siteName: 'Purva Estrella',
    images: [
      {
        url: '/images/hero/banner.webp',
        width: 1200,
        height: 630,
        alt: 'Purva Estrella Lokhandwala Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purva Estrella | Luxury 2/3/4 BHK Residences in Lokhandwala',
    description: "A thoughtfully planned 70-acre landmark development in Lokhandwala, Andheri West, Mumbai by Purva.",
    images: ['/images/hero/banner.webp'],
  },
  icons: {
    icon: '/images/favicon/fav.webp',
  },
}

import SmoothScroll from '../components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Purva Estrella Lokhandwala",
              "url": "https://purva-estrella-lokhandwala.co.in/",
              "logo": "https://purva-estrella-lokhandwala.co.in/images/logo/Logo.webp",
              "image": "https://purva-estrella-lokhandwala.co.in/images/hero/banner.webp",
              "description": "Purva Estrella, Mumbai's premium residential development in Lokhandwala offering 2/3/4 BHK luxury residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lokhandwala",
                "addressLocality": "Mumbai",
                "addressRegion": "Karnataka",
                "postalCode": "560109",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 3 Crore Onwards",
              "sameAs": [
                "https://purva-estrella-lokhandwala.co.in/"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
