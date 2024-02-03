import { PrismaClient} from "@prisma/client"
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()
export async function POST(req:Request)
//{
//  const {email,name,password}=await req.body
//  const hashedPassword = await bcrypt.hash(password, 12);
const body = await req.json();
const { title,price,maxPeople,desc} = body;

//    const room = await prisma.rooms.create({
//     data:{ 
//            title,price,maxPeople,desc}    
//   });

//   return NextResponse.json(room);
// }

   