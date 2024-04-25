
import getRoomById from "@/app/actions/getRoomById"
import SingleRoomClient from "./SingleRoomClient"

import getCurrentUser from "@/app/actions/getCurrentUser";
import { useSession } from 'next-auth/react';
interface Params {
  params: {
    roomId: string;
  };
}
const RoomPage = async (params:Params) => {

  const  {roomId}  = params.params
  
  if(!roomId || typeof roomId !== 'string'){
    return
  }
  const room=await getRoomById(roomId)//get room by id 
  
  const currentUser= await getCurrentUser()
  if(room &&currentUser){
   return (
      <div className="my-2 mx-1 md:mx-16 lg:mx-24"> 
      <SingleRoomClient 
       room={room} 
      currentUser={currentUser}/>
     </div>
  )
  }else{
    return(<h1>Loading.......</h1>)}
}

export default RoomPage;






