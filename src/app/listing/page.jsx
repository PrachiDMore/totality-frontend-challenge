"use client"

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Montserrat } from "next/font/google";
import { IoSearch } from "react-icons/io5";
import Checkbox from '@/components/Checkbox';
import { FaCartShopping, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { CgArrowsExpandRight } from "react-icons/cg";
import Footer from '@/components/Footer';
import properties from '../../../propertyData';
import Link from 'next/link';
import Button from '@/components/Button';



const montserrat = Montserrat({ subsets: ['latin'] })

const Page = () => {
  const [filters, setFilters] = useState({
    propertyTypes: [],
    priceRange: [0, 100000],
    bedrooms: 0,
    bathrooms: 0,
  });

  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Handle checkbox change
  const handlePropertyTypeChange = (type) => {
    setFilters((prevFilters) => {
      const newPropertyTypes = prevFilters.propertyTypes.includes(type)
        ? prevFilters.propertyTypes.filter((item) => item !== type)
        : [...prevFilters.propertyTypes, type];
      return { ...prevFilters, propertyTypes: newPropertyTypes };
    });
  };

  const handleMinPriceChange = (e) => {
    setFilters({
      ...filters,
      minPrice: Number(e.target.value),
    });
  };

  // Handle maximum price change
  const handleMaxPriceChange = (e) => {
    setFilters({
      ...filters,
      maxPrice: Number(e.target.value),
    });
  };

  const handleBedroomsChange = (e) => {
    setFilters({ ...filters, bedrooms: e.target.value });
  };

  // Handle bathrooms change
  const handleBathroomsChange = (e) => {
    setFilters({ ...filters, bathrooms: e.target.value });
  };


  // Filter properties based on the filters
  const applyFilters = () => {
    const filtered = properties.filter((property) => {
      const isTypeMatch = filters.propertyTypes.length === 0 || filters.propertyTypes.includes(property.propertyType);
      const isPriceMatch = property.price >= filters.minPrice && property.price <= filters.maxPrice;
      const isBedroomsMatch = filters.bedrooms === 0 || property.bedrooms >= filters.bedrooms;
      const isBathroomsMatch = filters.bathrooms === 0 || property.bathrooms >= filters.bathrooms;

      return isTypeMatch && isPriceMatch && isBedroomsMatch && isBathroomsMatch;
    });
    console.log(filtered)
    setFilteredProperties(filtered);
  };


  return (
    <div className={`bg-bgWhite w-screen ${montserrat.className}`}>
      <Navbar />

      <div className='w-screen h-auto lg:px-28 px-8 py-10 flex  gap-6'>
        <div className='w-[30%] h-max p-4 rounded-2xl bg-lightGreen lg:flex hidden flex-col gap-8'>

          <div className='flex flex-col gap-2'>
            <h1 className='text-accentGreen text-xl font-semibold'>Find your home</h1>
            {/* <div className='w-full flex gap-3 border border-2 border-accentGreen rounded-lg px-4 py-2'>
              <IoSearch className='text-accentGreen w-6 h-6 ' />
              <input className='w-full outline-none bg-transparent' type="text" placeholder='What are you looking for?' />
            </div> */}
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='filter-heading'>Property Type</h1>
            <Checkbox id={"all"} htmlFor={"all"} label={"All"} onChange={() => handlePropertyTypeChange('House')} />
            <Checkbox id={"house"} htmlFor={"house"} label={"House"} onChange={() => handlePropertyTypeChange('House')} />
            <Checkbox id={"apartment"} htmlFor={"apartment"} label={"Apartment"} onChange={() => handlePropertyTypeChange('Apartment')} />
            <Checkbox id={"shop"} htmlFor={"shop"} label={"Shop"} onChange={() => handlePropertyTypeChange('Shop')} />
            <Checkbox id={"office"} htmlFor={"office"} label={"Office"} onChange={() => handlePropertyTypeChange('Office')} />
            <Checkbox id={"villa"} htmlFor={"villa"} label={"Villa"} onChange={() => handlePropertyTypeChange('Villa')} />
            <Checkbox id={"cottage"} htmlFor={"cottage"} label={"Cottage"} onChange={() => handlePropertyTypeChange('Cottage')} />
            <Checkbox id={"condo"} htmlFor={"condo"} label={"Condo"} onChange={() => handlePropertyTypeChange('Condo')} />
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='filter-heading'>Price Range</h1>
            <div className='flex gap-4'>
              <div className='w-full flex border border-2 border-accentGreen rounded-lg px-4 py-2'>
                <input type="number" min="0" value={filters.minPrice} onChange={handleMinPriceChange} className="w-full outline-none bg-transparent" placeholder='Min price' />
              </div>
              <p className=' py-2'>-</p>
              <div className='w-full flex border border-2 border-accentGreen rounded-lg px-4 py-2'>
                <input type="number" min="0" value={filters.maxPrice} onChange={handleMaxPriceChange} className="w-full outline-none bg-transparent" placeholder='Max price' />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='filter-heading'>Bedrooms</h1>
            <div>
              <label>Bedrooms:</label>
              <div className='w-full flex border border-2 border-accentGreen rounded-lg px-4 py-2'>
                <input type="number" value={filters.bedrooms} onChange={handleBedroomsChange} className="w-full outline-none bg-transparent" />
              </div>
            </div>
            {/* <div className='w-full flex justify-between items-center rounded-lg border border-2 border-accentGreen'>
              <p className='px-3 py-2 text-sm text-center w-full'>Any</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>1</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>2</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>3</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>4</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>5+</p>
            </div> */}
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='filter-heading'>Bathrooms</h1>
            <div className='w-full flex border border-2 border-accentGreen rounded-lg px-4 py-2'>
              <input type="number" value={filters.bathrooms} onChange={handleBathroomsChange} className="w-full outline-none bg-transparent" max={5} step={1} />
            </div>
            {/* <div className='w-full flex justify-between items-center rounded-lg border border-2 border-accentGreen'>
              <p className='px-3 py-2 text-sm text-center w-full'>Any</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>1</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>2</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>3</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>4</p>
              <p className='border-l-2 border-accentGreen px-3 py-2 text-sm text-center w-full'>5+</p>
            </div> */}
          </div>

          {/* <button onClick={applyFilters} className="apply-filters-btn">
            Apply Filters
          </button> */}

          <Button onClick={applyFilters} text={"Apply Filters"} />

          {/* <div className='flex flex-col gap-2'>
            <h1 className='filter-heading'>Location</h1>
            <div className='w-full flex gap-3 border border-2 border-accentGreen rounded-lg px-4 py-2'>
              <input className='w-full outline-none bg-transparent' type="text" placeholder='All Cities' />
              <IoSearch className='text-accentGreen w-6 h-6 ' />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='filter-heading'>Square Feet</h1>
            <div className='w-full flex gap-3 border border-2 border-accentGreen rounded-lg px-4 py-2'>
              <input className='w-full outline-none bg-transparent' type="text" placeholder='All Cities' />
              
            </div>
          </div> */}

        </div>

        <div className='lg:w-[70%] w-full h-max grid lg:grid-cols-2 grid-cols-1 gap-8 '>
          {filteredProperties.map((property, index) => (
            <Link href={`/property/${property.id}`} className="flex flex-col h-[335px] relative" key={index}>
              <img className="w-full h-64 rounded-2xl" src="./assets/property1.jpg" />
              <div className="absolute bottom-0 left-1/2 w-11/12 -translate-x-1/2 bg-lightGreen rounded-xl p-3 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">₹ {property.price.toLocaleString()}/mo</p>
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
                  <div className='flex gap-1'>
                    <p className="text-sm">Property Type:</p>
                    <p className="text-sm font-medium">{property.propertyType}</p>
                  </div>
                  <p className="text-xs">{property.location}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <IoBedOutline className="text-lightGray" />
                    <p className="text-darkGray lg:text-sm text-xs">{property.bedrooms} Bed</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <LuBath className="text-lightGray" />
                    <p className="text-darkGray lg:text-sm text-xs">{property.bathrooms} Bath</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <CgArrowsExpandRight className="text-lightGray" />
                    <p className="text-darkGray lg:text-sm text-xs">{property.area} sqft</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page
