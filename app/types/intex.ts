import { User,Room,Address } from "@prisma/client";

export type currUser=Omit<
User,
"createdAt" | "updatedAt" | "emailVerified"
> & {
createdAt: string;
updatedAt: string;
emailVerified: string | null;
};

export type safeRoom = Omit<Room, "createdAt"> & {
        createdAt: string; address:Address[];
      };

export type Roomdata=Room

export type address={
  country:string,
  city:string,
  state:string
}