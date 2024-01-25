"use client"
import {AiOutlineMenu} from 'react-icons/ai'
import {useState} from "react"
import Image from 'next/image'
import MenuItem from './MenuItem'
import useRegisterModal from '../../hooks/useRegisterModal';
import useLoginModal from '../../hooks/useLoginModal'
import { useSession } from 'next-auth/react';
const UserMenu = () => {
  const [open,setOpen]=useState(false);
  const registerModal=useRegisterModal()
  const loginModal=useLoginModal()
  const { data: session, status } = useSession();
  console.log("user in seeeion",session)
  return (
    <div className='border-[1px] border-neutral-200 p-4 relative
    rounded-md flex flex-row items-center gap-3 cursor-pointer md:px-2 md:py-1
     hover:shadow-md transition
          ' onClick={()=>{setOpen(!open)}}>
       <AiOutlineMenu/>
        <Image className="rounded-full hidden md:block"
        height="30" width="30" alt="avatar" src="/avatar.png"/>
        {open&& <div className='absolute
            rounded-md
            shadow-md
            w-[200px]
            md:w-5/5
            bg-white 
            overflow-hidden
            right-2
            top-11
            text-sm'>
                <div className='flex flex-col cursor-pointer'>
                  <>  
                  <MenuItem onClick={registerModal.onOpen} label="Register"/>
                  <MenuItem onClick={loginModal.onOpen} label="Login"/>
                  </>
                </div>
                </div>
        }
           
    </div>
  )
}

export default UserMenu