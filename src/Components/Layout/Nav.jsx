const Nav = () => {
  return (
    <nav className="mx-auto mt-4 w-fit border-b border-white px-2 pb-3">
      <ul className="flex items-center justify-center gap-10 text-base text-white">
        <li>
          <a
            href="#PantallaPrincipal"
            className="pb-1 transition-colors hover:text-lime-400"
          >
            <b>Inicio</b>
          </a>
        </li>
        <li>
          <a
            href="#PantallaAbout"
            className="pb-1 transition-colors hover:text-lime-400"
          >
            <b>Sobre mí</b>
          </a>
        </li>
        <li>
          <a
            href="#PantallaSkills"
            className="pb-1 transition-colors hover:text-lime-400"
          >
            <b>Habilidades</b>
          </a>
        </li>
        <li>
          <a
            href="#PantallaProyects"
            className="pb-1 transition-colors hover:text-lime-400"
          >
            <b>Proyectos</b>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
