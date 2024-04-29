"use client"

import RoomCard from "../components/Room/RoomCard";
import {safeBookings } from "../types/intex";

interface BookingClientProps{
userBookings:safeBookings | null
}

const BookingClient:React.FC<BookingClientProps> =({userBookings}) => {
if(!userBookings){
  return <h2 className="text-3xl font-semibold tracking-tighter">
                    your bookings is empty</h2>
}
    return (
      <section className="container mx-auto px-5 lg:px-10 mt-10">
         <h2 className="text-3xl font-semibold tracking-tighter">Your Bookings</h2>
                    <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3
               lg:grid-cols-4 2xl:grid-cols-6 gap-8">
             {userBookings?.map((userBooking:any,index: number) => (
             <div key={index}> 
               <RoomCard
                 key={userBooking.id}
                 data={userBooking.room}
               />
               <div className="bg-slate-300 rounded-md my-1 py-2 px-3 text-gray-700 font-semibold">
                <p className="">Checkin : {userBooking.startDate.substring(0, 10)}</p>
                <p>Checkout : {userBooking.endDate.substring(0, 10)}</p>
                <p>Total Price : {userBooking.totalPrice}</p>
                </div>
               </div>
             ))}
           </div>
       

           </section>
     );
}
 
export default BookingClient;