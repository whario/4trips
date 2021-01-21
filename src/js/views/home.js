import React from "react";
import Footer from "../Component/Footer.jsx";
import Navbar from "../Component/Navbar.js";
import SignUp from "./SignUp.js";

export const Home = () => {
	return (
		<div>
			<Navbar />
			<SignUp />
			<Footer />
		</div>
	);
};
