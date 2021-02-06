import React, { useState } from "react";
import "../../styles/Login.css";
import logo4Trips from "../../img/logo_4Trips.png";
import "bootstrap/dist/css/bootstrap.css";

export default function LogIn() {
	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const [validate, setValidate] = useState(false);

	const [error, setError] = useState({
		email: "",
		password: ""
	});

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
		if (state.email != "") {
			setError({ ...error, email: "" });
		} else if (state.password != "") {
			setError({ ...error, password: "" });
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(state.email, "state.email");
		if (state.email == "" && state.password == "") {
			setError({ ...error, email: "por favor agrega su correo", password: "agrega su contraseña " });
		}
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6 ">
					<form
						className="myFormLogIn justify-content-center"
						onSubmit={handleSubmit}
						onChange={handleChange}>
						<img className="logo4Trip" src={logo4Trips} />
						<h3 className="h3"> Inicia sesion</h3>
						<label className="label1"> Correo electronico</label>
						<input className="form-control  " type="email" placeholder="Correo electronico" name="email" />
						{error.email != "" ? <span className="msg-error-login"> {error.email} </span> : null}
						<br />
						<label className="label2">Contraseña</label>
						<input className="form-control" type="password" placeholder="Contraseña" name="password" />
						{error.password != "" ? <span className="msg-error-login"> {error.password} </span> : null}
						<br />
						<button type="submit" className="btn btn-primary btn-block btn-login">
							Iniciar sesion
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
