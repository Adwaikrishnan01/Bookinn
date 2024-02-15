import { AiFillHeart } from "react-icons/ai"
import Image from "next/image"
import { User } from "@prisma/client";

interface RoomHeaderProps{
  title:string;
  imgSrc:string;
  currUser?:User;
}

export const RoomHeader = ({title,imgSrc,currUser,}) => {
  return (
    <>
    <div className="flex justify-between">
        <h2>{title}</h2>
        <div><AiFillHeart/>Save</div>
    </div>
    <div>
    <Image
          src={imgSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
    </div>
    
    </>
  )
}

export const RoomBody=()=>{
 return(<>
 //reservation
 </>)
}


