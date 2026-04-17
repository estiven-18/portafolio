const CardAbout = ({ number, descripcion }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/40 bg-white/90 text-sm font-semibold text-black">
        <b>{number}</b>
      </div>
      <p className="text-left text-sm text-white/75">{descripcion}</p>
    </div>
  );
};

export default CardAbout;
