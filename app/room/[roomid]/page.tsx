
import getRoomById from "@/app/actions/getRoomById"
import SingleRoomClient from "./SingleRoomClient"
import { useRouter } from 'next/router';

interface Params{
  roomId?:string
}
const RoomPage = async ({params}:{params:Params}) => {

  // const router = useRouter();
  // const { roomId } = router.query;
  const uid=params?.roomId
  const room=await getRoomById(uid)//get room by id 
  console.log("contains address",room)
  return (
  <> 
      {/* <p>Single room Clien tpage 
        Render all the room components here
        import curretn user reservation here 
        Can also create another client component fior display
      </p> */}  
      <div className="my-2 mx-1 
      md:mx-16 lg:mx-24"> 
      <SingleRoomClient room={room}/>
     </div>
  </>
   
  )
}

export default RoomPage;






