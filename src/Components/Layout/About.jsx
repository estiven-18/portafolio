import CardAbout from "../Pages/CardAbout";

const InfoCard = [
  {
    id: "01",
    descripcion:
      "Experiencia en desarrollo de aplicaciones web utilizando PHP, Laravel, JavaScript, React, Bootstrap y MySQL."
  },
  {
    id: "02",
    descripcion:
      "Actualmente aprendiz del SENA en análisis y desarrollo de software, con enfoque en buenas prácticas y mejora continua."
  },
  {
    id: "03",
    descripcion:
      "Comprometido con el crecimiento del software colombiano, el trabajo en equipo y la colaboración en proyectos innovadores."
  }
];

const About = () => {
  return (
    <div className="m-18">
      <h1 className="flex justify-center text-lime-400 text-5xl">
        <b>Sobre mí</b>
      </h1>
      <p className="mt-4 text-center text-lg text-white/75 p">
        Soy programador Full-Stack. Actualmente soy aprendiz del SENA en análisis y desarrollo de software en Colombia. Me apasiona crear aplicaciones web modernas, escalables y eficientes. Siempre busco aprender nuevas tecnologías y mejorar mis habilidades. Disfruto colaborar en proyectos, explorar nuevas herramientas y contribuir al crecimiento del software colombiano.
      </p>
      <h1 className="flex justify-center text-2xl mt-8 text-lime-400">
        <b>Mi Enfoque</b>
      </h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {InfoCard.map((card) => (
          <CardAbout key={card.id} number={card.id} descripcion={card.descripcion} />
        ))}
      </div>

    </div>
  );
};

export default About;
