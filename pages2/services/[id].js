/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Loader from '@/components/loader'
import Head from 'next/head'

const ServicePage = () => {

  const router = useRouter()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [gallery, setGallery] = useState([])

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
      url: 'https://sts-technical-service-backend.onrender.com/api/service-components/' + router.query.id + '?populate=*',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        let r = response.data.data.attributes
        setName(r.name)
        setDescription(r.description)
        setThumbnail(r.thumbnail.data.attributes.url)
        setGallery(r.gallery.data)
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
          <title>{name ? name : "Loading..."}</title>
        </Head>
        <div className='min-[1024px]:w-[80%] w-[90%] flex min-[540px]:flex-row flex-col justify-center items-center mx-auto mt-10 min-[1024px]:mb-10'>
          <div className="min-[540px]:w-1/2 w-[90%]">
            <p className="font-bold min-[1024px]:text-6xl text-4xl tracking-tight mt-10 rubik">{name}</p>
            <ul className="min-[540px]:list-disc min-[1024px]:mt-20 mt-10">
              {description.split('.').map(sentence => sentence.trim()).map((item, index) => {
                if (item) {
                  return (
                    <li key={index}><p className="inter min-[1024px]:text-lg my-3 font-semibold">{item}</p></li>
                  )
                }
              })}
            </ul>
          </div>
          <div className="min-[540px]:w-1/2 w-[90%] min-[540px]:my-0 my-10">
            <div className="min-[540px]:w-[80%] mx-auto">
              <img alt='service' src={thumbnail} className="w-full min-[1024px]:h-[400px] h-[250px]" />
            </div>
            <div className="min-[540px]:w-[80%] mx-auto mt-12">
              <marquee scrollamount={5}>
                <div className='flex flex-row gap-10'>
                  {multiplyArray(gallery, 10).map((item, index) => {
                    return (
                      <img key={index} src={item.attributes.url} alt="hero" className='min-[1024px]:w-[200px] min-[1024px]:h-[140px] w-[120px] h-[80px] border border-gray-400 rounded-md' />
                    )
                  })}
                </div>
              </marquee>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ServicePage