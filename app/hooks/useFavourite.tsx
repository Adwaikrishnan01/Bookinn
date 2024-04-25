
import { useCallback, useEffect, useMemo } from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import useLoginModal from './useLoginModal';
import axios from "../../axios"
import { useRouter } from 'next/navigation';
import { currUser } from '../types/intex';
interface uFavorite{
  roomId:string;
  currentUser?:currUser | null;
}
const useFavorite = async({roomId,currentUser}:uFavorite) => {
    const loginModal=useLoginModal()
    const router=useRouter()
    
    if(!currentUser){
        return loginModal.onOpen()    
    }
    
   
     const hasFavorited = useMemo(() => {
        const list = currentUser?.favorites || [];
    
        return list.includes(roomId);
      }, [currentUser, roomId]);

     const toggleFavorite = useCallback(async(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
       
        try {
          let request;
          if (hasFavorited) {
            request = () => axios.delete(`/api/favorites/${roomId}`);
          } else {
            request = () => axios.post(`/api/favorites/${roomId}`);
          }
    
          await request();
            router.refresh();
            alert('Success');   
           }catch (error) {
            alert('Something went wrong.');
            console.error('Request failed:', error);
        }
        
      }, [
        currentUser, 
        hasFavorited, 
        roomId, 
        loginModal,
        router
      ]);

    return {hasFavorited,toggleFavorite};
}
 
export default useFavorite;