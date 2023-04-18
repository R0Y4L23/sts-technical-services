import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { message } from 'antd'
import Loader from '@/components/loader'

const Contact = () => {


  const [map, setMap] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [emailContact, setEmailContact] = useState("")
  const [nameContact, setNameContact] = useState("")
  const [messageContact, setMessageContact] = useState("")

  const [loading, setLoading] = useState(true)

  const submit = () => {

    let data = {
      name:nameContact,
      email:emailContact,
      message:messageContact
    }

  fetch('/api/sendemail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
    }).catch((e)=>{
      message.error('Error : '+e.message)
    })

    setNameContact('')
    setEmailContact('')
    setMessageContact('')
    message.success("Your Message Has Been Submitted Successfully")  
  }

  const getData = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://sts-technical-service-backend.onrender.com/api/contact',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        let r = response.data.data.attributes
        setMap(r.map_link)
        setAddress(r.address)
        setEmail(r.email)
        setPhone(r.phone)

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
            Contact Us
          </title>
        </Head>
        <p className='text-center font-extrabold min-[425px]:text-6xl text-4xl tracking-tight mt-10 rubik mb-20'>Contact Us</p>
        <section className="text-gray-600 body-font relative mb-10">
          <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe width="100%" height="100%" className="absolute inset-0" src={map}></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">{address}</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a className="text-blue-500 leading-relaxed">{email}</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">{phone}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Please Fill The Form</h2>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input value={nameContact} onChange={(e) => { setNameContact(e.target.value) }} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input value={emailContact} onChange={(e) => { setEmailContact(e.target.value) }} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea value={messageContact} onChange={(e) => { setMessageContact(e.target.value) }} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button onClick={submit} className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Contact