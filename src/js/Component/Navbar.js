import React, { useEffect, Fragment, useContext } from "react";
import "../../styles/Navbar.css";
import logotipo from "../../img/logo_4Trips_navbar.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
const Navbar = props => {
	const { store, actions } = useContext(Context);
	console.log(store, "props");

	const redirect = () => {
		if (store.isLogin == false) {
			return (
				<Fragment>
					<Link to="/elige/tipo/deusuario" className="btn  my-2 my-sm-0 btnRegistroLogin">
						{" "}
						Registro{" "}
					</Link>
					<Link to="/login" className="btn  my-2 my-sm-0 btnRegistroLogin">
						{" "}
						Login{" "}
					</Link>
				</Fragment>
			);
		} else {
			const path = store.rol == "Traveler" ? "/perfil/Traveler" : "/perfil/pro";
			return (
				<Fragment>
					<Link to={path} className="btn  my-2 my-sm-0 btnRegistroLogin">
						Mi perfil
					</Link>
					<Link to="/login" onClick={e => actions.logout()} className="btn  my-2 my-sm-0 btnRegistroLogin">
						{" "}
						Logout
					</Link>
				</Fragment>
			);
		}
	};

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
						{redirect()}
					</form>
				</nav>
			</div>
			<div className="white" />
		</div>
	);
};
export default Navbar;
