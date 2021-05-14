import React, { useEffect, useContext } from "react";
import { Trips } from "./Trips.jsx";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { TripCard } from "./TripCard.jsx";

export const Search = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.resultSearchTrips.map((trip, index) => {
				return <TripCard key={index} trip={trip} />;
			})}
		</div>
	);
};
