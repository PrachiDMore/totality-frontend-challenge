
import Navbar from '@/components/Navbar'
import React from 'react'
import { Montserrat } from "next/font/google";
import Footer from '@/components/Footer';
import { GrLocation } from "react-icons/gr";
import { FaCircleCheck } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi";
import { LuBath } from "react-icons/lu";
import { CgArrowsExpandRight } from "react-icons/cg";
import properties from '../../../../propertyData';
import Link from 'next/link';
import { IoBedOutline } from "react-icons/io5";
import Button from '@/components/Button';



const montserrat = Montserrat({ subsets: ['latin'] })

const Page = ({ params }) => {
  const property = properties.find((property) => property.id === params.id)
  console.log(property)
  if (!property) return <div>asdfgh</div>

  return (
    <div className={`bg-bgWhite w-screen ${montserrat.className}`}>
      <Navbar />

      <div className='w-screen h-auto px-28 py-10 flex gap-10'>
        <div className='w-[70%] flex flex-col gap-8'>

          <div className='flex justify-between items-center'>
            <div>
              <h1 className="text-3xl text-accentGreen font-semibold">{property.propertyName}</h1>
              <div className='flex gap-2 items-center'>
                <GrLocation className='text-darkGray' />
                <p className='text-darkGray'>{property.location}</p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl text-accentGreen font-semibold">₹ {property.price.toLocaleString()}/month</h1>
            </div>
          </div>

          <div className='w-full flex flex-col gap-4'>
            <img className='w-full h-[70%] object-cover rounded-2xl' src="/assets/property1.jpg" />
            <div className='flex w-full gap-4'>
              <img className='w-full h-40 rounded-lg object-cover' src="/assets/property2.jpg" />
              <img className='w-full h-40 rounded-lg object-cover' src="/assets/feedback.jpg" />
              <img className='w-full h-40 rounded-lg object-cover' src="/assets/hero-right.jpg" />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className="text-2xl text-darkGray font-semibold">Overview</h1>
            <div className='grid grid-cols-4 gap-3'>
              <div className='flex gap-2 items-center'>
                <div className='bg-lightGreen p-2 rounded-full'>
                  <HiOutlineHome className='text-accentGreen w-6 h-6' />
                </div>
                <div>
                  <p className='font-medium'>Property Type</p>
                  <p className='text-sm '>{property.propertyType}</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='bg-lightGreen p-2 rounded-full'>
                  <IoBedOutline className='text-accentGreen w-6 h-6' />
                </div>
                <div>
                  <p className='font-medium'>Bedrooms</p>
                  <p className='text-sm '>{property.bedrooms}</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='bg-lightGreen p-2 rounded-full'>
                  <LuBath className='text-accentGreen w-6 h-6' />
                </div>
                <div>
                  <p className='font-medium'>Bathrooms</p>
                  <p className='text-sm '>{property.bathrooms}</p>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='bg-lightGreen p-2 rounded-full'>
                  <CgArrowsExpandRight className='text-accentGreen w-6 h-6' />
                </div>
                <div>
                  <p className='font-medium'>Sqft</p>
                  <p className='text-sm '>{property.area}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className="text-2xl text-darkGray font-semibold">About This Listing</h1>
            <p className='text-darkGray'>{property.description}</p>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className="text-2xl text-darkGray font-semibold">Features & Amenities</h1>
            <div className='grid grid-cols-3 gap-3'>
              {property.amenities.map((amenity, index) => {
                return  <div className='flex gap-2 items-center' key={index}>
                  <FaCircleCheck className='text-accentGreen w-4 h-4' />
                  <p>{amenity}</p>
                </div>
              })}
            </div>
          </div>

          <div className='w-full flex justify-between gap-5'>
            <Button className={'w-full'} text={'Book Now'} />
            <Button className={'w-full bg-bgWhite hover:bg-accentGreen text-accentGreen hover:text-white duration-200'} text={'Add to Cart'} />
          </div>

        </div>

        <div className='w-[30%] flex flex-col gap-4'>
          <h1 className="text-2xl text-accentGreen font-semibold">Similar Properties</h1>
          <div className='w-full h-max grid grid-cols-1 gap-8 '>

            {properties.filter((item) => item.propertyType === property.propertyType && item.id != property.id).slice(0,8).map((property, index) => (
              <Link href={`/property/${property.id}`} className='flex bg-lightGreen rounded-xl gap-3 p-3' key={index}>
                <img className="w-28 h-28 rounded-2xl" src="/assets/property1.jpg" />
                <div className=' flex flex-col justify-between flex-1 overflow-hidden'>
                  <div className='flex flex-col flex-1'>
                    <h1 className='text-accentGreen font-semibold'>{property.propertyName}</h1>
                    <p className='text-sm text-ellipsis text-nowrap overflow-hidden'>{property.location}</p>
                  </div>
                  <div>
                    <p className='text-accentGreen text-xl font-semibold'>₹ {property.price.toLocaleString()}/mo</p>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page
