const ButtonHero = ({ text, href }) => {
  return (
    <a
      href={href}
      className="mt-6 inline-flex rounded-2xl border border-white/40 bg-white/20 px-5 py-2 text-white backdrop-blur-md transition-transform hover:bg-lime-400 hover:text-black"
    >
      {text}
    </a>
  );
};

export default ButtonHero;
