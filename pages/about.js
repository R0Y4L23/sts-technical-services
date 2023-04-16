/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, use } from "react";
import Head from "next/head";
import axios from "axios";
import Loader from "@/components/loader";

const About = () => {
  const [heading, setHeading] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [subheading, setSubheading] = useState("");
  const [person, setPerson] = useState("");
  const [quotes, setQuotes] = useState("");
  const [name, setName] = useState("");


  const [om, setOm] = useState("")
  const [omi, setOmi] = useState("")

  const [fm, setFm] = useState("")
  const [fmi, setFmi] = useState("")

  const [gm, setGm] = useState("")
  const [gmi, setGmi] = useState("")

  const [ceo, setCeo] = useState("")
  const [ceoi, setCeoi] = useState("")


  const [loading, setLoading] = useState(true)

  const getData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://sts-technical-service-backend.onrender.com/api/about?populate=*",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        let r = response.data.data.attributes;
        setHeading(r.heading);
        setDescription1(r.description1);
        setDescription2(r.description2);
        setDescription3(r.description3);
        setSubheading(r.subheading);
        setPerson(r.managing_director_image.data.attributes.url);
        setName(r.managing_director_name);
        setQuotes(r.quotes);


        setOm(r.operations_manager_name)
        setFm(r.financial_manager_name)
        setGm(r.general_manager_name)
        setCeo(r.ceo_name)

        setOmi(r.operations_manager_image.data.attributes.url)
        setFmi(r.financial_manager_image.data.attributes.url)
        setGmi(r.general_manager_image.data.attributes.url)
        setCeoi(r.ceo_image.data.attributes.url)

        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  if (loading) {
    return (
      <Loader />
    )
  }
  else {

    return (
      <>
        <Head>
          <title>About Us</title>
        </Head>
        <p className="text-center font-extrabold text-6xl tracking-tight mt-10 mb-10 rubik">
          {heading}
        </p>
        <div className="w-[80%] mx-auto px-4">
          <p className="text-center tracking-wider my-4 inter">{description1}</p>
          <p className="text-center tracking-wider my-4 inter">{description2}</p>
          <p className="text-center tracking-wider my-4 inter">{description3}</p>
          <p className="text-center font-bold text-4xl tracking-tight mt-24 mb-20 oswald">
            Our Managers
          </p>

          <div className="flex min-[768px]:flex-row flex-col justify-center items-center min-[1440px]:gap-32 min-[1024px]:gap-20 gap-12 mb-32">
            <div>
              <img src={gmi} alt="About" className="min-[1440px]:w-[320px] min-[1440px]:h-[320px] min-[1440px]:rounded-[160px] min-[1024px]:h-[250px] min-[1024px]:w-[250px] min-[1024px]:rounded-[125px] h-[180px] w-[180px] rounded-[90px] mx-auto" />
              <p className="mt-5 text-xl text-center italic">{gm} , General Manager</p>
            </div>
            <div>
              <img src={omi} alt="About" className="min-[1440px]:w-[320px] min-[1440px]:h-[320px] min-[1440px]:rounded-[160px] min-[1024px]:h-[250px] min-[1024px]:w-[250px] min-[1024px]:rounded-[125px] h-[180px] w-[180px] rounded-[90px] mx-auto" />
              <p className="mt-5 text-xl text-center italic">{om} , Operations Manager</p>
            </div>
            <div>
              <img src={fmi} alt="About" className="min-[1440px]:w-[320px] min-[1440px]:h-[320px] min-[1440px]:rounded-[160px] min-[1024px]:h-[250px] min-[1024px]:w-[250px] min-[1024px]:rounded-[125px] h-[180px] w-[180px] rounded-[90px] mx-auto" />
              <p className="mt-5 text-xl text-center italic">{fm} , Financial Manager</p>
            </div>
          </div>


          <p className="text-center font-bold text-4xl tracking-tight mt-24 mb-20 oswald">
            Our Chief Executive Officer
          </p>

          <div className="flex min-[768px]:flex-row flex-col justify-center items-center min-[1440px]:gap-32 min-[1024px]:gap-20 gap-12 mb-32">
            <div>
              <img src={ceoi} alt="About" className="min-[1440px]:w-[320px] min-[1440px]:h-[320px] min-[1440px]:rounded-[160px] min-[1024px]:h-[250px] min-[1024px]:w-[250px] min-[1024px]:rounded-[125px] h-[180px] w-[180px] rounded-[90px] mx-auto" />
              <p className="mt-5 text-xl text-center italic">{ceo} , Cheif Executive Officer</p>
            </div>
          </div>

          <p className="text-center font-bold text-4xl tracking-tight mt-24 mb-20 oswald">
            {subheading}
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center items-center mb-16">
            <div className="w-full md:w-1/2">
              <img
                src={person}
                alt="about"
                className="w-full md:w-3/5 mx-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:mt-0 mt-10">
              <div className="relative">
                <img
                  src="assets/left_q.png"
                  className="w-6 h-6 md:w-10 md:h-10 absolute -top-4 md:-left-12 -left-6"
                  alt="left_quote"
                />
                <img
                  src="assets/right_q.png"
                  className="w-6 h-6 md:w-10 md:h-10 absolute md:-bottom-6 bottom-0 right-0"
                  alt="right_quote"
                />
                <p className="font-extralight">{quotes}</p>
              </div>
              <p className="mt-5 text-lg text-center md:text-left italic text-black">
                -{name} , Managing Director
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default About;
