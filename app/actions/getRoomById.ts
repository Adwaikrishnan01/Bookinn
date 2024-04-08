import {prisma} from "@/app/libs/prismadb";


export default async function getRoomById(uid: string)
   {
  try {
    console.log("???????????",uid)
    const  roomId  = uid;

    const room = await prisma.room.findUnique({
      where: {
        id: roomId as string,
      },include:{
        address:true
      }
    });

    if (!room) {
      return null;
    }

    const safeRoom = {
        ...room,
        createdAt: room.createdAt.toISOString(),
      };
  
      return safeRoom;
  } catch (error: any) {
    throw new Error(error);
  }
}