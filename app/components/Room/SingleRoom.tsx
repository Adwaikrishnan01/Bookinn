"use client";
import HeartButton from "../HeartButton";
import Image from "next/image"
import { User,Address } from "@prisma/client";
import { Calender } from "../Calender";
import { Form } from "react-hook-form";
import useLoginModal from "@/app/hooks/useLoginModal";
// import createBooking from "@/app/actions/createBooking";
import { prisma } from "@/app/libs/prismadb";
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
       {currentUser?<div className="rounded-xl shadow-lg p-1 cursor-pointer">
          <HeartButton roomId={roomId} userId={currentUser?.id}/></div>
    :null}
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
 <div className="flex">
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
{/* reservation how to pass function from parent to child*/}
      <div className="w-2/5">
      <form action={createBooking}>
        <input type="hidden" name="roomId" value={roomId}/>
        <input type="hidden" name="userId" value={userId}/>
        <Calender/><div>
          {!userId ?(<>{loginModal.onOpen()}</>)  : <button type="submit" 
          className="w-2/3 bg-blue-600 rounded-md text-white p-1 shadow-md">Make a booking</button>}
          </div>
        
        </form>
        
        </div>
    </div>
)
}


