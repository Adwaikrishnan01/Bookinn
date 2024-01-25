import { PrismaClient} from "@prisma/client"
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()
export async function POST(req:Request){
//  const {email,name,password}=await req.body
//  const hashedPassword = await bcrypt.hash(password, 12);
const body = await req.json();
const { email,name,password,} = body;
 const hashedPassword = await bcrypt.hash(password, 10);

   const user = await prisma.user.create({
    data:{ email,
      name,
     hashedPassword,
    }
     
  });

  return NextResponse.json(user);
}

   

