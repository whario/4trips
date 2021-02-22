import React, { useState, useContext, useEffect } from "react";
import "../../styles/Login.css";
import logo4Trips from "../../img/logo_4Trips.png";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Error from "../Component/Error.jsx";

export default function LogIn(props) {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		email: "",
		password: ""
	});

	const [loading, setLoading] = useState(false);
	useEffect(
		// hago que se cambie ejecuta el useEffect solamente cuando se hace un cambio en en state.email.length
		() => {
			setLoading(false);
		},
		[state.email.length, state.password.length]
	);

	const [error, setError] = useState({
		email: "",
		password: ""
	});
	const [errFetch, setErrFetch] = useState({
		// aqui esta vinculado con el fetch del backend para si hay algun erro o el usuario no existe mandar un mensaje en el front
		status: false,
		msg: ""
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
		setErrFetch({
			status: false,
			msg: ""
		});
		if (state.email == "" || state.password == "") {
			setError({ ...error, email: "Introduce tu email", password: "Introduce tu contraseña" });
			setLoading(true);
		} else {
			actions.login(state, setErrFetch, props.history);
			setLoading(false);
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
						<label className="label1"> Correo</label>
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
						{loading == true ? (
							<button type="button" className="btn btn-lg btn-primary btn-login" disabled>
								Iniciar sesion
							</button>
						) : (
							<button type="submit" className="btn btn-primary btn-block btn-login">
								Iniciar sesion
							</button>
						)}

						{loading == true ? (
							<div className="spinner-grow text-primary spiner" role="status">
								<span className="sr-only" />
							</div>
						) : null}
						{errFetch.status ? <Error msg={errFetch.msg} /> : null}
					</form>
				</div>
			</div>
		</div>
	);
}

LogIn.propTypes = {
	history: PropTypes.object
};
