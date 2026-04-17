import CardSkills from "../Pages/CardSkills";
const Skills = () => {
  return (
    <div className="m-18">
      <h1 className="flex justify-center text-white/75 text-5xl">
        <b>Skills</b>
      </h1>
      <p className="mt-4 text-center text-lg text-white/75 p">
        Desarrollo web, APIs y backend.
      </p>
      <div className="flex justify-center">
        <CardSkills title="Frontend" skills={["HTML", "CSS", "Tailwind", "React"]} />
        <CardSkills title="Backend" skills={["Node.js", "Express", "APIs REST", "ASP.NET"]} />
        <CardSkills title="Base de datos" skills={["MySQL", "MongoDB", "SQL Server", "PostgreSQL"]} />
        <CardSkills title="DevOps" skills={["Docker", "Git", "GitHub Actions", "Nginx"]} />
      </div>

    </div>
  );
};

export default Skills;
