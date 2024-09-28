'use client'
import React from 'react'
import { navbar } from './constants/constants'
import Link from 'next/link'

const Navbar = () => {
  const button = (item: {link: string, name: string}, idx:number) => {
    if (item.name === 'Portfolio')
      return <Link href={item.link} className='rounded-md bg-blue hover:bg-blue-enfasis p-2' key={idx}>{item.name}</Link>
    return <Link href={item.link} className='rounded-md hover:bg-gray-600 p-2' key={idx}>{item.name}</Link>
  }
  
  return (
    <nav className='flex items-center justify-between px-2 fixed w-screen mt-0.5 top-0 z-50'>
      <Link href={'/'} >
        <img src='icons/logoS.png' className='h-14 hover:bg-gray-600 bg-opacity-50 rounded-md'/>
      </Link>
      <span className='w-1/2 flex justify-around'>
        {navbar.map((item, idx) => button(item, idx))}
      </span>
    </nav>
  )
}

export default Navbar