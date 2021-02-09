import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/SignUp.css";
import bootstrap from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
///Componentes

const SignUp = props => {
	const { store, actions } = useContext(Context);
	const [datos, setDatos] = useState({
		username: "",
		email: "",
		password: "",
		repeatPassword: "",
		img: "",
		avatar: ""
	});

	const [submited, setSubmited] = useState(false);

	const [valied, setValied] = useState(false);

	const [view, setView] = useState("");

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
				setDatos({ ...datos, avatar: e.target.files[0] });
			}
			console.log(e.target.files[0]);
		} else {
			setDatos({ ...datos, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (datos.username && datos.email && datos.password == datos.repeatPassword) {
			setValied(true);
		}
		setSubmited(true);
		actions.registeredTraveler(datos, props);
	};
	//const input = document.getElementById('file');
	console.log(datos);
	return (
		<div className="container ">
			<div className="row justify-content-center">
				<br />
				<div className="col-sm-12 col-md-10 col-la-8">
					<form className="myForm m-5 " onChange={handleChange} onSubmit={handleSubmit}>
						{submited && valied && datos.password == datos.repeatPassword ? (
							<div className="alert alert-success" role="alert">
								<p className="P">Registrado con éxito</p>
							</div>
						) : null}
						<br />
						<div className="avatar-container">
							{datos.img ? (
								<img className="avatar-traveler" src={datos.img} />
							) : (
								<img
									src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
									className="avatar"
								/>
							)}

							<div className="overlay"> sube una foto </div>
						</div>
						<input type="file" name="img" className="hidenButton" id="file" />
						<div className="row">
							<div className="col-sm-12 col-md-10 col-la-8 form">
								<label className="label" value="validationServer01">
									Nomber de usuario
								</label>
								<input
									name="username"
									placeholder="Usuario"
									value={datos.username}
									type="text"
									className="form-control"
									id="validationServer01"
								/>
								{submited && !datos.username ? (
									<span className="errormsg">Escribe su nombre de usuario por favor</span>
								) : null}
								<br />

								<label className="label" value="validationServer01">
									Correo electronico
								</label>
								<input
									name="email"
									placeholder="Correo electronico"
									type="email"
									className="form-control"
									value={datos.email}
								/>
								{submited && !datos.email ? (
									<span className="errormsg">Escribe su correo electronico por favor</span>
								) : null}
								<br />
								<label className="label" value="validationServer01">
									Contraseña
								</label>

								<input
									name="password"
									placeholder="Contraseña"
									type="password"
									className="form-control"
									value={datos.password}
								/>
								{submited && !datos.password ? (
									<span className="errormsg">Escribe su contraseña por favor</span>
								) : null}
								<br />
								<label className="label" value="validationServer01">
									Confirmacion de contraseña
								</label>

								<input
									name="repeatPassword"
									placeholder="Repite contraseña"
									type="password"
									className="form-control"
									value={datos.repeatPassword}
								/>
								{submited && datos.repeatPassword != datos.password ? (
									<span className="errormsg">Confirma su contraseña bien porfavor </span>
								) : null}
							</div>
						</div>
						<br />
						<button className="btn btn-primary btn-regiter-traveler " type="submit" value="sign up">
							Registrar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default SignUp;
