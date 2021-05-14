import React, { useState, useContext, useEffect } from "react";
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
	const [triptoEdit, setEdit] = useState({});
	useEffect(() => {
		setEdit({ ...triptoEdit, needs_trip: store.detailTrip.needs_trip, id: store.detailTrip.id });
	}, []);
	const handelChange = e => {
		let name = e.target.name;
		if (name == "sleep" || name == "bbq" || name == "relax" || name == "adventure" || name == "eat") {
			let isFound = false;
			let array_needs = [...triptoEdit.needs_trip];
			for (let index = 0; index <= array_needs.length - 1; index++) {
				if (array_needs[index] == e.target.value) {
					array_needs.splice(index, 1);
					setEdit({ ...triptoEdit, needs_trip: array_needs });
					isFound = true;
					break;
				}
			}
			if (!isFound) {
				array_needs.push(e.target.value);
				setEdit({ ...triptoEdit, needs_trip: array_needs });
			}
		} else {
			setEdit({ ...triptoEdit, [e.target.name]: e.target.value });
		}
	};
	console.log(triptoEdit, "triptoEdit");
	const [submited, setSubmited] = useState(false); //para evitar mandar formularios vacíos
	const [valied, setValied] = useState(true); //para mostrar mensajes de error en campos vacíos
	const [succesfull, setSuccesfull] = useState(true); //para mostrar mensaje de éxito al enviar
	const formatDay = day => {
		let newFormatDay = new Date(day);
		return (
			newFormatDay.getUTCFullYear() + "-" + ("0" + (newFormatDay.getMonth() + 1)) + "-" + newFormatDay.getDate()
		);
	};
	const needs_list = [
		{ name: "sleep", checked: false },
		{ name: "eat", checked: false },
		{ name: "bbq", checked: false },
		{ name: "adventure", checked: false },
		{ name: "relax", checked: false }
	];
	const logos = {
		eat: logoComida,
		sleep: logoAloj,
		bbq: logoBbq,
		adventure: logoMultia,
		relax: logoPiscina
	};
	const checking_needs = () => {
		store.detailTrip.needs_trip.map(need => {
			needs_list.map(item => {
				if (need == item.name) {
					item.checked = true;
				}
			});
		});
		return print_needs_trip();
	};
	const print_needs_trip = () => {
		return needs_list.map((needs, index) => {
			return (
				<div className="form-check form-check-inline m-0" key={index}>
					<img src={logos[needs.name]} title="comer" />
					<input
						type="checkbox"
						value={needs.name}
						className="form-check-input"
						name={needs.name}
						defaultChecked={needs.checked}
					/>
					<label className="form-check-label" />
				</div>
			);
		});
	};
	const handelSubmit = e => {
		console.log("estoy en subimt edit");

		e.preventDefault();
		actions.editTrip(triptoEdit);
	};
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="addTrip">
						<form onChange={handelChange} onSubmit={e => handelSubmit(e)}>
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
							<div className="d-flex justify-content-center">{checking_needs()}</div>
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
							<div className="row buttons-save-canc ">
								<button to="/" type="submit" className="btn btn-primary center publicar col-md-4">
									guardar
									<span> </span>
									<div className="oculto" id="loading" />
								</button>
								<Link to="/" type="submit" className="btn btn-primary center cerrar col-md-4 ">
									cerrar
									<span> </span>
									<div className="oculto" id="loading" />
								</Link>
							</div>
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
