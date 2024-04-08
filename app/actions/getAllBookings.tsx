import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async function getAllBookings(){
    
    try{
        const bookings=await prisma.bookings.findMany({
            orderBy:{
                createdAt:'desc'
            }
        })
     
    if(!bookings){
        return null
    } 
    const safeBookings = bookings.map((room) => ({
        ...room,
        createdAt: room.createdAt.toISOString(),
      }));
  
      return safeBookings;
  
    }catch(error:any){
       throw new Error(error);
    } 
}