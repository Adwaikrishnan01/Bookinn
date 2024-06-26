import {prisma} from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function POST(
    request: Request, 
  ) {
  

    const body = await request.json();
    const { 
        name,
        description,
        petsallowed,
        roomCount,
        bathroomCount,
        numberofBeds,
        price,
        imgSrc,
        rating,
        airConditioned,
        address:{
          city,state,country
        }
      
     } = body;
  
    Object.keys(body).forEach((value: any) => {
      if (!body[value]) {
        NextResponse.error();
      }
    });
  
    const room = await prisma.room.create({
      data: {
        name,
        description,
        petsallowed,
        roomCount,
        bathroomCount,
        numberofBeds,
        price,
        imgSrc,
        rating,
        airConditioned,
        address:{
          create: {
            city,
            state,
            country
          }
        }
      }
    });
  
    return NextResponse.json(room);
  }
   