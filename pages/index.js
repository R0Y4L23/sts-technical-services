/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

import axios from 'axios'

const Index = () => {

  const [heroTitle,setHeroTitle]=useState("")
  const [heroSubtitle,setHeroSubtitle]=useState("")
  const [heroImage,setHeroImage]=useState("")
  const [marqueeImages,setMarqueeImages]=useState([])

  const getData=()=>{

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://sts-technical-service-backend.onrender.com/api/landing?populate=*',
  headers: { }
};

axios.request(config)
.then((response) => {
  let r=response.data.data.attributes
  setHeroTitle(r.hero_title)
  setHeroSubtitle(r.hero_subtitle)
  setHeroImage(r.hero_image.data.attributes.url)
  setMarqueeImages(r.marquee_images.data)
})
.catch((error) => {
  console.log(error);
});

  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <>
    <Head>
      <title>
        STS Technical Services L.L.C
      </title>
    </Head>
    <div className='flex flex-col'>
    <section className="bg-white">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">{heroTitle}</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">{heroSubtitle}</p>
            <Link href="/services" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                Our Services
            </Link> 
            <Link href="/projects" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ml-5">
                Our Projects
            </Link> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={heroImage} alt="hero"/>
        </div>                
    </div>
    </section>
    <marquee className="min-[410px]:w-[80%] w-[98%] mx-auto mb-20" scrollamount={5}>
      <div className='flex flex-row gap-10'>
      {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
       {marqueeImages.map((item,index)=>{
        return(
          <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md'/>
        )
      })}
    </div>
    </marquee>
    </div>
    </>
  )
}

export default Index