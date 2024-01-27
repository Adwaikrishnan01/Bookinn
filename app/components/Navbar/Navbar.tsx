"use client"
import Container from "../Container"
import Logo from "./Logo"
import UserMenu from "./UserMenu"
import { useSession } from 'next-auth/react';

const Navbar=()=>{
    const { data: session, status } = useSession();
    const user=session?.user;   
    
    console.log("user in seeeion",session,status)
return(
    <div className="w-full shadow-sm ">
    
    <Container>
        <Logo/>
    <UserMenu user={user}/>
    </Container>
    </div>
    
)}
export default Navbar