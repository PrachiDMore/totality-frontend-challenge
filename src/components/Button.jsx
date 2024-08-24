import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IoIosArrowRoundBack, IoIosArrowRoundForward  } from "react-icons/io";

const Button = ({text, className="", icon}) => {
  return (
    <button className={twMerge ("flex justify-center items-center gap-3 bg-accentGreen border border-x-2 border-y-2 border-accentGreen rounded-full px-6 py-3 text-white font-medium" , className)}>{text}  {icon}</button>
  )
}

export default Button
