"use client"
import {RoomHeader,RoomBody} from "../../components/Room/SingleRoom"
import { useSession } from 'next-auth/react';
import { safeRoom } from "@/app/types/intex";
interface SingleRoomProps{
room:safeRoom;
}

const SingleRoomClient:React.FC<SingleRoomProps> = ({room}) => {
   
    console.log("singleroomadd",room);
    
    const { data: session, status } = useSession(); 
    const user=session?.user;   
    console.log("USSER",session?.user)
  
    return (
          <>    
    <RoomHeader title={room?.name}
        image={room?.imgSrc}/>
        
    <RoomBody
     roomcount={room?.roomCount}
    bathroom={room.bathroomCount} 
    numberofBeds={room.numberofBeds}
    address={room.address}/>
    </>
    )  
}
 
export default SingleRoomClient;