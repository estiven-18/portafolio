const Nav = () => {
  return (
    <nav className="mx-auto mt-4  w-fit border-b border-white px-2 pb-3">
      <ul className="flex items-center justify-center gap-10 text-base text-white">
        <li>
          <a href="/" className="pb-1 transition-colors hover:text-lime-400"><b>Inicio</b></a>
        </li>
        <li>
          <a href="#about" className="pb-1 transition-colors hover:text-lime-400"><b>Sobre mí</b></a>
        </li>
        <li>
          <a href="/skills" className="pb-1 transition-colors hover:text-lime-400"><b>Habilidades</b></a>
        </li>
        <li>
          <a href="/projects" className="pb-1 transition-colors hover:text-lime-400"><b>Proyectos</b></a>
        </li>
        <li>
          <a href="/contact" className="pb-1 transition-colors hover:text-lime-400"><b>Contacto</b></a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
