import RoomCard from '../components/Room/RoomCard';
import getAllRooms from '../actions/getAllRooms';
import { Suspense } from 'react';
import Loading from '../components/Loading';


export const RoomList=async()=>{
  const rooms = await getAllRooms();

  return(  
  <div 
  className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3
         lg:grid-cols-4 2xl:grid-cols-6 gap-8">
       {rooms?.map((room:any) => (
        <Suspense fallback={<Loading/>}> 
         <RoomCard
           key={room.id}
           data={room}
         /></Suspense>
       ))} 
     </div>)
}
