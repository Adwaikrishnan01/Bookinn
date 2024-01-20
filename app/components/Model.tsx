"use client"
import { useCallback,useEffect,useState } from "react"
import Button from "./Button";

interface modelProps{
  isOpen:boolean,   //controls opening and closing of models from external components
  onClose:()=>void,
  onSubmit:()=>void,
  disabled?:boolean,
}


const Model:React.FC<modelProps> = (isOpen,onClose,disabled) => {
  const [showModel,setshowModel]=useState(isOpen);

useEffect(()=>{
  setshowModel(isOpen)
},[isOpen])

  if(!isOpen){
    return null
  }
  return (
    <div className="w-72 z-80 border-2 border-gray-600 rounded-md shadow-sm py-2 m-0 p-0">

      
        <div className="text-center text-xl shadow-sm border-b-2 border-gray-500" >title</div>
        <div className="d-flex text-sm mx-2 my-4">
            <p className="">content</p>
            <p>content</p>
            <p>content</p>
        </div>
        <div className="flex mx-2 space-x-3">
          <Button outline={true} label="cancel" disabled={false} onClick={()=>{}} small/>
          <Button outline={false} label="again" disabled={false} onClick={()=>{}} small/>
        </div>
    </div>
  )
}

export default Model
