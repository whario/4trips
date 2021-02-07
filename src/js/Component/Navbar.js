import React from "react";
import "../../styles/Navbar.css";
import logotipo from "../../img/logo_4Trips_navbar.png";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div>
			{" "}
			<div>
				<nav className="navbar navbar">
					<Link to="/">
						<img src={logotipo} className="logo" />
					</Link>
					<form className="form-inline search-btn">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Buscar viajes"
							aria-label="Search"
						/>
						<Link to="/elige/tipo/deusuario" className="btn  my-2 my-sm-0 btnRegistroLogin">
							{" "}
							Registro{" "}
						</Link>
						<Link to="/iniciar/sesion" className="btn  my-2 my-sm-0 btnRegistroLogin">
							{" "}
							Login{" "}
						</Link>
					</form>
				</nav>
			</div>
			<div className="white" />
		</div>
	);
};
export default Navbar;
