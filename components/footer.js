/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

const Footer = () => {
    const [imageData, setImageData] = useState("")
    const [fb, setFb] = useState("")
    const [wp, setWp] = useState("")
    const [insta, setInsta] = useState("")
    const [tweet, setTweet] = useState("")


    const getData = () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://sts-technical-service-backend.onrender.com/api/header?populate=*',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                let r = response.data.data.attributes
                setImageData(response.data.data.attributes.logo.data.attributes.url)
                setFb(r.facebook_link)
                setWp(r.whatsapp_link)
                setInsta(r.instagram_link)
                setTweet(r.twitter_link)
            })
            .catch((error) => {
                console.log(error);
            });

    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <footer className="p-4 bg-white sm:p-6 border-t border-t-gray-300 border-b-4 border-b-blue-600">
            <div className="mx-auto w-[90%]">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex min-[330px]:flex-row flex-col min-[330px]:items-center items-start">
                            <img src={imageData} className="mr-3 min-[400px]:h-8 h-12" alt="Logo" />
                            <span className="min-[330px]:self-center min-[410px]:text-2xl text-lg font-semibold whitespace-nowrap oswald">STS Technical Services L.L.C.</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-600">
                                <li className="mb-4">
                                    <Link href="/services" className="hover:underline">Services</Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="hover:underline">Projects</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">More Links</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="/contact" className="hover:underline ">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:underline">About Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2023 <Link href="/" className="hover:underline">STS Technical Services™</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        {fb && <Link href={fb} className="text-gray-500 hover:text-gray-900">
                            <i className="fa-brands fa-facebook"></i>
                        </Link>}
                        {wp && <Link href={wp} className="text-gray-500 hover:text-gray-900">
                            <i className="fa-brands fa-whatsapp"></i>
                        </Link>}
                        {insta && <Link href={insta} className="text-gray-500 hover:text-gray-900">
                            <i className="fa-brands fa-instagram"></i>
                        </Link>}
                        {tweet && <Link href={tweet} className="text-gray-500 hover:text-gray-900">
                            <i className="fa-brands fa-twitter"></i>
                        </Link>}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer