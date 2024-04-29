"use client";
import HeartButton from "../HeartButton";
import Image from "next/image"
import { User,Address } from "@prisma/client";
import { Calender } from "../Calender";
import useLoginModal from "@/app/hooks/useLoginModal";
import axios from "../../../axios"
import { useEffect, useState } from "react";

interface RoomHeaderProps{
  title:string;
  image:string;
  roomId:string;
  currentUser?:any;
}

interface RoomBodyProps{
  roomcount:number;
  bathroom:number;
  numberofBeds:number;
  address:Address[];
  roomId:string;
  userId?:string;
  roomPrice?:number;
}

export const RoomHeader:React.FC<RoomHeaderProps> = ({title,image,roomId,currentUser}) => {
  
  return (
    <>
      <div className="flex gap-5 items-center my-3">
       <div className="text-3xl font-medium">{title}</div>
       {currentUser&&<div className="rounded-xl shadow-lg p-1 cursor-pointer">
          <HeartButton roomId={roomId} userId={currentUser?.id}/></div>
    }
       </div> 
    
    <div className="w-full mt-4">
    <Image
          src={image}
          width={700}
          height={400}
          className="object-cover rounded-md mx-auto"
          alt="Image"
        />
    </div>
  
    </>
  )
}

export const RoomBody:React.FC<RoomBodyProps>=({roomcount,bathroom,numberofBeds,address,roomId,userId,roomPrice})=>{
   const [{ country, state, city }] = address ?? {};
   const loginModal=useLoginModal()
   const [totalPrice,setTotalPrice]=useState<number>()
   const createBooking=(formData:FormData)=>{
    const userId = formData.get("userId") as string;
    const roomId = formData.get("roomId") as string;
    const startDateString = formData.get("startDate") as string
    const endDateString = formData.get("endDate") as string

    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);
    const differenceInMs=endDate.getTime() - startDate.getTime();
  
    // Convert milliseconds to days
    const noOfDays = differenceInMs / (1000 * 60 * 60 * 24); 
   
    if(noOfDays && roomPrice){
          setTotalPrice(noOfDays*roomPrice)
    }else{
      setTotalPrice(roomPrice)
    }
  
 
         axios.post('/api/bookings',
           {
            userId: userId,
            roomId: roomId,
            startDate: startDate,
            endDate: endDate,
            totalPrice: totalPrice
        }).then(()=>{
          alert("reservation created")
        }).catch((error)=>{
          console.log(error)
        })
}

 return( 
  <div className="max-w-6xl mx-auto px-4 sm:px-6 md:grid md:grid-cols-12 md:gap-6 items-center pb-24 mt-8">
      <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0">
        <div className="text-xl text-bold my-2 text-center">
          In the city {city}, {state},
          {country}</div>
      <div className="flex gap-1 justify-center">
        <div>{roomcount} room</div>
          <div>{bathroom} bathroom</div>
          <div>{numberofBeds} bed</div>
      
        </div>
      </div>

      <div className="max-w-xl md:max-w-none md:w-full md:col-span-7 lg:col-span-6">
      <form action={createBooking}>
        <input type="hidden" name="roomId" value={roomId}/>
        <input type="hidden" name="userId" value={userId}/>
        <Calender/><div>
          {!userId ?(<>{loginModal.onOpen()}</>)  : <button type="submit" 
          className="w-[340px] bg-blue-600 rounded-md text-white p-1 shadow-md">Make a booking</button>}
          </div>
        
        </form>
        
        </div>
    </div>
)
}


