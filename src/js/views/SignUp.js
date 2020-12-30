import React, { useState, useEffect } from "react";
import "../../styles/SignUp.css";
import bootstrap from "react-bootstrap";
///Componentes

const SignUp = () => {
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
	};

	return (
		<div className="cont">
			<form
				className="myForm m-5 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-lg-3 offset-xl-3 col-xl-6 offset-xl-3"
				onChange={handelChange}
				onSubmit={handleSubmit}>
				<div className="form    ">
					{submited && valied && datos.password == datos.repeatPassword ? (
						<div className="alert alert-success" role="alert">
							This is a success alert—check it out!
						</div>
					) : null}
					<br />
					<div className="col-md-6 mb-3">
						<label value="validationServer01">Nomber de usuario</label>
						<input
							name="userName"
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
							placeholder="email"
							type="email"
							className="form-control"
							value={datos.email}
						/>
						{submited && !datos.email ? <span>Escribe su correo electronico por favor</span> : null}
						<br />
						<label value="validationServer01">Password</label>
						<input
							name="password"
							placeholder="Password"
							type="password"
							className="form-control"
							value={datos.password}
						/>
						{submited && !datos.password ? <span>Escribe su contraseña por favor</span> : null}
						<br />
						<label value="validationServer01">Confirmacion de contraseña</label>
						<input
							name="repeatPassword"
							placeholder="Confirm password"
							type="password"
							className="form-control"
							value={datos.repeatPassword}
						/>
						{submited && datos.repeatPassword != datos.password ? (
							<span>Confirma su contraseña bien porfavor </span>
						) : null}
						<br />
					</div>
				</div>
				<button className="btn btn-primary" type="submit" value="sign up">
					Register
				</button>
			</form>
		</div>
	);
};
export default SignUp;
