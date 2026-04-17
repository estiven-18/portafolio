const Card = ({ title, text }) => {
	return (
		<article className="rounded-2xl border border-white/20 bg-black/20 p-5 transition-transform hover:-translate-y-1">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="mt-2 text-sm text-white/75">{text}</p>
		</article>
	);
};

export default Card;
