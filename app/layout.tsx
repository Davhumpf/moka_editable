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
  title: 'Moka una solucion para tu negocio',
  description: 'Software de gestion de pedidos para heladerias pequenas y negocios de comida rapida que quieren operar sin papel, con WhatsApp, reportes y pedidos en tiempo real.',
  keywords: ['Moka', 'software para heladerias', 'gestion de pedidos', 'WhatsApp Business', 'facturacion para restaurantes'],
  authors: [{ name: 'Davhumpf' }],
  openGraph: {
    title: 'Moka una solucion para tu negocio',
    description: 'Gestiona pedidos, cocina, caja, WhatsApp y facturacion en una sola herramienta para heladerias pequenas.',
    type: 'website',
    url: 'https://moka.app',
    siteName: 'Moka',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moka una solucion para tu negocio',
    description: 'Pedidos en tiempo real, alertas por WhatsApp, reportes automaticos y facturas en PDF.',
  },
  icons: {
    icon: [
      {
        url: '/moka-icon.png',
        type: 'image/png',
      },
    ],
    apple: '/moka-icon.png',
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
