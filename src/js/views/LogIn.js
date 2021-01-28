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

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (state.email && state.password != "") {
			setValidate(true);
		}
	};
	console.log(state.email);
	return (
		<div className="container">
			<div className="navbar" />
			<div className="row justify-content-center">
				<div className="col-12 col-md-6 ">
					<form className="myFormLogIn justify-content-center" onSubmit={handleSubmit}>
						<img className="logo4Trip" src={logo4Trips} />
						<h3 className="h3"> Inicia sesion</h3>
						<label className="label1"> Correo electronico</label>
						<input className="form-control  " type="email" placeholder="Correo electronico" name="email" />
						{state.email == "" && validate == false ? <span>ROJO</span> : null}
						<br />
						<label className="label2">Contraseña</label>
						<input className="form-control" type="password" placeholder="Contraseña" name="password" />
						<br />
						<button type="button" className="btn btn-primary btn-block">
							Iniciar sesion
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
