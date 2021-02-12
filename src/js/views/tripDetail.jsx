import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { checkPropTypes } from "prop-types";

export const TripDetail = () => {
	const { store, actions } = useContext(Context);
	const [travel, setTravel] = useState({
		avatar: store.tripList.avatar
	});

	return (
		<div className="col-md-4 col-sm-1">
			<div className="card h-100">
				<div className="row">
					<div className="col-4">{trip.traveler.avatar}</div>
					<div className="col-8">
						<h5 className="card-title">{trip.traveler.username}</h5>
					</div>
				</div>
				<div className="card-body">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className="row">
								Destino:
								<div className="props">{trip.destination}</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">
								Desde:
								<div className="props">{trip.first_day}</div>
							</div>
							<div className="row">
								Hasta:
								<div className="props">{trip.last_day}</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">Descripción del viaje:</div>
							<div className="row">
								<div className="props description">{trip.description}</div>
							</div>
						</li>
						<li className="list-group-item blue">
							Nº ofertas recibidas:
							<div className="numero">5</div>
						</li>
					</ul>
				</div>
				<div className="card-footer">
					{trip.needs_trip.map((need, index) => {
						return <img src={logos[need]} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
};
