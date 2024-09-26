import React, { FC } from 'react'

interface Props {
  text: string,
  img: string,
}

const Button: FC<Props> = ({text, img}) => {
  return (
    <div className='h-52 w-1/5 bg-slate-600 flex items-center flex-col align-text-bottom main-card'>
      <img src={img} className='h-44 w-full object-cover'/>
      {text}
    </div>
  )
}

export default Button