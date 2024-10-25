import Image from "next/image";
import "./../styles/inicio.css";

import Portfolio from "./_components/Portfolio";

export default function Home() {
  // #35bef8 azul
  return (
    <>
      <main className="libre flex p-3 text-white">
        <div className="flex h-screen w-1/2 flex-col justify-center p-5">
          <h1 className="text-6xl">
            Hello there, I&apos;m
            <br /> <span className="font-bold text-blue">
              Santiago Alducin
            </span>{" "}
            <br />
            <span className="text-4xl">
              3rd semester Software Engineering student at TEC de Monterrey
            </span>
          </h1>

          <ul className="list mt-14 flex items-center justify-between">
            <li className="list-element flex h-24 w-24 items-center">
              <a target="_blank" href="https://es.react.dev">
                <img src="icons/react.png" alt="react" />
              </a>
            </li>
            <li className="list-element flex h-24 w-24 items-center">
              <a target="_blank" href="https://es.react.dev">
                <img src="icons/next.png" alt="next" />
              </a>
            </li>
            <li className="list-element flex h-24 w-24 items-center">
              <a target="_blank" href="https://www.typescriptlang.org">
                <img src="icons/ts.png" alt="typescript" />
              </a>
            </li>
            <li className="list-element flex h-24 w-24 items-center">
              <a target="_blank" href="https://www.postgresql.org">
                <img src="icons/postgres.svg" alt="postgres" />
              </a>
            </li>
            <li className="list-element flex h-24 w-24 items-center">
              <a target="_blank" href="https://tailwindcss.com">
                <img src="icons/tailwind.png" alt="tailwind" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flip-card m-auto grid w-1/3 grid-cols-1 grid-rows-1 rounded-md">
          {" "}
          {/* bg-gray-600 drop-shadow-glow */}
          <div className="flip-card-inner flex items-center justify-center">
            <img
              src="images/Santi_Alducin.jpg"
              className="flip-card-front rounded-md"
              alt="profilePic"
            />
            <p className="flip-card-back">{/* Contact Info */}</p>
          </div>
        </div>
      </main>
      <div id="portfolio" className="h-10"></div>
      <Portfolio />
    </>
  );
}
