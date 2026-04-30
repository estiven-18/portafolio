import ButtonHero from "../Pages/ButtonHero";
import { useEffect, useState } from "react";

const Hero = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("/json/infoButton.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div className="py-20 px-4 min-h-screen flex flex-col justify-center items-center text-center">
      <p className="text-3xl md:text-4xl p-4 text-white/75 mb-4">
        <b>¡Hola Soy Estiven!</b>
      </p>
      <h1 className="text-4xl md:text-7xl p-4 text-lime-400 font-bold mb-6">
        Desarrollador Full-Stack
      </h1>
      <h2 className="text-lg md:text-xl p-4 text-white mb-8">
        Especializado en tecnologías modernas,
        <br /> con fuerte en el desarrollo de aplicaciones escalables y
        eficientes.
        <br /> y tambien en la construccion de interfaces de usuario atractivas.
      </h2>

      <div className="mt flex items-center gap-6">
        {info.map((button) => (
          <ButtonHero key={button.id} text={button.title} href={button.href} />
        ))}
      </div>

      <div className="mt-16 mb-10 flex items-center gap-6">
        <a
          href="#"
          aria-label="WhatsApp"
          className="flex h-14 w-14 items-center justify-center text-white backdrop-blur-md transition-transform hover:scale-120 group"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current group-hover:text-lime-500 transition-colors"
            aria-hidden="true"
          >
            <path d="M20.5 3.5A11.9 11.9 0 0 0 12 .1C5.4.1.1 5.4.1 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.4ZM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.3 12C2.3 6.6 6.7 2.2 12 2.2c2.6 0 5.1 1 6.9 2.8A9.7 9.7 0 0 1 21.8 12c0 5.4-4.4 9.8-9.8 9.8Zm5.7-7.4c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.2-.4-2.4-1.4-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.5l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.8-.9-2.4-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.2.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 2-0.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.4Z" />
          </svg>
        </a>

        <a
          href="https://github.com/estiven-18"
          aria-label="GitHub"
          className="flex h-14 w-14 items-center justify-center  text-white backdrop-blur-md transition-transform hover:scale-120 group"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current group-hover:text-purple-500 transition-colors"
            aria-hidden="true"
          >
            <path d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.3-.3-4.8-1.2-4.8-5.3 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 .9a10.4 10.4 0 0 1 5.4 0c2.1-1.2 3-.9 3-.9.6 1.4.2 2.5.1 2.8.7.8 1.1 1.8 1.1 3 0 4.1-2.5 5-4.9 5.3.4.3.8.9.8 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z" />
          </svg>
        </a>

        <a
          href="#"
          aria-label="LinkedIn"
          className="flex h-14 w-14 items-center justify-center  text-white backdrop-blur-md transition-transform hover:scale-120 group"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current group-hover:text-blue-500 transition-colors"
            aria-hidden="true"
          >
            <path d="M4.98 3.5A2.5 2.5 0 1 1 4.97 8a2.5 2.5 0 0 1 .01-4.5ZM3 9h3.9v12H3V9Zm7 0h3.7v1.6h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.7 4.7 6.2V21h-3.9v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H10V9Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
