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
    <div className="py-20 px-4 flex flex-col justify-center items-center text-center max-w-6xl mx-auto w-full">
      <h1 className="text-lime-400 text-5xl mb-6">
        <b>Proyectos</b>
      </h1>
      <p className="text-center text-lg text-white/75 max-w-2xl mb-12 p">
        Algunos de mis proyectos destacados.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
