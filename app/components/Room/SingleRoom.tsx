import { AiFillHeart } from "react-icons/ai"
import Image from "next/image"
import { User,Address } from "@prisma/client";


interface RoomHeaderProps{
  title:string;
  image:string;
}

interface RoomBodyProps{
  roomcount:number;
  bathroom:number;
  numberofBeds:number;
  address:Address[];
}

export const RoomHeader:React.FC<RoomHeaderProps> = ({title,image}) => {
  console.log("titleimage",title,image)
  return (
    <>
      <div className="flex gap-5 items-center my-3">
       <div className="text-3xl font-medium">{title}</div>
        <div className="rounded-xl shadow-lg p-1 cursor-pointer"><AiFillHeart/></div>
    </div>
    
    <div className="w-3/5">
    <Image
          src={image}
          width={700}
          height={400}
          className="object-cover rounded-md"
          alt="Image"
        />
    </div>
  
    </>
  )
}

export const RoomBody:React.FC<RoomBodyProps>=({roomcount,bathroom,numberofBeds,address})=>{
   const [{ country, state, city }] = address ?? {};
  
 return( 
 <div>
      <div className="w-3/5">
        <div className="text-xl text-bold my-2">
          In the city {city}, {state},
          {country}</div> 
      <div className="flex gap-1">
      <div>{roomcount} rooms</div>
          <div>{bathroom} bathrooms</div>
          <div>{numberofBeds} bed</div>
        </div>
      </div>
{/* reservation */}
      <div className="w-2/5"></div>
      
    </div>
)
}


