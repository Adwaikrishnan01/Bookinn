'use client';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { currUser } from "../types/intex";
import { Form } from "react-hook-form";
import axios from "../../axios";

interface HeartButtonProps {
  roomId: string;
  userId: string;

}
const HeartButton: React.FC<HeartButtonProps> = ({ roomId, userId }) => {
  const addToFavorites = async (formData: FormData) => {

    const userId = formData.get("userId") as string
    const roomId = formData.get("roomId") as string
    
    await axios.post("/api/favorites", {
      userId: userId,
      roomId: roomId,
    }).then(() => {
      alert("added to favorites")
    }).catch((error) => {
      console.log(error)
    })

  }

  return (
    <form action={addToFavorites}>

      <div className="relative
          hover:opacity-80
          transition
          cursor-pointer">
        <input type="hidden" name="roomId" value={roomId} />
        <input type="hidden" name="userId" value={userId} />
        <button type="submit">
        <AiOutlineHeart
          size={28}
          className="
            fill-white
            absolute
            -top-[2px]
            -right-[2px]"/>
        <AiFillHeart
          size={24}
          className={
            'fill-red-500'} /></button>
      </div></form>

  );
}

export default HeartButton;