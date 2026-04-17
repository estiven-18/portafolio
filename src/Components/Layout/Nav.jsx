const Nav = () => {
  return (
    <nav className="mx-auto mt-4 w-fit rounded-2xl border border-white/40 bg-white/10 px-7 py-3 backdrop-blur-md">
      <ul className="flex items-center justify-center gap-10 text-base text-white">
        <li>
          <a href="/" className="border-b-2 border-transparent pb-1 transition-colors hover:border-white"><b>Home</b></a>
        </li>
        <li>
          <a href="#about" className="border-b-2 border-transparent pb-1 transition-colors hover:border-white"><b>About</b></a>
        </li>
        <li>
          <a href="/skills" className="border-b-2 border-transparent pb-1 transition-colors hover:border-white"><b>Skills</b></a>
        </li>
        <li>
          <a href="/projects" className="border-b-2 border-transparent pb-1 transition-colors hover:border-white"><b>Projects</b></a>
        </li>
        <li>
          <a href="/contact" className="border-b-2 border-transparent pb-1 transition-colors hover:border-white"><b>Contact</b></a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
