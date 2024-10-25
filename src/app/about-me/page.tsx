import React, { FC } from "react";
import { cards } from "../_components/constants/constants";
import Cards from "../_components/cards";
import Button from "../_components/button";

const AboutMe = () => {
  return (
    <main>
      <h1 className="mt-5">About me</h1>

      {/* <p>
        Just some information to get to know me, what I like, and mostly to show
        my favorite games, shows and books.
      </p> */}
      {/* {cards.map(item => <Cards elements={item} />)} */}
      <div className="mt-5 justify-around">
        {/* <Button text={'Videogames'} img={'images/vg.avif'}  />
        <Button text={'TV Shows'} img={'images/tv.webp'}  />
        <Button text={'Movies'} img={'images/mv.jpg'}  />
        <Button text={'Books'} img={'images/bk.webp'}  /> */}
        <p>
          I want to become someone able to develop different applications, make
          my ideas reality and have the habilities necessary to understand a
          problem and be able to create an aplication able to solve it, be it a
          problem people may have or something I have.
        </p>
        <p className="mt-3">
          My skills:
          <ul className="list-disc px-5">
            <li>C++</li>
            <li>Typescript</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>SQL</li>
            <li>R</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Tailwind</li>
          </ul>
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
