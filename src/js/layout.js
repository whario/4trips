import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import { Home } from "./views/home";
import SignUp from "./views/SignUp";
import SignUpPro from "./views/SignUpPro";
import { AddTrip } from "./views/AddTrip.jsx";
import ChoseUser from "./views/ChoseUser.jsx";
import Navbar from "./Component/Navbar.js";
import Footer from "./Component/Footer.jsx";
import LogIn from "./views/LogIn";
import { TravelerProfil } from "./Component/TravelerProfil.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/perfil/Traveler" component={TravelerProfil} />
					<Route exact path="/registroviajero" component={SignUp} />
					<Route exact path="/registroPro" component={SignUpPro} />
					<Route exact path="/addTrip" component={AddTrip} />
					<Route exact path="/elige/tipo/deusuario" component={ChoseUser} />
					<Route exact path="/iniciar/sesion" component={LogIn} />
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);
