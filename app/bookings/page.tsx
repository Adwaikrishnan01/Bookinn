import getCurrentUser from "../actions/getCurrentUser";
import getUserBookings from "../actions/getUserBookings";
import BookingClient from "./BookingClient";

const userBookings = async() => {
 const currentUser=await getCurrentUser()

 if(!currentUser){
    return null
 } 
 const userId=currentUser.id;
 const userBookings=await getUserBookings(userId)
    
    if(!userBookings){
      return null
    }
    return ( 
        <BookingClient userBookings={userBookings}/>
     );
}
 
export default userBookings;