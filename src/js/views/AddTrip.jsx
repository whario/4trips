import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import logoAloj from "../../img/alojamientoicon.png";
import logoMultia from "../../img/actividadesicon.png";
import logoBbq from "../../img/barbacoaicon.png";
import logoComida from "../../img/comidaicon.png";
import logoPiscina from "../../img/piscinaicon.png";
import "../../styles/addTrip.scss";

export const AddTrip = () => {
	const { store, actions } = useContext(Context);
	const [trip, setTrip] = useState({
		needs_trip: [],
		destination: "",
		first_day: "",
		last_day: "",
		description: ""
	});
	const [submited, setSubmited] = useState(false); //para los campos obligatorios y mensajes de error

	const needs = () => {
		//uso esta función para añadir o borrar elementos del array needs_trip
		if (trip.needs_trip.length == 0) {
			setTrip({ ...trip, needs_trip: [...trip.needs_trip, event.target.value] });
		} else {
			for (let i = 0; i < trip.needs_trip.length; i++) {
				if (event.target.value != trip.needs_trip[i]) {
					setTrip({ ...trip, needs_trip: [...trip.needs_trip, event.target.value] });
				} else {
					let newNeeds = [...trip.needs_trip];
					newNeeds.splice(i, 1);
					setTrip({ ...trip, needs_trip: newNeeds });
				}
			}
		}
	};

	const handleChange = event => {
		let name = event.target.name;
		if (name == "sleep" || name == "eat" || name == "bbq" || name == "adventure" || name == "relax") {
			needs(); //aquí llamo a la función que me permite añadir o quitar valores de needs_trip
		} else {
			setTrip({ ...trip, [event.target.name]: event.target.value });
		}
		console.log(event.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		console.log("ejecutando submit");
		actions.addTrip(trip);
		setSubmited(true);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="addTrip">
						<form onChange={handleChange} onSubmit={handleSubmit}>
							<div className="row">
								<p className="servicios">¿Qué servicio o servicios buscas?</p>
							</div>
							<div className="d-flex justify-content-center">
								<div className="form-check form-check-inline m-0">
									<img src={logoAloj} title="alojamiento" />
									<input value="sleep" type="checkbox" className="form-check-input" name="sleep" />
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoComida} title="comer" />
									<input value="eat" type="checkbox" className="form-check-input" name="eat" />
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoBbq} title="jardín/barbacoa" />
									<input value="bbq" type="checkbox" className="form-check-input" name="bbq" />
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoMultia} title="multiaventura" />
									<input
										value="adventure"
										type="checkbox"
										className="form-check-input"
										name="adventure"
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoPiscina} title="piscina/jacuzzi" />
									<input value="relax" type="checkbox" className="form-check-input" name="relax" />
									<label className="form-check-label" />
								</div>
							</div>
							{submited && trip.needs_trip.length == 0 ? (
								<span>Marca al menos una opción por favor</span>
							) : null}
							<div className="form-group m-3">
								<label>Destino/s</label>
								<input
									value={trip.destination}
									type="text"
									className="form-control"
									placeholder="Destino/s"
									name="destination"
								/>
								{submited && !trip.destination ? <span>Escribe un destino por favor</span> : null}
							</div>
							<div className="form-group m-3">
								<label>Fecha de entrada</label>
								<input
									value={trip.first_day}
									type="date"
									className="form-control"
									placeholder="Fecha de entrada"
									name="first_day"
								/>
								{submited && !trip.first_day ? (
									<span>Escribe una decha de entrada por favor</span>
								) : null}
							</div>
							<div className="form-group m-3">
								<label>Fecha de salida</label>
								<input
									value={trip.last_day}
									type="date"
									className="form-control"
									placeholder="Fecha de salida"
									name="last_day"
								/>
								{submited && !trip.last_day ? <span>Escribe una fecha de salida por favor</span> : null}
							</div>
							<div className="form-group m-3">
								<label>Descripción</label>
								<textarea
									value={trip.description}
									type="text"
									className="form-control"
									placeholder="Describe tu viaje. ¿Qué quieres hacer, cuántas personas...?"
									name="description"
								/>
								{submited && !trip.description ? (
									<span>Escribe una descripción de lo que estás buscando por favor</span>
								) : null}
							</div>
							<div className="row">
								<p className="obligatorios">Todos los campos son obligatorios</p>
							</div>
							<button type="submit" className="btn btn-primary center">
								publicar viaje
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
