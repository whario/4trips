import React, { useEffect, useContext } from "react";
import LogIn from "../views/LogIn.js";
import { Trips } from "../Component/Trips.jsx";
import { Context } from "../store/appContext";
import { TripCard } from "../Component/TripCard.jsx";
export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadingTrips(1);
		console.log("loading trips @@@@");
	}, []);

	return (
		<div>
			<Trips />
			{store.resultSearchTrips.map((index, key) => {
				return;
				<TripCard key={key} index={index} />;
			})}
		</div>
	);
};
