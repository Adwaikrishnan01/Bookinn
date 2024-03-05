import prisma from "@/app/libs/prismadb";


export default async function getAllRooms(){
    
    try{
        const rooms=await prisma.room.findMany({
            orderBy:{
                createdAt:'desc'
            }
        })
     
    if(!rooms){
        return null
    } 
    const safeRooms = rooms.map((room) => ({
        ...room,
        createdAt: room.createdAt.toISOString(),
      }));
  
      return safeRooms;
  
    }catch(error:any){
       throw new Error(error);
    } 
}
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function getAllRooms(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const rooms = await prisma.room.findMany({});
//         return rooms; // Return the array of rooms directly
//     } catch (error) {
//         console.error("Error retrieving rooms:", error);
//         throw new Error("Failed to retrieve rooms"); // Throwing an error to indicate failure
//     }
// }