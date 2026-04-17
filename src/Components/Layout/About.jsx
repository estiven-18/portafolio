import CardAbout from "../Pages/CardAbout";

const InfoCard = [
    {"id":"01", "descripcion":"Experiencia en desarrollo de aplicaciones web utilizando tecnologías como React, Node.js, Express y MongoDB."},
    {"id":"02", "descripcion":"Fuerte conocimiento en diseño de interfaces de usuario atractivas y funcionales utilizando HTML, CSS y frameworks como Tailwind CSS."},
    {"id":"03", "descripcion":"Habilidad para trabajar en equipo, colaborar con otros desarrolladores y comunicarse efectivamente para lograr objetivos comunes."}
];

const About = () => {
  return (
    <div className="m-18">
      <h1 className="flex justify-center text-white/75 text-5xl">
        <b>About Me</b>
      </h1>
      <p className="mt-4 text-center text-lg text-white/75 p">
        I am a passionate full-stack developer with experience in creating
        modern web applications. I specialize in JavaScript, React, and Node.js.
        c# and python. I enjoy building scalable and efficient applications, and I am always eager to learn new technologies and improve my skills. In my free
        time, I like to contribute to open-source projects and explore new
        programming languages.
      </p>
      <h1 className="flex justify-center text-2xl mt-8 text-white/75">
        <b>My Approach</b>
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
