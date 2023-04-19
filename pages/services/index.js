import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import ServiceCard from '@/components/serviceCard'
import axios from 'axios'
import Loader from '@/components/loader'

const Services = () => {

  const [heading, setHeading] = useState("")
  const [description, setDescription] = useState("")
  const [services, setServices] = useState([])

  const [loading, setLoading] = useState(true)


  const getData = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sts-technical-service-backend.onrender.com/api/service',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        let r = response.data.data.attributes
        setHeading(r.heading)
        setDescription(r.description)
      })
      .catch((error) => {
        console.log(error);
      });

  }



  const getServiceData = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sts-technical-service-backend.onrender.com/api/service-components?populate=*',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setServices(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  useEffect(() => {
    getData()
    getServiceData()
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
            Our Services
          </title>
        </Head>
        <p className='text-center font-extrabold min-[425px]:text-6xl text-5xl tracking-tight mt-10 rubik animate__animated animate__fadeIn'>{heading}</p>
        <p className='text-center min-[940px]:mx-40 mx-10 tracking-wider min-[425px]:my-10 my-5 inter animate__animated animate__fadeIn'>{description}</p>
        <div className='grid min-[940px]:grid-cols-3 min-[768px]:grid-cols-2 grid-cols-1 justify-center items-center min-[425px]:gap-y-16 gap-y-8 mt-10 mb-20'>
          {services.map((item, index) => {
            return (
              <ServiceCard key={index} id={item.id} image={item.attributes.thumbnail.data.attributes.url} name={item.attributes.name} type={"services"} />
            )
          })}

        </div>

      </>
    )
  }
}

export default Services