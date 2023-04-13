/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const ServicePage = () => {

  const router=useRouter()

  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [thumbnail,setThumbnail]=useState("")
  const [gallery,setGallery]=useState([])

  const getData=()=>{

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://sts-technical-service-backend.onrender.com/api/service-components/'+router.query.id+'?populate=*',
  headers: { }
};

axios.request(config)
.then((response) => {
  let r=response.data.data.attributes
  setName(r.name)
  setDescription(r.description)
  setThumbnail(r.thumbnail.data.attributes.url)
  setGallery(r.gallery.data)
})
.catch((error) => {
  console.log(error);
});
  }

  useEffect(()=>{
    console.log(router.query.id)
    getData()
  },[])


  return (
    <div className='w-[80%] flex flex-row justify-center items-center'>
      <div>
        <p>{name}</p>
        <ul>
          {description.split('.').map(sentence => sentence.trim()).map((item,index)=>{
            return(
              <li key={index}><p>{item}</p></li>
            )
          })}
        </ul>
      </div>
      <div>
        <div>
          <img alt='service' src=''/>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default ServicePage