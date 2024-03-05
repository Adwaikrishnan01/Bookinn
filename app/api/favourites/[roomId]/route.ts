import { NextResponse } from "next/server";
import { useSession } from 'next-auth/react';
import prisma from "@/app/libs/prismadb";
interface Params{
 roomId:string;
}

export async function POST( request: Request, 
    { params }:{params:Params}){
   const { data: session, status } = useSession(); 
   const user=session?.user
if(!user){
    return NextResponse.error()
}

const currentUser=await prisma.user.findUnique({
    where:{
        email:user?.email as string
    }
   })
if(!currentUser){
    return NextResponse.error()
}
   const {roomId}=params

   if(!roomId){
    throw new Error('Invalid room id')
   }
   let favorites = [...(currentUser.favorites || [])];
   favorites.push(roomId)
   favorites.push(roomId);

   const newUser = await prisma.user.update({
     where: {
       id: currentUser.id
     },
     data: {
       favorites
     }
   });
   return NextResponse.json(newUser);
}
//delete roomid frim favourite onclick

export async function DELETE(request: Request, 
    { params }: { params: Params }){
        const { data: session, status } = useSession(); 
        const user=session?.user
     if(!user){
         return NextResponse.error()
     }
     
     const currentUser=await prisma.user.findUnique({
         where:{
             email:user?.email as string
         }
        })
     if(!currentUser){
         return NextResponse.error()
     }
        const {roomId}=params
     
        if(!roomId){
         throw new Error('Invalid room id')
        }
        let favorites = [...(currentUser.favorites || [])];
        favorites.filter(favoriteIds=>
               favoriteIds!==roomId
        ) 
     
        const newUser = await prisma.user.update({
          where: {
            id: currentUser.id
          },
          data: {
            favorites
          }
        });
        return NextResponse.json(newUser);
}

