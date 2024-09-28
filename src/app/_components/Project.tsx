import Link from 'next/link'
import React, { FC } from 'react'
import './../../styles/portfolio.css'


interface Props {
  href: string,
  name: string,
  imagen: string,
}
const Project: FC<Props> = ({href, name, imagen}) => {
  return (
    <Link href={href} className='flex justify-center flex-wrap item'>
      <img src={imagen} className='h-[20rem] w-[30rem]'/>
      <h1 className='text-3xl'>{name}</h1> 
    </Link>
  )
}

export default Project