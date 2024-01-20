import './globals.css'
import type { Metadata } from 'next'

import { Inter, Nunito, Roboto } from 'next/font/google'
const font = Roboto({ 
  weight: '400',
  subsets: ['latin'],
 })

export const metadata: Metadata = {
  title: 'BookInn',
  description: 'Book your hotel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
