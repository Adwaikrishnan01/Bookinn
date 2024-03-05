import prisma from "@/app/libs/prismadb";

interface Params {
  roomId?: string;
}

export default async function getRoomById(uid: Params)
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