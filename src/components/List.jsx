import React from 'react'
import { FaCartShopping, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CgArrowsExpandRight } from "react-icons/cg";
import properties from '../../propertyData';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const List = ({className}) => {
  return (
    <div className={twMerge('w-full h-max grid grid-cols-2 gap-8 ' , className)}>
      {properties.map((property, index) => (
        <Link href='/property' className="flex flex-col h-[335px] relative" key={index}>
          <img className="w-full h-64 rounded-2xl" src="./assets/property1.jpg"  />
          <div className="absolute bottom-0 left-1/2 w-11/12 -translate-x-1/2 bg-lightGreen rounded-xl p-3 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">₹{property.price} /month</p>
              <div className="flex gap-3 items-center">
                <div className="bg-accentGreen/40 p-2 rounded-full">
                  <FaCartShopping className="text-white w-3 h-3" />
                </div>
                <div className="bg-accentGreen p-2 rounded-full">
                  <FaArrowUpRightFromSquare className="text-white w-3 h-3" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-semibold">{property.propertyName}</h1>
              <p className="text-sm font-medium">{property.propertyType}</p>
              <p className="text-xs">{property.location}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <IoBedOutline className="text-lightGray" />
                <p className="text-darkGray text-sm">{property.bedrooms} Bed</p>
              </div>
              <div className="flex gap-2 items-center">
                <LuBath className="text-lightGray" />
                <p className="text-darkGray text-sm">{property.bathrooms} Bath</p>
              </div>
              <div className="flex gap-2 items-center">
                <CgArrowsExpandRight className="text-lightGray" />
                <p className="text-darkGray text-sm">{property.area} sqft</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>

    // <div className='flex flex-col h-[335px] relative'>
    //   <img className="w-full h-64 rounded-2xl " src="./assets/property1.jpg" />
    //   <div className='absolute bottom-0 left-1/2 w-11/12 -translate-x-1/2  bg-lightGreen rounded-lg p-3 flex flex-col gap-3'>
    //     <div className='flex justify-between items-center'>
    //       <p className='text-lg font-semibold'>25000Rs/mo</p>
    //       <div className='flex gap-3 items-center'>
    //         <div className='bg-accentGreen/40 p-2 rounded-full'>
    //           <FaCartShopping className="text-white w-3 h-3" />
    //         </div>
    //         <div className='bg-accentGreen p-2 rounded-full'>
    //           <FaArrowUpRightFromSquare className="text-white w-3 h-3" />
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <h1 className='font-medium'>Blue Ridge Vista</h1>
    //       <p className=' text-xs'>San Francisco</p>
    //     </div>
    //     <div className='flex justify-between items-center'>
    //       <div className='flex gap-2 items-center'>
    //         <IoBedOutline className='text-lightGray' />
    //         <p className='text-darkGray text-sm'>4 Bed</p>
    //       </div>
    //       <div className='flex gap-2 items-center'>
    //         <LuBath className='text-lightGray' />
    //         <p className='text-darkGray text-sm'>3 Bath</p>
    //       </div>
    //       <div className='flex gap-2 items-center'>
    //         <CgArrowsExpandRight className='text-lightGray' />
    //         <p className='text-darkGray text-sm'>3230 sqft</p>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  )
}

export default List
