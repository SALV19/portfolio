import Link from "next/link";

export default function Home() {
  
  // #35bef8 azul
  return (
    <main className="bg-slate-800 text-white libre p-3 flex">
      <div className="h-screen w-1/2 flex justify-center flex-col p-5">
        <h1 className="text-5xl">
          Hello there, I'm
          <br/> <span className="text-blue font-bold">Santiago Alducin</span> <br/> 
          <span className="text-4xl">
            3rth semester Software Engineering
            student of TEC de Monterrey
          </span>
        </h1>

        <ul className="flex mt-14 items-center justify-between">
          <li className="h-24 w-24 flex items-center"><img src="react.png"/></li>
          <li className="h-24 w-24 flex items-center"><img src="next.png"/></li>
          <li className="h-24 w-24 flex items-center"><img src="ts.png"/></li>
          <li className="h-24 w-24 flex items-center"><img src="postgres.svg"/></li>
          <li className="h-24 w-24 flex items-center"><img src="tailwind.png"/></li>
        </ul>
      </div>
      <div className="h-4/6 w-1/3 rounded-md bg-gray-600 m-auto drop-shadow-glow">
          a
      </div>
    </main>
  );
}
