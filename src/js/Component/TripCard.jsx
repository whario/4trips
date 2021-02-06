import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import logoAloj from "../../img/alojamientoicon.png";
import logoMultia from "../../img/actividadesicon.png";
import logoBbq from "../../img/barbacoaicon.png";
import logoComida from "../../img/comidaicon.png";
import logoPiscina from "../../img/piscinaicon.png";
import "../../styles/trips.scss";

export const TripCard = props => {
	const { store, actions } = useContext(Context);
	console.log(props, "props");
	const logos = {
		//creo un nuevo objeto cuyas keys coinciden con los valores del array que me devuelve props.trip.needs_trip, de modo que cuando hago un mapeo en linea 48 y coincide me devuelve el valor de la key del objeto que es la imagen
		sleep: logoAloj,
		eat: logoComida,
		bbq: logoBbq,
		adventure: logoMultia,
		relax: logoPiscina
	};
	return (
		<div className="col-md-4 col-sm-1">
			<div className="card h-100">
				<div className="avatar">
					<img src="..." className="rounded-circle" alt="..." />
					<h5 className="card-title">username</h5>
				</div>
				<div className="card-body">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className="row">
								Destino:
								<div className="props">{props.trip.destination}</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">
								Desde:
								<div className="props">{props.trip.first_day}</div>
								Hasta:
								<div className="props">{props.trip.last_day}</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">Descripción del viaje:</div>
							<div className="row">
								<div className="props description">{props.trip.description}</div>
							</div>
						</li>
						<li className="list-group-item blue">
							Nº ofertas recibidas:
							<div className="numero">5</div>
						</li>
					</ul>
				</div>
				<div className="card-footer">
					{props.trip.needs_trip.map((need, index) => {
						return <img src={logos[need]} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
};

TripCard.propTypes = {
	history: PropTypes.object,
	trip: PropTypes.object
};
