/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const ServiceCard = ({ image, name, id, type }) => {
  return (

    <div className='min-[1260px]:w-[400px] min-[1260px]:h-[300px] w-[300px] h-[200px] mx-auto relative group'>
      <Link
        //href={"/"+type+"/"+id}
        href={"#"}
      >
        <img src={image} className='w-full h-full rounded-lg' alt='service' />
        <div className='absolute min-[1260px]:w-[400px] min-[1260px]:h-[300px] w-[300px] h-[200px] top-0 bg-black rounded-lg min-[426px]:bg-opacity-0 min-[426px]:group-hover:bg-opacity-50 bg-opacity-50 duration-200'>
        </div>
        <p className={`${name.length < 20 ? "min-[425px]:text-4xl text-2xl px-3" : "min-[425px]:text-2xl text-lg px-3"} font-bold text-center min-[426px]:text-transparent min-[426px]:group-hover:text-white text-white absolute min-[1260px]:w-[400px] min-[1260px]:h-[300px] w-[300px] h-[200px] top-[45%] duration-200`}>{name}</p>
      </Link>
    </div>

  )
}

export default ServiceCard