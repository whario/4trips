import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { TripCard } from "../Component/TripCard.jsx";
import "../../styles/trips.scss";

import { checkPropTypes } from "prop-types";

export const Trips = () => {
	const { store, actions } = useContext(Context);
	const [page, setPage] = useState(1);

	useEffect(
		() => {},
		[store.tripList] //espero a que haya cambios en la variable tripList con useEffect para hacer el mapeado
	);
	const changePage = () => {
		let newPage = page + 1;
		console.log(newPage);
		setPage(newPage);
		actions.loadingTrips(newPage);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="espaciador" />
				</div>
				<div className="col-md-3 offset-md-9">
					<Link className="btn btn-primary publicar" to="/addTrip">
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
					{store.tripList.length > 0
						? store.tripList.map((trip, index) => <TripCard key={index} trip={trip} />)
						: "cargando viajes..."}
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-3 col-sm-12 masviajes">
						<button className="btn btn-secondary btn-sm showmore" onClick={changePage}>
							Ver mas viajes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
