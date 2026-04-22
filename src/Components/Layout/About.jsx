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
    <div className="m-18">
      <h1 className="flex justify-center text-lime-400 text-5xl">
        <b>Sobre mí</b>
      </h1>
      <p className="mt-4 text-center text-lg text-white/75 p">
        Soy programador Full-Stack. Actualmente soy aprendiz del SENA en
        análisis y desarrollo de software. Me apasiona crear
        aplicaciones web modernas, escalables y eficientes. Siempre busco
        aprender nuevas tecnologías y mejorar mis habilidades. Disfruto
        colaborar en proyectos, explorar nuevas herramientas y me gustaria contribuir al
        crecimiento del software colombiano.
      </p>
      <h1 className="flex justify-center text-2xl mt-8 text-lime-400">
        <b>Mi Enfoque</b>
      </h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
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
