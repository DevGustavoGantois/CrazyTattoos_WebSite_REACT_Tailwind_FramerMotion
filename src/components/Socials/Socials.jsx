import React from 'react'
//import social data
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
  IoLogoFacebook,
} from 'react-icons/io';




const Socials = () => {


  return (
    <ul className='flex justify-center items-center gap-x-[30px]'>
      <a href="https://www.instagram.com/gucaria_/?hl=pt-br" target='_blank'><IoLogoInstagram /></a>
      <IoLogoPinterest />
      <IoLogoTwitter />
      <IoLogoYoutube />
      <IoLogoFacebook />
    </ul>
  )
}

export default Socials
