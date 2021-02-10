import React, { useState, useContext } from "react";
import "../../styles/Login.css";
import logo4Trips from "../../img/logo_4Trips.png";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export default function LogIn(props) {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const [validate, setValidate] = useState(false);

	const [error, setError] = useState({
		email: "",
		password: ""
	});

	const handelChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
		if (state.email != "") {
			setError({ ...error, email: "" });
		} else if (state.password != "") {
			setError({ ...error, password: "" });
		}
	};

	const handelSubmit = event => {
		event.preventDefault();
		let div = document.querySelector("#loading");
		console.log(state.email, "state.email");
		if (state.email == "" && state.password == "") {
			setError({ ...error, email: "Introduce tu email", password: "Introduce tu contraseña" });
		} else {
			actions.login(state);
			div.classList.remove("oculto");
			div.classList.add("spinner-border");
			props.history.push("/");
		}
	};

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-12 col-md-6 ">
					<form
						className="myFormLogIn justify-content-center"
						onSubmit={handelSubmit}
						onChange={handelChange}>
						<h3 className="title"> Inicia sesion</h3>
						<label className="label1"> Email</label>
						<input className="form-control  " type="email" placeholder="Email" name="email" />
						{error.email != "" ? <span className="msg-error-login"> {error.email} </span> : null}
						<br />
						<label className="label2">Contraseña</label>
						<input className="form-control" type="password" placeholder="Contraseña" name="password" />
						{error.password != "" ? <span className="msg-error-login"> {error.password} </span> : null}
						<br />
						<div className="container">
							<div className="row justify-content-center">
								<div className="newaccount">
									<p>
										No tienes cuenta. Crea gratis una <Link to="/elige/tipo/deusuario">aquí</Link>
									</p>
								</div>
							</div>
						</div>
						<button type="submit" className="btn btn-primary btn-block btn-login">
							Iniciar sesion
							<span />
							<div className="oculto" id="loading" />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

LogIn.propTypes = {
	history: PropTypes.object
};
