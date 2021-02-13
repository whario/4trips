import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { checkPropTypes } from "prop-types";
import logoAloj from "../../img/alojamientoicon.png";
import logoMultia from "../../img/actividadesicon.png";
import logoBbq from "../../img/barbacoaicon.png";
import logoComida from "../../img/comidaicon.png";
import logoPiscina from "../../img/piscinaicon.png";
import "../../styles/trips.scss";

export const TripDetail = () => {
	const { store, actions } = useContext(Context);
	const logos = {
		sleep: logoAloj,
		eat: logoComida,
		bbq: logoBbq,
		adventure: logoMultia,
		relax: logoPiscina
	};
	const formatDay = day => {
		let newFormatDay = new Date(day);
		return newFormatDay.getDate() + "/" + (newFormatDay.getMonth() + 1) + "/" + newFormatDay.getUTCFullYear();
	};

	return (
		<div className="w-auto p-3">
			<div className="card">
				<div className="row">
					<div className="col-4">
						<img src={store.detailTrip.traveler.avatar} className="rounded-circle big" />
					</div>
					<div className="col-8">
						<h5 className="card-title">{store.detailTrip.traveler.username}</h5>
					</div>
				</div>
				<div className="card-body">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className="row">
								Destino:
								<div className="props">{store.detailTrip.destination}</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">
								Desde:
								<div className="props">{formatDay(store.detailTrip.first_day)}</div>
							</div>
							<div className="row">
								Hasta:
								<div className="props">{formatDay(store.detailTrip.last_day)}</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">Descripción del viaje:</div>
							<div className="row">
								<div className="props description">{store.detailTrip.description}</div>
							</div>
						</li>
						<li className="list-group-item blue">
							Nº ofertas recibidas:
							<div className="numero">{store.detailTrip.counter}</div>
						</li>
					</ul>
				</div>
				<div className="card-footer">
					{store.detailTrip.needs_trip.map((need, index) => {
						return <img src={logos[need]} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
};
