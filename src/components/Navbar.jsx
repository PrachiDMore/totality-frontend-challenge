"use client"

import React, { useState } from 'react'
import Button from './Button'
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { twMerge } from 'tailwind-merge';

const Navbar = () => {

  const [show, setShow] = useState(false);


  return (
    <div>
      {/* desktop */}
      <div className='w-screen px-28 py-4 lg:flex hidden justify-between items-center '>
        <div>
          <img className='w-14 h-14' src="/assets/logo1.png" alt="" />
        </div>
        <div className='flex gap-14 justify-between items-center'>
          <Link className='text-accentGreen hover:text-lightGray font-medium' href='/'>Home</Link>
          <Link className='text-accentGreen hover:text-lightGray font-medium' href='/'>About Us</Link>
          <Link className='text-accentGreen hover:text-lightGray font-medium' href='/listing'>Listing</Link>
          <Link className='text-accentGreen hover:text-lightGray font-medium' href='/'>Contact Us</Link>
        </div>
        <div className='flex gap-6 justify-between items-center'>
          <FaCartShopping className="text-lightGray w-6 h-6" />
          <FaUserCircle className="text-lightGray w-7 h-7" />
          {/* <Button text={"Book A Property"} /> */}
        </div>
      </div>


      {/* mobile */}
      <div className='w-screen px-8 py-4 lg:hidden flex justify-between items-center '>
        <Link href={'/'}>
          <img className='w-12 h-12 ' src="/assets/logo1.png" alt="Logo" />
        </Link>
        <IoMenu onClick={() => setShow(true)} className='text-xl cursor-pointer' />
      </div>

      <div className={twMerge('w-1/2 h-screen px-5 py-4 lg:hidden flex flex-col gap-8 items-center fixed top-0 backdrop-blur-lg duration-300 z-50 bg-bgWhite', show ? 'left-0' : 'left-1/2')}>
        <div className='w-full flex justify-between items-center '>
          <Link href={'/'}>
            <img className='w-12 h-12 ' src="/assets/logo1.png" alt="Logo" />
          </Link>
          <IoClose onClick={() => setShow(false)} className='text-xl cursor-pointer' />
        </div>
        <div className='w-full flex flex-col gap-3'>
          <Link className='text-accentGreen hover:text-lightGray font-medium' href='/'>Home</Link>
          <Link className='text-accentGreen hover:text-lightGray font-medium' href='/'>About Us</Link>
          <Link className='text-accentGreen hover:text-lightGray font-medium' href='/listing'>Listing</Link>
          <Link className='text-accentGreen hover:text-lightGray font-medium' href='/'>Contact Us</Link>
        </div>
        <div className='w-full flex gap-6 '>
          <FaCartShopping className="text-lightGray w-5 h-5" />
          <FaUserCircle className="text-lightGray w-5 h-5" />
        </div>
      </div>


    </div>
  )
}

export default Navbar
