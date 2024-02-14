"use client"
import { useRouter } from "next/navigation"
import { Roomdata ,currUser} from "@/app/types/intex";

interface Roomcardprops{
  data:Roomdata;
  user?:currUser | null
}

const RoomCard:React.FC<Roomcardprops> = ({data,user}) => { 
  console.log("8347",data)
const router=useRouter();
  return (
    <div 
    onClick={() => router.push(`/rooms/${data.id}`)} 
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
      src="/secretpoint.png"
      alt="Card Image"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{data?.name}</h2>
     
      <p className="mt-2 text-gray-600">{data.description?.substring(0,25)}...</p>
      <div className="mt-1 text-lg">
       price
      </div>
    </div>
   </div>
  </div>
 </div>
    
  )
}

export default RoomCard