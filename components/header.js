/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import DrawerComponent from './drawer'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {

  const router = useRouter()

  const activeClass = 'text-xl cursor-pointer font-bold'
  const inactiveClass = 'text-xl cursor-pointer hover:font-bold duration-100'

  const [imageData, setImageData] = useState("")
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };


  const getData = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sts-technical-service-backend.onrender.com/api/header?populate=*',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setImageData(response.data.data.attributes.logo.data.attributes.url)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {
    setOpen(false)
    getData()
  }, [])


  return (
    <>
      <div className='flex flex-row justify-between items-center min-[1024px]:px-20 px-8 border-t-4 border-b border-b-gray-300 border-blue-600'>
        <div className='min-[768px]:w-[200px] w-[150px] min-[768px]:translate-x-0 -translate-x-8'>
          {imageData && <Link href={"/"}><img src={imageData} alt="logo" /></Link>}
        </div>
        <div className='min-[768px]:flex hidden flex-row justify-center items-center min-[1024px]:gap-8 gap-5'>
          <Link href={"/"}><p className={router.pathname == "/" ? activeClass : inactiveClass}>Home</p></Link>
          <Link href={"/services"}><p className={router.pathname == "/services" || router.pathname.indexOf("/services") != -1 ? activeClass : inactiveClass}>Services</p></Link>
          <Link href={"/projects"}><p className={router.pathname == "/projects" || router.pathname.indexOf("/projects") != -1 || router.pathname.indexOf("/currentProjects") != -1 ? activeClass : inactiveClass}>Projects</p></Link>
          <Link href={"/clients"}><p className={router.pathname == "/clients" ? activeClass : inactiveClass}>Clients</p></Link>
          <Link href={"/contact"}><p className={router.pathname == "/contact" ? activeClass : inactiveClass}>Contact</p></Link>
          <Link href={"/about"}><p className={router.pathname == "/about" ? activeClass : inactiveClass}>About</p></Link>
        </div>
        <div className='min-[768px]:hidden'>
          <i className="fa-solid fa-bars text-xl" onClick={showDrawer}></i>
        </div>
      </div>
      <DrawerComponent setOpen={setOpen} open={open} />
    </>
  )
}

export default Header