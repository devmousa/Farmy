const AboutCard = ({ title, icon, children }) => {
	return (
		<div className="group cursor-default transition-all flex flex-col p-2 md:p-4 bg-white border border-transparent hover:bg-green-400 hover:border-white hover:shadow-xl lg:hover:-translate-y-8 rounded-xl">
			<div className="flex flex-row justify-start items-center mb-4">
				<div className="w-10 lg:w-12 float-left mr-4 p-1 bg-white border-2 border-green-400 fill-green-400 group-hover:bg-green-400 group-hover:border-white group-hover:fill-white rounded">
					{icon}
				</div>
				<h2 className="text-3xl text-black group-hover:text-white text-center font-Poppins">
					{title}
				</h2>
			</div>
			<p className="px-2 text-lg text-black group-hover:text-white font-Poppins">
				{children}
			</p>
		</div>
	);
};

export default AboutCard;
