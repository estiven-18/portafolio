const CardProyects = ({
  preview,
  technologies = [],
  title,
  description,
  liveUrl = "#",
}) => {
  return (
    <div className="w-full">
      <div className="w-full rounded-xl border border-gray-400 bg-white/10 p-4 backdrop-blur-sm">
        <img
          src={preview}
          alt="Vista previa del proyecto"
          className="h-48 w-full rounded-lg object-cover"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-300 bg-white/15 px-2 py-1 text-xs text-white/90"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="mt-4 text-xl font-semibold text-white">{title}</h2>

        <p className="mt-2 text-sm text-white/75">{description}</p>

        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex w-fit rounded-lg border border-gray-300 bg-white/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-lime-400 hover:text-black"
        >
          Go Live
        </a>
      </div>
    </div>
  );
};

export default CardProyects;
