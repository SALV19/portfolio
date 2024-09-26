import React, { FC } from 'react'
import { CardInfo } from './constants/constants';

interface Props {
  elements: CardInfo;
}

const Cards: FC<Props> = ({elements}) => {
  return (
    <div className='h-20 w-10 rounded-lg bg-green-400'>
      {elements.name}
    </div>
  )
}

export default Cards