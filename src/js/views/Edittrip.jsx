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

export const EditTrip = () => {
	const { store, actions } = useContext(Context);
	const handelChange = e => {
		actions.editTrip(e.target.name, e.target.value);
	};
	const [submited, setSubmited] = useState(false); //para evitar mandar formularios vacíos
	const [valied, setValied] = useState(true); //para mostrar mensajes de error en campos vacíos
	const [succesfull, setSuccesfull] = useState(true); //para mostrar mensaje de éxito al enviar
	console.log(store.detailTrip, "DETAIL TRIP");
	const formatDay = day => {
		let newFormatDay = new Date(day);
		return (
			newFormatDay.getUTCFullYear() + "-" + ("0" + (newFormatDay.getMonth() + 1)) + "-" + newFormatDay.getDate()
		);
	};
	console.log(formatDay(store.detailTrip.last_day));
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="addTrip">
						<form onChange={handelChange}>
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
										defaultValue={store.detailTrip.needs_trip[0]}
										type="checkbox"
										className="form-check-input"
										name="sleep"
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoComida} title="comer" />
									<input
										defaultValue={store.detailTrip.needs_trip[1]}
										type="checkbox"
										value={store.detailTrip.needs_trip[1]}
										className="form-check-input"
										name="eat"
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoBbq} title="jardín/barbacoa" />
									<input
										defaultValue={store.detailTrip.needs_trip[2]}
										type="checkbox"
										className="form-check-input"
										name="bbq"
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoMultia} title="multiaventura" />
									<input
										defaultValue={store.detailTrip.needs_trip[3]}
										type="checkbox"
										className="form-check-input"
										name="adventure"
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoPiscina} title="piscina/jacuzzi" />
									<input
										defaultValue={store.detailTrip.needs_trip[4]}
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
									defaultValue={store.detailTrip.destination}
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
									defaultValue={formatDay(store.detailTrip.last_day)}
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
									defaultValue={formatDay(store.detailTrip.last_day)}
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
									type="text"
									className="form-control"
									placeholder="Describe tu viaje. ¿Qué quieres hacer, cuántas personas...?"
									name="description"
									defaultValue={store.detailTrip.description}
									onChange={handelChange}
								/>
								{valied == false && !trip.description ? (
									<span className="error">Escribe una descripción de lo que estás buscando</span>
								) : null}
							</div>
							<div className="row">
								<div className="obligatorios">Todos los campos son obligatorios</div>
							</div>
							<button type="submit" className="btn btn-primary center publicar">
								guardar
								<span> </span>
								<div className="oculto" id="loading" />
							</button>
							<button type="submit" className="btn btn-primary publicar">
								cerrar
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

EditTrip.propTypes = {
	history: PropTypes.object //empleo props history para hacrer el redireccionamiento a home tras añadir u trip
};
