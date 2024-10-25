import React from "react";
import Project from "./Project";
import { projects } from "./constants/constants";
import "./../../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="flex h-screen flex-col items-center">
      <div className="py-3 text-3xl">Projects I have been part of:</div>
      <aside className="list-3d grid w-10/12 grid-cols-3 gap-5 max-md:block">
        {projects.map((item, idx) => (
          <Project
            href={item.href}
            name={item.name}
            imagen={item.image}
            key={idx}
          />
        ))}
      </aside>
    </div>
  );
};

export default Portfolio;
