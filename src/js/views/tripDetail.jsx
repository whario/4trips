import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { checkPropTypes } from "prop-types";
import logoAloj from "../../img/alojamientoicon.png";
import logoMultia from "../../img/actividadesicon.png";
import logoBbq from "../../img/barbacoaicon.png";
import logoComida from "../../img/comidaicon.png";
import logoPiscina from "../../img/piscinaicon.png";
import "../../styles/trips.scss";
import { AddOffer } from "../Component/AddOffer.jsx";
import { OfferCard } from "../Component/OfferCard.jsx";
import PropTypes from "prop-types";

export const TripDetail = props => {
	const { store, actions } = useContext(Context);
	const [showOffers, setShowOffers] = useState(false);
	const logos = {
		sleep: logoAloj,
		eat: logoComida,
		bbq: logoBbq,
		adventure: logoMultia,
		relax: logoPiscina
	};
	console.log(store.detailTrip, "DETAIIIIL TRIP");
	useEffect(
		() => {
			console.log(Object.entries(store.detailTrip).length === 0);
			if (Object.entries(store.detailTrip).length === 0) {
				actions.getTrip();
			} else {
				actions.saveTrip(store.detailTrip);
			}
		},
		[store.detailTrip]
	);
	if (Object.entries(store.detailTrip).length === 0) {
		actions.getTrip();
	}

	const formatDay = day => {
		let newFormatDay = new Date(day);
		return newFormatDay.getDate() + "/" + (newFormatDay.getMonth() + 1) + "/" + newFormatDay.getUTCFullYear();
	};

	console.log(store.detailTrip);

	//Para sacar button edicion viajes
	const [button, setButton] = useState({
		id_traveler: "",
		status: false
	});
	useEffect(() => {
		setButton({ id_traveler: localStorage.getItem("id") });
		console.log(setButton.id_traveler, "id traveler en localStorage");
	}, []);

	const [sendOffer, setSendOffer] = useState({
		user_rol: "",
		status: false
	});

	useEffect(() => {
		setSendOffer({ user_rol: localStorage.getItem("rol") });
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-8 offset-lg-2 col-md-6 offset-md-3">
					<div className="espaciador" />
					<div className="card">
						{store.detailTrip.id_traveler == button.id_traveler ? (
							<Link to="/editTrip">
								<i className="fas fa-pencil-alt edit-icon" />
							</Link>
						) : null}
						<div className="card-header row bg-white">
							<div className="col-4">
								<img src={store.detailTrip.traveler.avatar} className="rounded-circle big" />
							</div>
							<div className="col-8">
								<h5 className="card-title">{store.detailTrip.traveler.username}</h5>
							</div>
						</div>
						<div className="card-body p-0">
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
									<div
										className="numero"
										onClick={() => {
											setShowOffers(!showOffers);
										}}>
										{store.detailTrip.offers.length}
									</div>
								</li>
							</ul>
						</div>
						<div className="card-footer">
							{store.detailTrip.needs_trip.map((need, index) => {
								return <img src={logos[need]} key={index} />;
							})}
						</div>
					</div>
					{sendOffer.user_rol == "Profesional" ||
					(store.detailTrip.rol == "Traveler" && store.detailTrip.id_traveler == button.id_traveler) ? (
						<AddOffer id_trip={store.detailTrip.id} />
					) : null}
					{showOffers && store.detailTrip.offers.length > 0
						? store.detailTrip.offers.map((offer, index) => {
								return <OfferCard offer={offer} key={index} />;
						  })
						: null}
				</div>
			</div>
		</div>
	); //id_trip es la propiedad y detailTrip.id es el valor de esa propiedad que paso a AddOffer(por props) Al componente Offers paso offers que está almacenado en el store
};

TripDetail.propTypes = {
	history: PropTypes.object
};
