import CardProyects from "../Pages/CardProyects";
import { useEffect, useState } from "react";

const Proyects = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("/json/proyects.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  
  

  return (
    <div className="m-18">
      <h1 className="flex justify-center text-lime-400 text-5xl">
        <b>Proyectos</b>
      </h1>
      <p className="mt-4 text-center text-lg text-white/75 p">
        Algunos de mis proyectos destacados.
      </p>
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {info.map((project) => (
          <CardProyects
            key={project.title}
            preview={project.preview}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Proyects;
