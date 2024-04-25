"use client"
import { Suspense } from "react";
import Container from "../Container"
import Logo from "./Logo"
import UserMenu from "./UserMenu"
import { useSession } from 'next-auth/react';

const Navbar=()=>{
    const { data: session, status } = useSession();
    const user=session?.user;   
   
return(
    <div className="w-full shadow-sm ">
    
    <Container>
        <Logo/>
    <UserMenu user={user}/>
    </Container>
    </div>
    
)}
export default Navbar