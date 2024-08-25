import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IoIosArrowRoundBack, IoIosArrowRoundForward  } from "react-icons/io";
import Link from 'next/link';

const Button = ({text, className="", icon, onClick, href=""}) => {
  return (
    <Link href={href} onClick={onClick} className={twMerge ("w-max flex justify-center items-center gap-3 bg-accentGreen hover:bg-bgWhite duration-200 border border-x-2 border-y-2 border-accentGreen rounded-full px-6 py-3 text-white hover:text-accentGreen group font-medium" , className)}>{text}  {icon}</Link>
  )
}

export default Button
