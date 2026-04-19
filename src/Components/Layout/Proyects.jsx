import CardProyects from "../Pages/CardProyects";
const Proyects = () => {
  const projects = [
    {
      preview:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
      title: "CardMatch",
      description:
        "Juego de memoria donde los jugadores deben encontrar pares de cartas iguales. Desarrollado con PHP y bootstrap CSS.",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      liveUrl: "https://cardmatch.adsocartago.com",
    },
    {
      preview:
        "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80",
      title: "Pigmento Salon de Belleza",
      description:
        "Landing page para un salon de belleza hecha en wordpress.",
      technologies: ["WordPress"],
      liveUrl: "https://example.com/panel",
    },
    
  ];

  return (
    <div className="m-18">
      <h1 className="flex justify-center text-lime-400 text-5xl">
        <b>Proyectos</b>
      </h1>
      <p className="mt-4 text-center text-lg text-white/75 p">
        Algunos de mis proyectos destacados.
      </p>
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
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
