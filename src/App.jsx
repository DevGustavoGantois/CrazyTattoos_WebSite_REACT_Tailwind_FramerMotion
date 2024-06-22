import React from 'react'


import Header from '../src/components/Header/Header';
import Hero from '../src/components/Hero/Hero';
import About from '../src/components/About/About';
import GallerySection from '../src/components/GallerySection/GallerySection';
import Skills from '../src/components/Skills/Skills';
import Interview from '../src/components/Interview/Interview';
import Testimonials from '../src/components/Testimonials/Testimonials';
import Contact from '../src/components/Contact/Contact';
import Footer from '../src/components/Footer/Footer';
import Copyright from '../src/components/Copyright/Copyright';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
        <Header/>
        <Hero/>
        <About/>
        <GallerySection/>
        <Skills/>
        <Testimonials/>
        <Interview/>
        <Contact/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default App
