"use client";

import Navbar from './components/Navbar/Navbar'
import RegisterModal from './components/modal/RegisterModal'
import LoginModal from './components/modal/LoginModal'
import { useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';
import Container from './components/Container';
import RoomCard from './components/Room/RoomCard';
import rooms from "./data/rooms"

export default function Home() {
  
  return (<> 
  <SessionProvider >
  <Navbar/>
  <div className="text-slate-700 text-2xl">BookInnd
  </div>
    
  <div 
     className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms.map((rooms: any) => (
            <RoomCard
            
              key={rooms.id}
              room={rooms}
            />
          ))}
        </div>
      
    <RegisterModal/>
    <LoginModal/>
   </SessionProvider>
    </>
    
  )
}
