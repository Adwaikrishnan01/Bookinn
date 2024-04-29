import {prisma} from "@/app/libs/prismadb";


export default async function getUserBookings(uid: string)
   {
  try {
    const user = await prisma.user.findUnique({
      where: { id: uid },
    });

    if (!user) {
      throw new Error(`User with ID ${uid} not found.`);
    }


    const userBookings = await prisma.bookings.findMany({
      where: {
        userId:uid
        }, select: {
          room: {
              select: {
                  imgSrc: true,
                  id: true,
                  price: true,
                  description: true,
                  address: true,
                  createdAt:true ,
                  Favorite: {
                    where:{
                      userId:uid
                    }
                  },
              }
          },createdAt:true,
          startDate:true,
          endDate:true,
          totalPrice:true
      }
    });

    if (!userBookings) {
      return null;
    }
    const safeBookings = userBookings.map(
      (userBookings) => ({
      ...userBookings,
      createdAt: userBookings.createdAt.toISOString(),
      startDate: userBookings.startDate.toISOString(),
      endDate: userBookings.endDate.toISOString(),
      room: {
        ...userBookings.room,
        createdAt: userBookings.room.createdAt.toISOString(),
      },
    }));

    return safeBookings;
  } catch (error: any) {
    throw new Error(error);
  }
}