
import {prisma} from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function POST(
    request: Request, 
  ) {
  
    const body = await request.json();
    const {userId,roomId} = body;
  
    Object.keys(body).forEach((value: any) => {
      if (!body[value]) {
        NextResponse.error();
      }
    });
  
    const favourite = await prisma.favorite.create({
      data: {
      userId,roomId
      }
    });
  
    return NextResponse.json(favourite);
  }