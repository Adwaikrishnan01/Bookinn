
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useMemo } from 'react';
import getCurrentUser from '../actions/getCurrentUser';
import useLoginModal from './useLoginModal';
import axios from "../../axios"
import { useRouter } from 'next/navigation';

const useFavourite = async({roomId,currentUser}) => {
    const loginModal=useLoginModal()
    const router=useRouter()
    const { data: session, status } = useSession(); 
    const email=session?.user?.email
    if(!email){
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
 
export default useFavourite;