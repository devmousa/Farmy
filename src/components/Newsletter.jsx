const Newsletter = () => {
	return (
		<section className="flex flex-col items-center mt-24 mb-16 px-4 py-16 text-center bg-green-400">
			<h3 className="mb-8 text-6xl text-white font-bold font-Poppins">
				Subscribe to our Newsletter!
			</h3>
			<div className="w-full">
				<input
					className="w-full md:w-1/2 lg:w-1/3 p-1 mx-auto md:mx-4 my-4 text-xl bg-white outline-none border border-black rounded"
					type="email"
					placeholder="Your Email"
				/>
				<button className="p-1 text-xl text-black bg-white hover:bg-green-50 border border-black rounded">
					Subscribe
				</button>
			</div>
		</section>
	);
};

export default Newsletter;
