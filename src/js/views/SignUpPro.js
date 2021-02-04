import React, { useState, useContext } from "react";
import "../../styles/SignUpPro.css";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const SignUpPro = props => {
	const { store, actions } = useContext(Context);

	const [datos, setDatos] = useState({
		user_name: "",
		email: "",
		password: "",
		repeatPassword: "",
		phone: "",
		url: "",
		direction: "",
		location: "",
		vat_number: "",
		social_reason: ""
	});
	const handleChange = e => {
		console.log("handels=ch");
		if (e.target.name == "img") {
			console.log("entrando img");
			const reader = new FileReader();
			reader.onload = event => {
				console.log(reader.readyState);
				if (reader.readyState === 2) {
					console.log(reader.result);
					setDatos({ ...datos, img: reader.result });
				}
			};
			if (e.target.files[0] != undefined) {
				reader.readAsDataURL(e.target.files[0]);
			}
			console.log(e.target.files[0]);
		} else {
			setDatos({ ...datos, [e.target.name]: e.target.value });
		}
	};
	const [submited, setSubmited] = useState(false);
	const [valied, setValied] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		if (datos.user_name && datos.email && datos.password == datos.repeatPassword) {
			setValied(true);
			actions.registered(datos, props);
		}
		setSubmited(true);
	};

	return (
		<div className="container myContainer">
			<div className="row  justify-content-center">
				<div className="col-sm-12 col-md-10 col-la-8 ">
					<form className="myForm m-5" onChange={handleChange} onSubmit={handleSubmit}>
						{submited && valied ? (
							<div className="alert alert-success" role="alert">
								This is a success alert—check it out!
							</div>
						) : null}
						<div className="avatar-container">
							{datos.img ? (
								<img className="avatar" src={datos.img} />
							) : (
								<img
									src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
									className="avatar"
								/>
							)}

							<div className="overlay"> sube una foto </div>
						</div>
						<input type="file" name="img" className="hidenButton" />
						<div className="row">
							<div className="col-12">
								<label value="validationServer01">Nombre de usuario</label>
								<input
									name="user_name"
									value={datos.user_name}
									type="text"
									className="form-control"
									id="validationServer01"
									placeholder="Nombre de usuario"
								/>
								{submited && !datos.user_name ? (
									<span>Escribe su nombre de usuario por favor</span>
								) : null}
								<br />
								<label value="validationServer01">Corre electronico</label>
								<input
									name="email"
									placeholder="email"
									type="email"
									className="form-control"
									value={datos.email}
								/>
								{submited && !datos.email ? <span>Escribe su correo electronico por favor</span> : null}
								<br />
								<label value="validationServer01">Contraseña</label>
								<input
									name="password"
									placeholder="Password"
									type="password"
									className="form-control"
									value={datos.password}
								/>
								{submited && !datos.password ? <span>Escribe su contraseña por favor</span> : null}
								<br />
								<label value="validationServer01">Confirma su contraseña </label>
								<input
									name="repeatPassword"
									placeholder="Confirm password"
									type="password"
									className="form-control"
									value={datos.repeatPassword}
								/>
								{submited && datos.repeatPassword != datos.password ? (
									<span>Confirma su contraseña bien por favor </span>
								) : null}
								<br />
								<label value="validationServer01">Numero de telefono </label>
								<input
									name="phone"
									placeholder="numero de telefono"
									type="tel"
									className="form-control"
									value={datos.phone}
								/>
								{submited && !datos.phone ? (
									<span>Escribe su numero de tefelono por favor </span>
								) : null}
								<br />
								<label value="validationServer01">URL de su pagina web (Si existe) </label>
								<input
									name="url"
									placeholder="https://..."
									type="text"
									className="form-control"
									value={datos.url}
								/>
								<br />
								<label value="validationServer01">Su direccion </label>
								<input
									name="direction"
									placeholder="Direccion"
									type="text"
									className="form-control"
									value={datos.dierction}
								/>
								{submited && !datos.direction ? <span>Escribe su direccion por favor </span> : null}
								<br />
								<label value="validationServer01">Su localidad </label>
								<input
									name="location"
									placeholder="Localidad"
									type="text"
									className="form-control"
									value={datos.location}
								/>
								{submited && !datos.location ? <span>Escribe su localidad por favor</span> : null}
								<br />
								<label value="validationServer01">CIF de empresa (opcional)</label>
								<input
									name="vat_number"
									placeholder="vat_number"
									type="text"
									className="form-control"
									value={datos.vat_number}
								/>

								<label value="validationServer01">Razon social (opcional)</label>

								<input
									name="social_reason"
									placeholder="Razon social"
									type="text"
									className="form-control"
									value={datos.social_reason}
								/>
							</div>
						</div>
						<br />
						<button className="btn btn-primary btn-block " type="submit" value="sign up">
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
SignUpPro.propTypes = {
	history: PropTypes.object
};

export default SignUpPro;
