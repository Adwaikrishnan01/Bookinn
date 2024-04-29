import { User,Room,Address,Bookings } from "@prisma/client";

export type currUser=Omit<
User,
"createdAt" | "updatedAt" | "emailVerified"
> & {
createdAt: string;
updatedAt: string;
emailVerified: string | null;
};

export type safeRoom = Omit<Room, "createdAt"> & {
        createdAt: string; 
        address:Address[];
      };

export type Roomdata=Room

export type address={
  country:string,
  city:string,
  state:string
}
export type SafeBookings = Omit<
  Bookings, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  room: safeRoom;
};
export type safeBookings= {
  createdAt: string;
  startDate: string;
  endDate: string;
  room: {
      createdAt: string;
      id: string;
      address: {
          id: string;
          country: string;
          state: string;
          city: string;
          roomId: string;
      }[];
      Favorite: {
          id: string;
          userId: string | null;
          roomId: string | null;
          createdAt: Date;
      }[];
      description: string;
      imgSrc: string;
      price: number;
  };
  totalPrice: number;
}[]