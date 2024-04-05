'use client';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavourite from "../hooks/useFavourite";

const HeartButton = ({ roomId, currentUser }) => {
  const { hasFavorited, toggleFavorite } = useFavourite({ roomId, currentUser }); //if roomid is in currentUser has favorited is true
  console.log("Type of hasfavorited", hasFavorited, toggleFavorite)
  return (
    <div
      onClick={toggleFavorite}
      className="
          relative
          hover:opacity-80
          transition
          cursor-pointer">
      <AiOutlineHeart
        size={28}
        className="
            fill-white
            absolute
            -top-[2px]
            -right-[2px]
          "
      />
      <AiFillHeart
        size={24}
        className={
          hasFavorited ? 'fill-red-500' : 'fill-neutral-500/70'
        }
      />
    </div>
  );
}

export default HeartButton;