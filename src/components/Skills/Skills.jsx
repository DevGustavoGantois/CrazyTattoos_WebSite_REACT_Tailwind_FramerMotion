import React, { useEffect, useState } from 'react'

//UseInView Hook
import { useInView } from 'react-intersection-observer';
//react circular 
import { CircularProgressbar } from 'react-circular-progressbar'
//react circular styles
import 'react-circular-progressbar/dist/styles.css'
//import framer motion
import {color, invariant, motion} from 'framer-motion'
//import fade in
import {fadeIn} from '../../variants';


const Skills = () => {
  //desestruturando o useInView hook
  const { ref, inView} = useInView({
    threshold: 0.2
  });

    //Full body tattoo state
    const [fullBody, setFullBody] = useState(0);

     //full color tattoo
     const [colorTattoo, setColorTattoo] = useState(0);

     //realistic Tattoo
     const [realisticTattoo, setRealisticTattoo] = useState(0);

     //OldSchool Tattoo
     const [oldSchoolTattoo, setOldSchoolTattoo] = useState(0);


    useEffect(() => {
      if (inView) {
        setTimeout(() => {
          if (fullBody < 50) {
            setFullBody(fullBody + 1);
          }

          if (colorTattoo < 95) {
            setColorTattoo(colorTattoo + 1);
          }

          if (realisticTattoo < 100) {
            setRealisticTattoo(realisticTattoo + 1);
          }

          if (oldSchoolTattoo < 100) {
            setOldSchoolTattoo(oldSchoolTattoo + 1);
          }
        
        }, 50);
      } else {
        setFullBody(0);
        setColorTattoo(0);
        setRealisticTattoo(0);
        setOldSchoolTattoo(0);
      }
    }, [inView ,fullBody, colorTattoo, realisticTattoo, oldSchoolTattoo])

    //circular progress bar styles
    const styles = {
      path: {
        stroke: '#111111'
      },
      trail: {
        stroke: '#eeeeee'
      },
      text: {
        fill: '#111111',
        fontSize: '24px',
      },
    }

  return (
    <motion.section ref={ref} className='section font-primary' variants={fadeIn('up')} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.1}} id='serviços'>
       <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-x-[80px] justify-between items-center gap-y-12'>
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar strokeWidth={1} value={fullBody} styles={styles} text={`${fullBody}%`} />
          <div className='uppercase font-light tracking-[1.2px] text-center'>Tatuagem de corpo inteiro</div>
        </div>
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar strokeWidth={1} value={colorTattoo} styles={styles} text={`${colorTattoo}%`} />
          <div className='uppercase font-light tracking-[1.2px] text-center'>Tatuagem Colorida</div>
        </div>
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar strokeWidth={1} value={realisticTattoo} styles={styles} text={`${realisticTattoo}%`} />
          <div className='uppercase font-light tracking-[1.2px] text-center'>Tatuagem Realista</div>
        </div>
        <div className='w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6'>
          <CircularProgressbar strokeWidth={1} value={oldSchoolTattoo} styles={styles} text={`${oldSchoolTattoo}%`} />
          <div className='uppercase font-light tracking-[1.2px] text-center'>Tatuagem Old School</div>
        </div>
        </div>
        </div>    
    </motion.section>
  )
}

export default Skills
