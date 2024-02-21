import {RoomHeader,RoomBody} from "../../components/Room/SingleRoom"
import getRoomById from "@/app/actions/getRoomById"

interface Params{
  RoomId:string;
}
const RoomPage = async ({params}:{params:Params}) => {
   const room=await getRoomById(params)//get room by id 
  return (
  <> 
      {/* <p>Single room Clien tpage 
        Render all the room components here
        import curretn user reservation here 
        Can also create another client component fior display
      </p> */} 
      <div className="flex">  
      <RoomHeader title={title}
          image={image}
          currUser={currUser}
     /></div>
     <div>
      <RoomBody/>
     </div>
   


  </>
   
  )
}

export default RoomPage;






