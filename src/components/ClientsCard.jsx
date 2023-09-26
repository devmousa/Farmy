const ClientsCard = ({ name, image, children }) => {
	return (
		<div className="min-h-[24rem] p-4 flex flex-col justify-between rounded text-center">
			<q>{children}</q>
			<div>
				<img
					className="aspect-square w-16 mx-auto border border-black rounded-full bg-green-400"
					src={image}
					alt={name}
					loading="lazy"
				/>
				<h3>{name}</h3>
			</div>
		</div>
	);
};

export default ClientsCard;
