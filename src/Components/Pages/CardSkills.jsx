const CardSkills = ({ title, skills = [] }) => {
  return (
    <div className="mt-8 flex justify-center">
      <div className="h-70 w-60 rounded-xl m-6 border border-lime-400  bg-white/10 backdrop-blur-sm">
        <h1 className="mt-6 mx-6 text-3xl text-white/75">
          <b>{title}</b>
        </h1>

        <div className="mx-6 my-6 flex max-w-full flex-wrap gap-[6px]">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex w-fit max-w-full rounded-xl border border-gray-400 bg-white/10 px-3 py-1 text-sm text-white/80 whitespace-normal break-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSkills;
