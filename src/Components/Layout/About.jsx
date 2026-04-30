import CardAbout from "../Pages/CardAbout";
import { useEffect, useState } from "react";

const About = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("/json/infoCard.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div className="py-20 px-4 flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
      <h1 className="text-lime-400 text-5xl mb-6">
        <b>Sobre mí</b>
      </h1>
      <p className="text-center text-lg text-white/75 p max-w-2xl mb-12">
        Soy programador Full-Stack. Actualmente soy aprendiz del SENA en
        análisis y desarrollo de software. Me apasiona crear aplicaciones web
        modernas, escalables y eficientes. Siempre busco aprender nuevas
        tecnologías y mejorar mis habilidades. Disfruto colaborar en proyectos,
        explorar nuevas herramientas y me gustaria contribuir al crecimiento del
        software colombiano.
      </p>
      <h1 className="text-2xl text-lime-400 mb-8">
        <b>Mi Enfoque</b>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        {info.map((card) => (
          <CardAbout
            key={card.id}
            number={card.id}
            descripcion={card.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
