"use client"
import { RoomHeader, RoomBody } from "../../components/Room/SingleRoom"
import { useSession } from 'next-auth/react';
import { currUser, safeRoom } from "@/app/types/intex";
import { User } from "@prisma/client";


interface SingleRoomProps {
    room: safeRoom;
    currentUser?:currUser;
}

const SingleRoomClient: React.FC<SingleRoomProps> = ({ room, currentUser }) => {

    return (
        <>
            <RoomHeader title={room?.name}
                image={room?.imgSrc}
                roomId={room.id}
                currentUser={currentUser} />

            <RoomBody
                roomcount={room?.roomCount}
                bathroom={room.bathroomCount}
                numberofBeds={room.numberofBeds}
                address={room.address}
                roomId={room.id}
                userId={currentUser?.id} 
                roomPrice={room.price}/>
                
        </>
    )
}

export default SingleRoomClient;