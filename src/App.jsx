import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
const Clients = lazy(() => import("./components/Clients"));
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Products />
			<Suspense fallback={<></>}>
				<Clients />
			</Suspense>
			<Newsletter />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
