import React from "react";
import Navbar from "../Component/Navbar.js";
import Footer from "../Component/Footer.jsx";
import { Trips } from "./Trips.jsx";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<Trips />
			<Footer />
		</div>
	);
};
