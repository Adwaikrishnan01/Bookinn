import {prisma} from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function POST(
    request: Request, 
  ) {
  

    const body = await request.json();
    const { 
        userId,
        roomId,
        startDate,
        endDate,
        totalPrice
      
     } = body;
  
    Object.keys(body).forEach((value: any) => {
      if (!body[value]) {
        NextResponse.error();
      }
    });
  
    const booking = await prisma.bookings.create({
      data: {
        userId,
        roomId,
        startDate,
        endDate,
        totalPrice
      }
    });
  
    return NextResponse.json(booking);
  }