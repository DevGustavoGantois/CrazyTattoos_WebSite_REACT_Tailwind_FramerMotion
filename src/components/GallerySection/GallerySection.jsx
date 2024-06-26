import React, { useState } from 'react'

//import GallerySection Data

import { galleryData } from '../../data';

//import photo from abul & lightbox
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
//Lightbox css
import 'yet-another-react-lightbox/styles.css';
//import framer motion

import { motion } from 'framer-motion';

//Import fadeIN from variants
import { fadeIn } from '../../variants';

//slides

import { IoMdArrowForward } from 'react-icons/io';


const GallerySection = () => {
  const slides = galleryData.images.map(({original, width, height}) => ({

    src: original,
    width,
    height,
  
  }));
  

  //index state
  const [index, setIndex] = useState(-1);
  //destructure gallerySection

  const {title, btnText, images} = galleryData

  return (
    <section className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0' id='galeria'>
      <div className="container mx-auto">
        <motion.h2 variants={fadeIn('up')} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.6}}  className='h2 max-w-[370px] lg:mb-20'>{title}</motion.h2>
      </div>
      <motion.div variants={fadeIn('up')} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}} className='mb-8 lg:mb-20'>
        <PhotoAlbum onClick={(event, photo, index) => setIndex(index)} layout='rows' photos={images} />
          <Lightbox slides={slides} styles={{container: {backgroundColor: 'rgba(0,0,0.9)'}}}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          />
      </motion.div>
      <motion.div variants={fadeIn('up')} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}} className='flex justify-center'>
        <button className='btn btn-lg btn-dark'>{btnText} <div className='text-xl'><IoMdArrowForward/></div></button>
      </motion.div>
    </section>
  )
}

export default GallerySection
