"use client"

import getUserBookings from "../actions/getUserBookings";
import RoomCard from "../components/Room/RoomCard";
import {SafeBookings, safeRoom } from "../types/intex";

interface BookingClientProps{
userBookings:SafeBookings[]
}

const BookingClient:React.FC<BookingClientProps> =({userBookings}) => {
console.log("userBookiings",userBookings)

    return (
        <div 
        className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3
               lg:grid-cols-4 2xl:grid-cols-6 gap-8">
             {userBookings?.map((userBooking:any) => ( //cannot map on bookings ony on rooms
               <RoomCard
                 key={userBooking.id}
                 data={userBooking.room}
               />
             ))}
           </div>
     );
}
 
export default BookingClient;