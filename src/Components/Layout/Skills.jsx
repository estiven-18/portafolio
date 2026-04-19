import CardSkills from "../Pages/CardSkills";
import { useEffect, useState } from "react";

const Skills = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("/json/infoSkills.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div className="m-18">
      <h1 className="flex justify-center text-lime-400 text-5xl">
        <b>Habilidades</b>
      </h1>
      <p className="mt-4 text-center text-lg text-white/75">
        Desarrollo web, APIs y backend.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {info.map((card) => (
          <CardSkills key={card.title} title={card.title} skills={card.skills} />
        ))}
      </div>

    </div>
  );
};

export default Skills;
