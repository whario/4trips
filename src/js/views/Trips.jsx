import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { TripCard } from "../Component/TripCard.jsx";
import "../../styles/index.scss";

import { checkPropTypes } from "prop-types";

export const Trips = () => {
	const { store, actions } = useContext(Context);

	console.log("LOADING", store.tripList);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3 offset-md-9">
					<Link className="btn btn-primary" to="/addTrip">
						Publicar viaje
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="espaciador" />
				</div>
			</div>
			<div className="row">
				<div className="ultimos">Últimos viajes publicados:</div>
			</div>
			<div className="container">
				<div className="row">
					{store.tripList.map((trip, index) => (
						<TripCard key={index} trip={trip} />
					))}
				</div>
				<div className="row">
					<div className="d-grid gap-2 col-md-2 mx-auto">
						<Link className="btn btn-secondary btn-sm" to="">
							Ver mas viajes
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
