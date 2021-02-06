import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import logoAloj from "../../img/alojamientoicon.png";
import logoMultia from "../../img/actividadesicon.png";
import logoBbq from "../../img/barbacoaicon.png";
import logoComida from "../../img/comidaicon.png";
import logoPiscina from "../../img/piscinaicon.png";
import "../../styles/addTrip.scss";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export const AddTrip = props => {
	//usos porps para acceder a history y poder hacer el redireccionamiento
	const { store, actions } = useContext(Context);
	const [trip, setTrip] = useState({
		needs_trip: [],
		destination: "",
		first_day: "",
		last_day: "",
		description: ""
	});
	const [submited, setSubmited] = useState(false); //para evitar mandar formularios vacíos
	const [valied, setValied] = useState(true); //para mostrar mensajes de error en campos vacíos
	const [succesfull, setSuccesfull] = useState(true); //para mostrar mensaje de éxito al enviar

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
		if (
			trip.needs_trip.length != 0 &&
			trip.destination != "" &&
			trip.first_day != "" &&
			trip.last_day != "" &&
			trip.description != ""
		) {
			console.log("ejecutando submit");
			let div = document.querySelector("#loading");
			if (actions.addTrip(trip)) {
				setSubmited(true);
				setSuccesfull(true);
				div.classList.remove("oculto");
				div.classList.add("spinner-border");
				props.history.push("/");
			} else {
				setSuccesfull(false);
				div.classList.remove("oculto");
				div.classList.add("alert alert-danger");
			}
		} else {
			setSuccesfull(false);
			setSubmited(false);
			setValied(false);
		}
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="addTrip">
						<form onChange={handleChange} onSubmit={handleSubmit}>
							{succesfull == false ? (
								<div className="alert alert-danger" role="alert">
									<p className="P">El viaje no se ha podido publicar</p>
								</div>
							) : (
								""
							)}
							<div className="row">
								<p className="servicios">¿Qué servicio o servicios buscas?</p>
							</div>
							<div className="d-flex justify-content-center">
								<div className="form-check form-check-inline m-0">
									<img src={logoAloj} title="alojamiento" />
									<input
										defaultValue="sleep"
										type="checkbox"
										className="form-check-input"
										name="sleep"
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoComida} title="comer" />
									<input defaultValue="eat" type="checkbox" className="form-check-input" name="eat" />
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoBbq} title="jardín/barbacoa" />
									<input defaultValue="bbq" type="checkbox" className="form-check-input" name="bbq" />
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoMultia} title="multiaventura" />
									<input
										defaultValue="adventure"
										type="checkbox"
										className="form-check-input"
										name="adventure"
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoPiscina} title="piscina/jacuzzi" />
									<input
										defaultValue="relax"
										type="checkbox"
										className="form-check-input"
										name="relax"
									/>
									<label className="form-check-label" />
								</div>
							</div>
							<div className="form-group m-3">
								{valied == false && trip.needs_trip.length == 0 ? (
									<span className="error">Marca al menos una opción</span>
								) : null}
							</div>
							<div className="form-group m-3">
								<label>Destino/s</label>
								<input
									defaultValue={trip.destination}
									type="text"
									className="form-control"
									placeholder="Destino/s"
									name="destination"
								/>
								{valied == false && !trip.destination ? (
									<span className="error">Escribe al menos un destino</span>
								) : null}
							</div>
							<div className="form-group m-3">
								<label>Fecha de entrada</label>
								<input
									defaultValue={trip.first_day}
									type="date"
									className="form-control"
									placeholder="Fecha de entrada"
									name="first_day"
								/>
								{valied == false && !trip.first_day ? (
									<span className="error">Escribe una fecha de entrada</span>
								) : null}
							</div>
							<div className="form-group m-3">
								<label>Fecha de salida</label>
								<input
									defaultValue={trip.last_day}
									type="date"
									className="form-control"
									placeholder="Fecha de salida"
									name="last_day"
								/>
								{valied == false && !trip.last_day ? (
									<span className="error">Escribe una fecha de salida</span>
								) : null}
							</div>
							<div className="form-group m-3">
								<label>Descripción</label>
								<textarea
									defaultValue={trip.description}
									type="text"
									className="form-control"
									placeholder="Describe tu viaje. ¿Qué quieres hacer, cuántas personas...?"
									name="description"
								/>
								{valied == false && !trip.description ? (
									<span className="error">Escribe una descripción de lo que estás buscando</span>
								) : null}
							</div>
							<div className="row">
								<div className="obligatorios">Todos los campos son obligatorios</div>
							</div>
							<button type="submit" className="btn btn-primary center publicar">
								publicar viaje
								<span> </span>
								<div className="oculto" id="loading" />
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

AddTrip.propTypes = {
	history: PropTypes.object //empleo props history para hacrer el redireccionamiento a home tras añadir u trip
};
