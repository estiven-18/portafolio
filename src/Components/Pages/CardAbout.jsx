const CardAbout = ({ number, descripcion }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-md hover:border-lime-400 border-2 border-white/6 text-center">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/40 bg-white/90 text-sm font-semibold text-black">
        <a>{number}</a>
      </div>
      <p className="text-sm text-white/75">{descripcion}</p>
    </div>
  );
};

export default CardAbout;
