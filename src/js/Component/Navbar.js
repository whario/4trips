import React from "react";
import "../../styles/Navbar.css";
import logotipo from "../../img/logoTIpo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div>
			{" "}
			<nav className="navbar navbar">
				<img src={logotipo} className="logo" />
				<form className="form-inline search-btn">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<Link to="/registroviajero" className="btn  my-2 my-sm-0 btnRegistroLogin">
						{" "}
						Registre{" "}
					</Link>
					<Link to="/registroPro" className="btn  my-2 my-sm-0 btnRegistroLogin">
						{" "}
						Log in{" "}
					</Link>
				</form>
			</nav>
			<div className="white" />
		</div>
	);
};
export default Navbar;
