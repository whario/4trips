import React from "react";
import "../../styles/Navbar.css";
import logotipo from "../../img/logoTIpo.png";
const Navbar = () => {
	return (
		<div>
			{" "}
			<nav className="navbar navbar">
				<img src={logotipo} className="navbar-brand " />
				<form className="form-inline">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn  my-2 my-sm-0" type="submit">
						{" "}
						Registre{" "}
					</button>
					<button className="btn  my-2 my-sm-0" type="submit">
						{" "}
						Log in{" "}
					</button>
				</form>
			</nav>
			<div className="white" />
		</div>
	);
};
export default Navbar;
