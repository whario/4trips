import React from "react";
import Footer from "../Component/Footer.jsx";
import Navbar from "../Component/Navbar.js";
import { Trips } from "./Trips.jsx";
export const Home = () => {
	return (
		<div>
			<Navbar />
			<Footer />
			<Trips />
		</div>
	);
};
