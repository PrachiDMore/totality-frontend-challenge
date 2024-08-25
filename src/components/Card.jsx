import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({className, src, title, desc}) => {
  return (
    <Link href="" className='group w-full overflow-hidden rounded-2xl relative flex justify-center'>
      <img className={twMerge('w-full h-80 object-cover rounded-2xl hover:scale-110 duration-300' , className)} src={src} />
      <div className='opacity-100 duration-300 img-gradiant flex items-end justify-center px-3 py-4 w-full h-full rounded-2xl absolute top-0 left-0 pointer-events-none '>
        <div className='w-full px-3 flex flex-col gap-2 justify-between '>
          <p className={`lg:text-2xl text-lg text-white font-medium`}>{title}</p>
          <p className={`text-sm  text-white font-medium`}>{desc}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
