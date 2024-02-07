"use client"
import { useRouter } from "next/navigation"

const RoomCard = (room:any) => {
const router=useRouter();
  return (
    <div 
    onClick={() => router.push(``)} 
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
      <h2 className="text-xl font-semibold text-gray-800">{room.name}</h2>
      <p className="mt-2 text-gray-600">khgkaebgkeg</p>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Action 1</button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">Action 2</button>
      </div>
    </div>
  </div></div></div>
    
  )
}

export default RoomCard