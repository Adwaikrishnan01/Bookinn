"use client"
import { useRouter } from "next/navigation"
import { Roomdata ,currUser} from "@/app/types/intex";
import { url } from "inspector";

interface Roomcardprops{
  data:Roomdata;
  user?:currUser | null
}

const RoomCard:React.FC<Roomcardprops> = ({data,user}) => { 
  
const router=useRouter();
  return (
    <div 
    onClick={() => router.push(`/room/${data.id}`)} 
    className="cursor-pointer"
  >
    <div className="flex flex-col gap-2 w-full bg-slate-300">
      <div className="aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl">
    <img
      className="w-full h-40 object-cover rounded-t-lg"
      src={data.imgSrc}
      alt="Card Image"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{data?.name}</h2>
     
      <p className="mt-2 text-gray-600">{data.description?.substring(0,25)}...</p>
      <div className="mt-1 text-lg">
      $ {data.price}
      </div>
    </div>
   </div>
  </div>
 </div>
    
  )
}

export default RoomCard