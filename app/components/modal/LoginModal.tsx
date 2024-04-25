"use client";

import useLoginModal from '../../hooks/useLoginModal';
import { useForm,SubmitHandler} from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiFillGithub,AiFillGoogleCircle } from "react-icons/ai";
import Button from '../Button';

type FormValues = {
  email: string
  password: string
}

const LoginModal = () => {
    const loginModal=useLoginModal()
    const { register, handleSubmit ,formState: { errors } } = useForm<FormValues>()
    
   
    const onSubmit: SubmitHandler<FormValues>=(fdata)=>{
      
      signIn('credentials',{...fdata}).then((response:any)=>{
      
      })                      //uses authorize merthord from nextauth.ts 
      
  }

    if(!loginModal.isOpen){
      return null
    }

    return (
      <div
      className="
      justify-center 
      items-center 
      flex 
      overflow-x-hidden 
      overflow-y-auto 
      fixed 
      inset-0 
      z-50 
      outline-none 
      focus:outline-none
      bg-neutral-800/70">
        
      <div className="
      relative w-full
      md:w-4/6 lg:w-3/6 xl:w-2/5
      my-6
      mx-auto 
      h-full 
      lg:h-auto
      md:h-auto">
        <div className="min-h-screen flex items-center justify-center"> 
        
          <form className="bg-white p-8 shadow-md rounded-md w-full max-w-md" 
          onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold mb-6 flex justify-between">login
            <span className="text-red-800 text-sm" onClick={loginModal.onClose}>X</span></h2>
          
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                
                 {...register("email",{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },})}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none
                 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                  {...register("password",{required:true,minLength:
                    {value:5,message:"password length should be greater then 5"}})}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none
                 focus:border-blue-500"
                
              />{errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md w-full
               hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              login
            </button>
            <Button icon={AiFillGithub} label={"Sign in with github"} 
               onClick={() => signIn('github')} outline/>
                <Button icon={AiFillGoogleCircle} label={"Sign in with google"} 
               onClick={() => signIn('google')} outline/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal