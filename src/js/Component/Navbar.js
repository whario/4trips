import React from "react";
import "../../styles/Navbar.css";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar">
				<a className="navbar-brand">Navbar</a>
				<form className="form-inline">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn  my-2 my-sm-0" type="submit">
						Registre
					</button>
					<button className="btn  my-2 my-sm-0" type="submit">
						Log in
					</button>
				</form>
			</nav>
			<div className="white" />
		</div>
	);
};
export default Navbar;
