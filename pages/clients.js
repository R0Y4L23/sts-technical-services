/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Loader from '@/components/loader'

const Clients = () => {

  const [heading, setHeading] = useState("")
  const [client, setClient] = useState([])

  const [loading, setLoading] = useState(true)

  const getData = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sts-technical-service-backend.onrender.com/api/client?populate=*',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        let r = response.data.data.attributes
        setHeading(r.heading)
        setClient(r.gallery.data)

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
            Our Clients
          </title>
        </Head>
        <p className='text-center font-extrabold min-[425px]:text-6xl text-4xl tracking-tight mt-10 rubik'>{heading}</p>
        <div className='grid min-[1024px]:grid-cols-3 min-[610px]:grid-cols-2 grid-cols-1 min-[425px]:my-20 my-10 min-[425px]:gap-y-10 gap-y-6'>
          {client.map((item, index) => {
            return (
              <img key={index} src={item.attributes.url} alt='client' className='min-[425px]:w-[300px] w-[250px] h-[200px] mx-auto' />
            )
          })}
        </div>
      </>
    )
  }
}

export default Clients