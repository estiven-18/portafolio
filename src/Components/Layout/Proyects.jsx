import CardProyects from "../Pages/CardProyects";
const Proyects = () => {
  const projects = [
    {
      preview:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
      title: "Sistema de Inventario",
      description:
        "Gestion de productos, categorias y reportes para control de stock en tiempo real.",
      technologies: ["React", "Tailwind", "Node.js", "API REST"],
      liveUrl: "https://example.com/inventario",
    },
    {
      preview:
        "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80",
      title: "Panel Administrativo",
      description:
        "Dashboard para administrar usuarios, permisos y metricas de negocio.",
      technologies: ["Vue", "TypeScript", "Firebase", "Pinia"],
      liveUrl: "https://example.com/panel",
    },
    {
      preview:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80",
      title: "E-commerce Laravel",
      description:
        "Tienda online con carrito, pagos y gestion de pedidos para multiples productos.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "PHP"],
      liveUrl: "https://example.com/ecommerce",
    },
    {
      preview:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
      title: "API Empresarial",
      description:
        "Servicio backend para autenticacion, catalogos y auditoria con alta disponibilidad.",
      technologies: ["ASP.NET", "C#", "SQL Server", "Docker"],
      liveUrl: "https://example.com/api",
    },
  ];

  return (
    <div className="m-18">
      <h1 className="flex justify-center text-white/75 text-5xl">
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
