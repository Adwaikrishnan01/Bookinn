"use server";
import {prisma} from "@/app/libs/prismadb";
import { getServerSession } from "next-auth/next"
import { NextApiRequest, NextApiResponse } from "next"
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
  return await getServerSession(authOptions)
}


export default async function getCurrentUser(){
    
    try{
      
        const session = await getSession()
    
        if (!session?.user?.email) {
          return null;
        }
       
        console.log("JJDFKS",session)
        const currentUser=await prisma.user.findUnique({
          where:{
            email:session?.user.email as string
          }
   })
   console.log("userfoundbyemail",currentUser)
   if(!currentUser){
    return null
   }
   const safeUser = {
    ...currentUser,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: 
        currentUser.emailVerified?.toISOString() || null,
  };
   return safeUser
    }catch(error:any){
        throw new Error(error)
    }
   
}
