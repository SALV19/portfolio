import Link from "next/link";
import './../styles/inicio.css'

export default function Home() {
  
  // #35bef8 azul
  return (
    <main className=" text-white libre p-3 flex">
      <div className="h-screen w-1/2 flex justify-center flex-col p-5">
        <h1 className="text-5xl">
          Hello there, I'm
          <br/> <span className="text-blue font-bold">Santiago Alducin</span> <br/> 
          <span className="text-4xl">
            3rth semester Software Engineering
            student of TEC de Monterrey
          </span>
        </h1>

        <ul className="flex mt-14 items-center justify-between list">
          <li className="h-24 w-24 flex items-center list-element"><img src="icons/react.png"/></li>
          <li className="h-24 w-24 flex items-center list-element"><img src="icons/next.png"/></li>
          <li className="h-24 w-24 flex items-center list-element"><img src="icons/ts.png"/></li>
          <li className="h-24 w-24 flex items-center list-element"><img src="icons/postgres.svg"/></li>
          <li className="h-24 w-24 flex items-center list-element"><img src="icons/tailwind.png"/></li>
        </ul>
      </div>
      <div className="h-4/6 w-1/3 rounded-md bg-gray-600 m-auto drop-shadow-glow">
          <img src='images/'/>
      </div>
    </main>
  );
}
