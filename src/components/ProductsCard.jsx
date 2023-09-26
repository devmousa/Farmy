const ProductsCard = ({ title, icon, children }) => {
	return (
		<div className="group cursor-default transition-all flex flex-col p-4 bg-green-400 border border-transparent hover:bg-white hover:border-green-400 hover:shadow-xl lg:hover:-translate-y-8 rounded-xl">
			<div className="flex flex-row justify-start items-center mb-4">
				<div className="w-10 lg:w-12 float-left mr-4 p-1 bg-green-400 border-2 border-white fill-white group-hover:bg-white group-hover:border-green-400 group-hover:fill-green-400 rounded">
					{icon}
				</div>
				<h2 className="text-3xl text-center text-white group-hover:text-black font-Poppins">
					{title}
				</h2>
			</div>
			<p className="px-2 text-lg text-white group-hover:text-black font-Poppins">
				{children}
			</p>
		</div>
	);
};

export default ProductsCard;
