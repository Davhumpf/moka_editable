import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Moka - La heladeria que dejo el papel atras',
  description: 'Software de gestion de pedidos para heladerias pequenas y negocios de comida rapida que quieren operar sin papel, con WhatsApp, reportes y pedidos en tiempo real.',
  keywords: ['Moka', 'software para heladerias', 'gestion de pedidos', 'WhatsApp Business', 'facturacion para restaurantes'],
  authors: [{ name: 'Davhumpf' }],
  openGraph: {
    title: 'Moka - La heladeria que dejo el papel atras',
    description: 'Gestiona pedidos, cocina, caja, WhatsApp y facturacion en una sola herramienta para heladerias pequenas.',
    type: 'website',
    url: 'https://moka.app',
    siteName: 'Moka',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moka - La heladeria que dejo el papel atras',
    description: 'Pedidos en tiempo real, alertas por WhatsApp, reportes automaticos y facturas en PDF.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
