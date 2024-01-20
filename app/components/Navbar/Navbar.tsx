"use client"
import Container from "../Container"
import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Navbar=()=>{
return(
    <div className="w-full shadow-sm ">
    
    <Container>
        <Logo/>
    <UserMenu/>
    </Container>
    </div>
    
)}
export default Navbar