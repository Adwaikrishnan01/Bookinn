"use client";

import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modal/RegisterModal'
import LoginModal from './components/modal/LoginModal'
import { useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
export default function Home() {
  
  return (<> <SessionProvider >
  <Navbar/>
  <div className="text-slate-700 text-2xl">BookInnd
  </div>
    <RegisterModal/>
    <LoginModal/> </SessionProvider>
    </>
    
  )
}
