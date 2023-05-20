/* eslint-disable import/no-anonymous-default-export */
require('dotenv').config()
export default function (req, res) {

  console.log(process.env.FROM_EMAIL,process.env.TO_EMAIL,process.env.APP_PASSWORD)
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: `stssendemail@gmail.com`,
      pass: `${process.env.APP_PASSWORD}`,
    },
    secure: true,
  })
  const mailData = {
    from:`stssendemail@gmail.com`,
    to:`ststech.uae@gmail.com`,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
    {
      console.log(err)
    }
    else
    {
      console.log(info)
    }
  })
  res.status(200)
}