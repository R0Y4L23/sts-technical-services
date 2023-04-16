import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import ServiceCard from '@/components/serviceCard'
import Loader from '@/components/loader'

const Projects = () => {

  const [projects, setProjects] = useState([])
  const [currentProjects, setCurrentProjects] = useState([])


  const [loading, setLoading] = useState(true)

  const getData = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sts-technical-service-backend.onrender.com/api/project-components?populate=*',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setProjects(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const getCurrentData = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sts-technical-service-backend.onrender.com/api/current-password-components?populate=*',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setCurrentProjects(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {
    getData()
    getCurrentData()
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
            Our Projects
          </title>
        </Head>
        <p className='text-center font-extrabold min-[425px]:text-6xl text-4xl tracking-tight mt-10 rubik'>Current Projects</p>
        <div className='grid min-[940px]:grid-cols-3 min-[768px]:grid-cols-2 grid-cols-1 justify-center items-center min-[425px]:gap-y-16 gap-y-8 mt-10 mb-20'>
          {currentProjects.map((item, index) => {
            return (
              <ServiceCard key={index} id={item.id} image={item.attributes.thumbnail.data.attributes.url} name={item.attributes.name} type={"currentProjects"} />
            )
          })}
        </div>
        <p className='text-center font-extrabold min-[425px]:text-6xl text-4xl tracking-tight mt-10 rubik'>Past Projects</p>
        <div className='grid min-[940px]:grid-cols-3 min-[768px]:grid-cols-2 grid-cols-1 justify-center items-center min-[425px]:gap-y-16 gap-y-8 mt-10 mb-20'>
          {projects.map((item, index) => {
            return (
              <ServiceCard key={index} id={item.id} image={item.attributes.thumbnail.data.attributes.url} name={item.attributes.name} type={"projects"} />
            )
          })}
        </div>
      </>
    )
  }
}

export default Projects