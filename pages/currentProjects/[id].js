/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '@/components/loader'
import Head from 'next/head'

const CurrentProjectPage = () => {

  const router = useRouter()

  const [name, setName] = useState("")
  const [client, setClient] = useState("")
  const [scope, setScope] = useState("")
  const [picture, setPicture] = useState("")

  const [loading, setLoading] = useState(true)

  const getData = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sts-technical-service-backend.onrender.com/api/current-password-components/' + router.query.id + '?populate=*',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        let r = response.data.data.attributes
        setName(r.name)
        setClient(r.client)
        setScope(r.scope)
        setPicture(r.thumbnail.data.attributes.url)

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
        <div className='min-[1024px]:w-[80%] w-[90%] flex min-[540px]:flex-row flex-col justify-center items-center mx-auto min-[425px]:mt-20 mt-10 min-[1024px]:mb-10'>
          <div className="min-[540px]:w-1/2 w-[90%]">
            <p className="font-bold min-[1024px]:text-6xl text-4xl tracking-tight mt-6 rubik">{name}</p>
            <span className="flex items-center mt-20 mb-5"><img src="/assets/arrow.png" alt="project" className="w-[50px] h-[50px]" /><p className="text-2xl rubik ml-3">Client:</p><p className="oswald min-[1024px]:text-3xl text-xl ml-5">{client}</p></span>
            <span className="flex items-center"><img src="/assets/arrow.png" alt="project" className="w-[50px] h-[50px]" /><p className="text-2xl rubik ml-3">Scope:</p><p className="oswald min-[1024px]:text-3xl text-xl ml-5">{scope}</p></span>
          </div>
          <div className="min-[540px]:w-1/2 w-[90%] min-[540px]:my-0 my-10">
            <div className="min-[540px]:w-[80%] mx-auto">
              <img alt='service' src={picture} className="w-full min-[1024px]:h-[400px] h-[250px]" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CurrentProjectPage