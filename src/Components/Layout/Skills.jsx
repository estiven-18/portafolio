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
    <div className="py-20 px-4 flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
      <h1 className="text-lime-400 text-5xl mb-6">
        <b>Habilidades</b>
      </h1>
      <p className="text-center text-lg text-white/75 max-w-2xl mb-12">
        Desarrollo web, APIs y backend.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        {info.map((card) => (
          <CardSkills
            key={card.title}
            title={card.title}
            skills={card.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
