import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import logoAloj from "../../img/alojamientoicon.png";
import logoMultia from "../../img/actividadesicon.png";
import logoBbq from "../../img/barbacoaicon.png";
import logoComida from "../../img/comidaicon.png";
import logoPiscina from "../../img/piscinaicon.png";
import defaultAvatar from "../../img/default_avatar.png";
import "../../styles/trips.scss";
import { useEffect } from "react";

export const TripCard = props => {
	const { store, actions } = useContext(Context);
	const logos = {
		//creo un nuevo objeto cuyas keys coinciden con los valores del array que me devuelve props.trip.needs_trip, de modo que cuando hago un mapeo en linea 48 y coincide me devuelve el valor de la key del objeto que es la imagen
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
		<div className="col-md-4 col-sm-1 card-padding">
			<div className="card h-100 home-card">
				<div className="row">
					<div className="col-4">
						{props.trip.traveler != null && props.trip.traveler.avatar != null ? (
							<img src={props.trip.traveler.avatar} className="rounded-circle" />
						) : (
							<img src={defaultAvatar} className="rounded-circle" />
						)}
					</div>
					<div className="col-8">
						<h5 className="card-title-home">{props.trip.traveler.username}</h5>
					</div>
				</div>
				<div className="card-body p-0">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className="row">
								Destino:
								<div className="props destino">{props.trip.destination}</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">
								Desde:
								<div className="props day1">{formatDay(props.trip.first_day)}</div>
							</div>
							<div className="row">
								Hasta:
								<div className="props day2">{formatDay(props.trip.last_day)}</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="row">Descripción del viaje:</div>
							<div className="row">
								<Link to={"/trip/" + props.trip.id}>
									<div className="props description" onClick={() => actions.saveTrip(props.trip)}>
										{props.trip.description.substring(0, 27)}
										<p>...</p>
									</div>
								</Link>
								<Link to={"/trip/" + props.trip.id}>
									<div className="leermas" onClick={() => actions.saveTrip(props.trip)}>
										<span />
										<p>leer más</p>
									</div>
								</Link>
							</div>
						</li>
						<li className="list-group-item blue">
							Nº ofertas recibidas:
							<div className="numero">{props.trip.offers.length}</div>
						</li>
					</ul>
				</div>
				<div className="card-footer">
					{props.trip.needs_trip.map((need, index) => {
						console.log(need, "neeeeeeeed");
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
