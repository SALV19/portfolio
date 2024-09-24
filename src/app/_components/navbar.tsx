import React from 'react'
import { navbar } from './constants/navbar'
import Link from 'next/link'

const Navbar = () => {
  const button = (item: {link: string, name: string}) => {
    if (item.name === 'Portfolio')
      return <Link href={item.link} className='rounded-md bg-blue hover:bg-blue-enfasis p-2'>{item.name}</Link>
    return <Link href={item.link} className='rounded-md hover:bg-gray-600 p-2'>{item.name}</Link>
  }
  
  return (
    <nav className='flex items-center justify-between px-2 fixed w-screen mt-0.5'>
      <img src='logoS.png' className='h-14 hover:bg-gray-600 rounded-md'/>
      <span className='w-1/2 flex justify-around'>
        {navbar.map(item => button(item))}
      </span>
    </nav>
  )
}

export default Navbar