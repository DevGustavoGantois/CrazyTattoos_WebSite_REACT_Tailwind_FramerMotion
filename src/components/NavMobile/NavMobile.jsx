import React from 'react'
//import nav data

import { navData } from '../../data'

//import components

import Socials from '../Socials/Socials'


const NavMobile = () => {
  //destruturando o componente NavMobile
  const { items } = navData;
  return (
    <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
      <ul className='flex flex-col justify-center gap-y-6 mb-8'>
        {items.map((item, index) => (
          <li key={index}>
            <a className='text-2 font-primary uppercase' href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className='text-2xl'>
        <Socials />
      </div>
    </nav>
  )
}

export default NavMobile
