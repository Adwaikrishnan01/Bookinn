
import './globals.css'
import { useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next'
import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modal/RegisterModal'
import LoginModal from './components/modal/LoginModal'

import { Inter, Nunito, Roboto } from 'next/font/google'
import { NextAuthProvider } from './provider/authprovider';
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
     <NextAuthProvider>
      <body className={font.className}>
     <Navbar/>
     <RegisterModal/>
     <LoginModal/>
      {children}
      </body>
      </NextAuthProvider>
    </html>
  )
}
