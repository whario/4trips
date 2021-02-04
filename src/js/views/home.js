import React, { useEffect, useContext } from "react";
import { Trips } from "./Trips.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadingTrips();
	}, []);
	return (
		<div>
			<Trips />
		</div>
	);
};
