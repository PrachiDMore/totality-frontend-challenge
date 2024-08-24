import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Button from './Button';
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-screen bg-accentGreen text-white px-28 py-5 flex flex-col items-center ">
      <div className='w-full flex justify-between gap-16 py-8 pb-10 border-b-2 border-white/20 '>
        <div className='w-[40%] flex flex-col gap-5'>
          <h1 className="text-4xl font-semibold">Ready to find your perfect property?</h1>
          <div className='flex justify-between rounded-full bg-white/20 '>
            <input className='w-full bg-transparent outline-none py-3 px-4' placeholder='Find your property...' />
            <Button className={"bg-white border-white px-2 py-1 text-sm"} icon={<IoIosArrowRoundForward className="text-accentGreen w-7 h-7" />} />
          </div>
        </div>

        <div className='w-[35%] flex flex-col items-center justify-center text-white/50 gap-2'>
          <p>Home</p>
          <p>About Us</p>
          <p>Listing</p>
          <p>Contact Us</p>
        </div>

        <div className='w-[25%] flex flex-col items-end justify-center gap-3 '>
          <div>
            <h1 className='text-xl text-end font-medium'>Home Seek</h1>
            <p className='text-end text-white/50'>456 Elmwood Avenue, <br />Apt 7B Springfield,<br /> IL 62704 USA</p>
          </div>
          <div className='flex gap-5'>
            <div className='bg-lightGray/30 rounded-full p-2'><FaInstagram className='w-4 h-4' /></div>
            <div className='bg-lightGray/30 rounded-full p-2'><FaFacebookF className='w-4 h-4' /></div>
            <div className='bg-lightGray/30 rounded-full p-2'><FaTwitter className='w-4 h-4' /></div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center py-8 pb-10'>
        <p className='text-gray-400 text-sm '>&copy; 2024 Home Seek Real Estate. All Rights Reserved.</p>

      </div>
    </div>

  )
}

export default Footer
