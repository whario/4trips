import React, { useEffect, useContext } from "react";
import LogIn from "../views/LogIn.js";
import { Trips } from "./Trips.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadingTrips(1);
	}, []);
	return (
		<div>
			<Trips />
		</div>
	);
};
