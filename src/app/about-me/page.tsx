import React, { FC } from 'react'
import { cards } from '../_components/constants/constants'
import Cards from '../_components/cards'
import Button from '../_components/button'

const AboutMe = () => {
  return (
    <main >
      <h1>
        About me
      </h1>
      <p>Just some information to get to know me, what I like, and mostly to show my favorite games, shows and books.</p>
      {/* {cards.map(item => <Cards elements={item} />)} */}
      <div className='flex justify-around mt-5'>
        <Button text={'Videogames'} img={'images/vg.avif'}  />
        <Button text={'TV Shows'} img={'images/tv.webp'}  />
        <Button text={'Movies'} img={'images/mv.jpg'}  />
        <Button text={'Books'} img={'images/bk.webp'}  />
      </div>
    </main>
  )
}

export default AboutMe