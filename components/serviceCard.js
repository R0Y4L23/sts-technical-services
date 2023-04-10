/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const ServiceCard = ({image,name,id}) => {
  return (
   
    <div className='min-[1260px]:w-[400px] min-[1260px]:h-[300px] w-[300px] h-[200px] mx-auto relative group'>
         <Link 
         //href={"/services/"+id}
         href={"#"}
         >
        <img src={image} className='w-full h-full rounded-lg' alt='service'/>
        <div className='absolute min-[1260px]:w-[400px] min-[1260px]:h-[300px] w-[300px] h-[200px] top-0 bg-black rounded-lg bg-opacity-0 group-hover:bg-opacity-50 duration-200'>
        </div>
        <p className='text-4xl font-bold text-center text-transparent group-hover:text-white absolute min-[1260px]:w-[400px] min-[1260px]:h-[300px] w-[300px] h-[200px] top-[45%] duration-200'>{name}</p>
        </Link>
    </div>
    
  )
}

export default ServiceCard