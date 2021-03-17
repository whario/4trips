import React, { useEffect, useContext } from "react";
import { Context } from "./store/appContext";
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
import { TripDetail } from "./views/tripDetail.jsx";
import { TravelerProfil } from "./Component/TravelerProfil.jsx";
import { PerfilPro } from "./Component/PerfilPro.jsx";
import { AddOffer } from "./Component/AddOffer.jsx";
import { EditTrip } from "./views/Edittrip.jsx";
//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token != undefined && token != null) {
			actions.isLoginVerified();
		}
	}, []);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/editTrip" component={EditTrip} />
					<Route exact path="/perfilpro" component={PerfilPro} />
					<Route exact path="/perfilTraveler" component={TravelerProfil} />
					<Route exact path="/registroviajero" component={SignUp} />
					<Route exact path="/registroPro" component={SignUpPro} />
					<Route exact path="/addTrip" component={AddTrip} />
					<Route exact path="/elige/tipo/deusuario" component={ChoseUser} />
					<Route exact path="/login" component={LogIn} />
					<Route exact path="/trip/:id" component={TripDetail} />
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
