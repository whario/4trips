import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/SignUp.css";
import bootstrap from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
///Componentes

const SignUp = () => {
	const [store, actions] = useContext(Context);
	const [datos, setDatos] = useState({
		userName: "",
		email: "",
		password: "",
		repeatPassword: ""
	});

	const [submited, setSubmited] = useState(false);

	const [valied, setValied] = useState(false);

	const handelChange = e => {
		setDatos({ ...datos, [e.target.name]: e.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (datos.userName && datos.email && datos.password == datos.repeatPassword) {
			setValied(true);
		}
		setSubmited(true);
		actions.regisetred(datos);
	};
	console.log(datos);
	return (
		<div className="container-fluid">
			<div className=" justify-content-center">
				<div className="offset-sm-2 col-sm-8 offset-sm-2 col-sm-6 col-md-6">
					<form
						className="form-container myForm justify-content-center"
						onChange={handelChange}
						onSubmit={handleSubmit}>
						{submited && valied && datos.password == datos.repeatPassword ? (
							<div className="alert alert-success" role="alert">
								<p className="P">Registrado con éxito</p>
							</div>
						) : null}
						<br />
						<div className="ml-2 form-group">
							<label value="validationServer01">Nomber de usuario</label>
							<input
								name="userName"
								placeholder="Usuario"
								value={datos.userName}
								type="text"
								className="form-control"
								id="validationServer01"
							/>
							{submited && !datos.userName ? <span>Escribe su nombre de usuario por favor</span> : null}
							<br />

							<label value="validationServer01">Correo electronico</label>
							<input
								name="email"
								placeholder="Correo electronico"
								type="email"
								className="form-control"
								value={datos.email}
							/>
							{submited && !datos.email ? <span>Escribe su correo electronico por favor</span> : null}
							<br />
							<label value="validationServer01">Contraseña</label>

							<input
								name="password"
								placeholder="Contraseña"
								type="password"
								className="form-control"
								value={datos.password}
							/>
							{submited && !datos.password ? <span>Escribe su contraseña por favor</span> : null}
							<br />
							<label value="validationServer01">Confirmacion de contraseña</label>

							<input
								name="repeatPassword"
								placeholder="Repite contraseña"
								type="password"
								className="form-control"
								value={datos.repeatPassword}
							/>
							{submited && datos.repeatPassword != datos.password ? (
								<span>Confirma su contraseña bien porfavor </span>
							) : null}
							<br />

							<button className="btn btn-primary btn-block" type="submit" value="sign up">
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default SignUp;
