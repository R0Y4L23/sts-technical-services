/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

const About = () => {
  const [heading, setHeading] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [subheading, setSubheading] = useState("");
  const [person, setPerson] = useState("");
  const [quotes, setQuotes] = useState("");
  const [name, setName] = useState("");

  const getData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:1337/api/about?populate=*",
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
        setPerson("http://localhost:1337" + r.person.data.attributes.url);
        setName(r.name);
        setQuotes(r.quotes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <p className="text-center font-extrabold text-6xl tracking-tight mt-10 mb-10">
        {heading}
      </p>
      <div className="w-[80%] mx-auto px-4">
        <p className="text-center tracking-wider my-4">{description1}</p>
        <p className="text-center tracking-wider my-4">{description2}</p>
        <p className="text-center tracking-wider my-4">{description3}</p>
        <p className="text-center font-bold text-4xl tracking-tight mt-16 mb-20">
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
            <p className="mt-5 text-lg text-center md:text-left">
              -{name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
