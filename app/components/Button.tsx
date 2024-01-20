"use client"
import {IconType} from "react-icons"
interface ButtonProps{
    label:string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled:boolean;
    outline:boolean;
    small:boolean;
    icon?:IconType;
}

const Button:React.FC<ButtonProps> = ({label,onClick,disabled,outline,small,icon:Icon}) => {
  return (
    <button disabled={disabled}
            onClick={onClick}
            className={` disabled:opacity-70 disabled:cursor-not-allowed
            hover:opacity-80 cursor-pointer relative rounded-md    
             ${outline ? 'bg-white' : 'bg-green-500'}
            ${outline ? 'border-solid border-2 border-black' : 'border-solid border-2 border-green-700'}
            ${outline ? 'text-black' : 'text-white'} 
            ${small? 'px-2 py-1':'px-3 py-1'}
            ${small? 'font-light':'font-bold'}
            ${small? 'text-sm':'text-md'}`}>
                {Icon&&
                (<Icon size={24} className="absolute"></Icon>)}
            {label}
            </button>
  )
}

export default Button