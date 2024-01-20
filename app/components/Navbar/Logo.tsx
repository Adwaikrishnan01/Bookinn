'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="cursor-pointer" 
      src="/BookInn-logos_black.png" 
      height="50" 
      width="150" 
      alt="Logo" 
    />
   );
}
 
export default Logo;