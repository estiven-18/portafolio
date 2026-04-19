import CardSkills from "../Pages/CardSkills";
const Skills = () => {
  return (
    <div className="m-18">
      <h1 className="flex justify-center text-lime-400 text-5xl">
        <b>Habilidades</b>
      </h1>
      <p className="mt-4 text-center text-lg text-white/75">
        Desarrollo web, APIs y backend.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <CardSkills title="Frontend" skills={["HTML", "CSS", "Tailwind", "React","Bootstrap","JavaScript"]} />
        <CardSkills title="Backend" skills={["Node.js", "Express", "APIs REST", "ASP.NET" ,"C#"]} />
        <CardSkills title="Base de datos" skills={["MySQL", "MongoDB", "SQL Server"]} />
      </div>

    </div>
  );
};

export default Skills;
