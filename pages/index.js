/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import axios from 'axios'
import Loader from '@/components/loader'

import {AnimationOnScroll} from "react-animation-on-scroll"

const Index = () => {

  const [heroTitle, setHeroTitle] = useState("")
  const [heroSubtitle, setHeroSubtitle] = useState("")
  const [heroImage, setHeroImage] = useState("")
  const [marqueeImages, setMarqueeImages] = useState([])

  const [licenseHeading, setLicenseHeading] = useState("")
  const [licenseDescription, setLicenseDescription] = useState("")
  const [brochure, setBrochure] = useState("")
  const [license, setLicense] = useState("")
  const [certificate, setCertificate] = useState("")

  const [loading, setLoading] = useState(true)

  const multiplyArray = (arr, m) => {
    let out = []
    for (let i = 0; i < m; i++) {
      out.push(...arr);
    }
    return out
  }

  const getData = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sts-technical-service-backend.onrender.com/api/landing?populate=*',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        let r = response.data.data.attributes
        setHeroTitle(r.hero_title)
        setHeroSubtitle(r.hero_subtitle)
        setHeroImage(r.hero_image.data.attributes.url)
        setMarqueeImages(r.marquee_images.data)

        setLicenseHeading(r.license_heading)
        setLicenseDescription(r.license_description)
        setLicense(r.license_image.data.attributes.url)
        setCertificate(r.certification_image.data.attributes.url)

        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return (
      <Loader />
    )
  }
  else {
    return (
      <>
        <Head>
          <title>
            STS Technical Services L.L.C
          </title>
        </Head>
        <div className='flex flex-col'>
          <section className="bg-white animate__animated animate__fadeInUp">
            <div className="grid w-[90%] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl rubik">{heroTitle}</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl inter">{heroSubtitle}</p>
                <Link href="/services" className="inline-flex font-mono items-center justify-center px-5 py-3 text-lg font-semibold text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                  Our Services
                </Link>
                <Link href="/projects" className="inline-flex font-mono items-center justify-center px-5 py-3 text-lg font-semibold text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 min-[415px]:ml-5 ml-0 min-[415px]:mt-0 mt-5">
                  Our Projects
                </Link>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={heroImage} alt="hero" />
              </div>
            </div>
          </section>
          <AnimationOnScroll animateIn={"animate__fadeInDown"} className="w-full bg-gray-100 min-[1024px]:my-40 min-[540px]:my-20 my-10 flex min-[1024px]:flex-row flex-col justify-center pt-20 pb-20 min-[1440px]:h-[350px] min-[1024px]:h-[500px] items-center">
            <div className="min-[1024px]:w-[45%] w-[90%] min-[540px]:mb-0 mb-10">
              <p className="text-4xl font-extrabold tracking-tight leading-none rubik min-[540px]:text-left text-center">{licenseHeading}</p>
              <p className="mt-10 inter min-[768px]:pr-32 min-[540px]:pr-12 min-[540px]:text-left text-center">{licenseDescription}</p>
              <Link href="/assets/brochure.pdf" className="mt-10 inline-flex min-[540px]:ml-0 min-[375px]:ml-[27%] ml-[20%] font-mono items-center justify-center px-5 py-3 text-lg font-semibold text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-100">
                Our Brochure
              </Link>
            </div>
            <div className='min-[1024px]:w-[45%] w-[90%] flex min-[540px]:flex-row flex-col justify-center items-center gap-10'>
              <p className='min-[540px]:hidden text-center text-lg inte underline -mb-5'>License</p>
              <img src={license} alt="index" className="min-[540px]:w-[45%] w-[90%] border border-black translate-y-5" />
              <p className='min-[540px]:hidden text-center text-lg inter underline'>Certificate</p>
              <img src={certificate} alt="index" className="min-[540px]:w-[45%] w-[90%] border border-black" />
            </div>
          </AnimationOnScroll>
          <marquee className="min-[410px]:w-[90%] w-[98%] mx-auto mb-20" scrollamount={5}>
            <AnimationOnScroll animateIn='animate__fadeInRight' className='flex flex-row gap-10'>
              {multiplyArray(marqueeImages, 10).map((item, index) => {
                return (
                  <img key={index} src={item.attributes.url} alt="hero" className='w-[200px] h-[150px] border border-gray-400 rounded-md' />
                )
              })}
            </AnimationOnScroll>
          </marquee>
        </div>
      </>
    )
  }
}

export default Index