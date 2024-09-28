import React from 'react'
import Project from './Project'
import { projects } from './constants/constants'
import './../../styles/portfolio.css'

const Portfolio = () => {
  return (
    <div className='h-screen flex flex-col  items-center' >
      <div className='text-3xl py-3'>
        Projects I have been part of:
      </div>
      <aside className='flex gap-5 max-md:block list-3d w-10/12'>
        {projects.map((item, idx) => <Project href={item.href} name={item.name} imagen={item.image} key={idx}/>)}      
      </aside>
    </div>
  )
}

export default Portfolio