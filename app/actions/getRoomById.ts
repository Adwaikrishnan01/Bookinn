import { PrismaClient } from "@prisma/client"

interface Params {
  roomId?: string;
}

export default async function getRoomById(
  params: Params
) {
  const prisma=new PrismaClient()
  try {
    const { roomId } = params;

    const room = await prisma.room.findUnique({
      where: {
        id: roomId,
      },include:{
        address:true
      }
    });

    if (!room) {
      return null;
    }

    return {
      ...room,
     
    };
  } catch (error: any) {
    throw new Error(error);
  }
}