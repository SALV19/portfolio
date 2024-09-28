import Image from "next/image";
import './../styles/inicio.css'

import Portfolio from "./_components/Portfolio";

export default function Home() {
  
  // #35bef8 azul
  return (
    <>
    <main className=" text-white libre p-3 flex">
      <div className="h-screen w-1/2 flex justify-center flex-col p-5">
        <h1 className="text-5xl">
          Hello there, I&apos;m
          <br/> <span className="text-blue font-bold">Santiago Alducin</span> <br/> 
          <span className="text-4xl">
            3rth semester Software Engineering
            student of TEC de Monterrey
          </span>
        </h1>

        <ul className="flex mt-14 items-center justify-between list">
          <li className="h-24 w-24 flex items-center list-element"><a target='_blank' href='https://es.react.dev'>
            <img src="icons/react.png" alt='react'/></a>
            </li>
          <li className="h-24 w-24 flex items-center list-element"><a target='_blank' href='https://es.react.dev'>
            <img src="icons/next.png" alt='next'/></a>
            </li>
          <li className="h-24 w-24 flex items-center list-element"><a target='_blank' href='https://www.typescriptlang.org'>
            <img src="icons/ts.png" alt='typescript'/></a>
            </li>
          <li className="h-24 w-24 flex items-center list-element"><a target='_blank' href='https://www.postgresql.org'>
            <img src="icons/postgres.svg" alt='postgres'/></a>
            </li>
          <li className="h-24 w-24 flex items-center list-element"><a target='_blank' href='https://tailwindcss.com'>
            <img src="icons/tailwind.png" alt='tailwind'/></a>
            </li>
        </ul>
      </div>
      <div className=" rounded-md bg-gray-600 m-auto drop-shadow-glow flip-card w-1/2 grid grid-cols-1 grid-rows-1">
          <div className="flip-card-inner flex items-center justify-center">
            {/* <img src='images/Santi.png' className="flip-card-front" alt='profilePic'/> */}
            <p className="flip-card-back">
              {/* Contact Info */}
            </p>
          </div>
      </div>
    </main>
      <div id='portfolio' className="h-10"></div>
      <Portfolio />
    </>
  );
}
