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
										defaultValue="sleep"
										type="checkbox"
										value={store.detailTrip.needs_trip[0]}
										className="form-check-input"
										name="sleep"
										onChange={handelChange}
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoComida} title="comer" />
									<input
										defaultValue="eat"
										type="checkbox"
										value={store.detailTrip.needs_trip[1]}
										className="form-check-input"
										name="eat"
										onChange={handelChange}
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoBbq} title="jardín/barbacoa" />
									<input
										defaultValue="bbq"
										type="checkbox"
										value={store.detailTrip.needs_trip[2]}
										className="form-check-input"
										name="bbq"
										onChange={handelChange}
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoMultia} title="multiaventura" />
									<input
										defaultValue="adventure"
										type="checkbox"
										value={store.detailTrip.needs_trip[3]}
										className="form-check-input"
										name="adventure"
										onChange={handelChange}
									/>
									<label className="form-check-label" />
								</div>
								<div className="form-check form-check-inline m-0">
									<img src={logoPiscina} title="piscina/jacuzzi" />
									<input
										defaultValue="relax"
										type="checkbox"
										value={store.detailTrip.needs_trip[4]}
										className="form-check-input"
										name="relax"
										onChange={handelChange}
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
									value={store.detailTrip.destination}
									onChange={handelChange}
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
									value={store.detailTrip.first_day}
									onChange={handelChange}
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
									value={store.detailTrip.last_day}
									onChange={handelChange}
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
									value={store.detailTrip.description}
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
