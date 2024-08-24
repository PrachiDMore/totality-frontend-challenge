import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='w-screen px-28 py-4 flex justify-between items-center '>

      <div>
        <img className='w-14 h-14' src="./assets/logo1.png" alt="" />
      </div>
      <div className='flex gap-14 justify-between items-center'>
        <p>Home</p>
        <p>About Us</p>
        <p>Listing</p>
      </div>

      <div className='flex gap-14 justify-between items-center'>
        <p>Contact Us</p>
        <Button text={"Book A Property"} />
      </div>
    </div>
  )
}

export default Navbar
