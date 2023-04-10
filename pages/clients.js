/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios'

const Clients = () => {

  const [heading,setHeading]=useState("")
  const [client,setClient]=useState([])

  const getData=()=>{

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:1337/api/client?populate=*',
  headers: { }
};

axios.request(config)
.then((response) => {
  let r=response.data.data.attributes
  setHeading(r.heading)
  setClient(r.gallery.data)
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
        Our Clients
      </title>
    </Head>
    <p className='text-center font-extrabold min-[425px]:text-6xl text-4xl tracking-tight mt-10'>{heading}</p>
    <div className='grid min-[1024px]:grid-cols-3 min-[610px]:grid-cols-2 grid-cols-1 min-[425px]:my-20 my-10 min-[425px]:gap-y-10 gap-y-5'>
      {client.map((item,index)=>{
        return(
          <img key={index} src={"http://localhost:1337"+item.attributes.url} alt='client' className='min-[425px]:w-[300px] w-[200px] h-[200px] mx-auto'/>
        )
      })}
    </div>
    </>
  )
}

export default Clients