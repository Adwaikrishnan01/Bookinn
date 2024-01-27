"use client";

import useRegisterModal from '../../hooks/useRegisterModal';
import {FieldValues, useForm,SubmitHandler } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import axios from "../../../axios"
import Button from '../Button';

const RegisterModal = () => {
    const registerModal=useRegisterModal()
    const { register, handleSubmit ,formState: { errors } } = useForm<FieldValues>({defaultValues: {
      name: '',
      email: '',
      password: ''
    },})
    console.log("modalopen",registerModal.isOpen)
  
  const onSubmit: SubmitHandler<FieldValues>=(fdata)=>{
      console.log("formn sutted",fdata)
      axios.post('api/register', fdata)
      .then(() => {
       registerModal.onClose();
       alert("User registered")
    })
    .catch((error) => {
     alert(error)
    })
    
  }
      
    if(!registerModal.isOpen){
      return null
    }

    return (
      <div
      className="
      justify-center items-center 
      flex overflow-x-hidden overflow-y-auto 
      fixed inset-0  z-50 
      outline-none 
      focus:outline-none bg-neutral-800/70"> 
     <div className="
      relative w-full
      md:w-4/6 lg:w-3/6 xl:w-2/5
      my-6 mx-auto 
      h-full lg:h-auto md:h-auto">
        <div className="min-h-screen flex 
        items-center justify-center"> 
          <form className="bg-white p-8 shadow-md rounded-md w-full max-w-md" 
          onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold mb-6 flex justify-between">Register
            <span className="text-red-800 text-sm" onClick={registerModal.onClose}>X</span></h2>
          
            <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="string"
                id="name"
                  {...register("name",{required:true})}
                className="border border-gray-300 p-2 w-full rounded-md focus:outline-none
                 focus:border-blue-500"
                
              />
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
                  
                />{errors && (<p className="text-red-500">{"Error in password"}</p>)}
            </div>
             <Button onClick={()=>{}} label={"Register"} />
             <Button icon={AiFillGithub} label={"Sign in with github"} 
               onClick={() => signIn('github')} outline/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal