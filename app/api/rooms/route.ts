import { PrismaClient} from "@prisma/client"
import { NextResponse } from "next/server";


export async function POST(
    request: Request, 
  ) {
  
  const prisma=new PrismaClient()
    const body = await request.json();
    const { 
        name,
        descriptions,
        petsallowed,
        roomCount,
        bathroomCount,
        guestCount,
        numberofBeds,
        price,
        imageSrc,
        rating,
        airConditioned,
        address,
        locationValue,
     } = body;
  
    Object.keys(body).forEach((value: any) => {
      if (!body[value]) {
        NextResponse.error();
      }
    });
  
    const room = await prisma.room.create({
      data: {
        name,
        descriptions,
        petsallowed,
        roomCount,
        bathroomCount,
        guestCount,
        numberofBeds,
        price: parseInt(price, 10),
        imageSrc,
        rating,
        airConditioned,
        address,
        locationValue,
        
      }
    });
  
    return NextResponse.json(room);
  }
   