const Home = () => {
	return (
		<header
			id="home"
			className="flex flex-row justify-around pt-32 pb-16 px-4 md:px-12 lg:px-32 leading-10"
		>
			<div className="text-center">
				<h1
					translate="no"
					className="text-6xl font-blackhansans font-normal text-green-400"
				>
					Farmy
				</h1>
				<h2 className="text-4xl font-Poppins font-medium">
					The best solution for your farm
				</h2>
				<p className="text-xl font-Poppins font-medium">
					We have a lot of offers to improve your farm
				</p>
			</div>
		</header>
	);
};

export default Home;
