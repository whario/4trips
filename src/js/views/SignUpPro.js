import React, { useState, useEffect } from "react";

const SignUpPro = () => {
	const [datos, setDatos] = useState({
		userName: "",
		email: "",
		password: "",
		repeatPassword: "",
		phoneNumber: "",
		url: "",
		direction: "",
		location: "",
		cif: "",
		razonSocial: ""
	});
	const handelChange = e => {
		setDatos({ ...datos, [e.target.name]: e.target.value });
	};
	const [submited, setSubmited] = useState(false);
	const [valied, setValied] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		if (datos.userName && datos.email && datos.password == datos.repeatPassword) {
			setValied(true);
		}
		setSubmited(true);
	};
	console.log(datos);
	return (
		<div>
			<form
				className="myForm m-5 offset-md-4 col-md-4.offset-md-4 "
				onChange={handelChange}
				onSubmit={handleSubmit}>
				<div className="form-row ">
					{submited && valied ? (
						<div className="alert alert-success" role="alert">
							This is a success alert—check it out!
						</div>
					) : null}
					<div className="col-md-6 mb-3">
						<label value="validationServer01">Nombre de usuario</label>
						<input
							name="userName"
							value={datos.userName}
							type="text"
							className="form-control"
							id="validationServer01"
							placeholder="Nombre de usuario"
						/>
						{submited && !datos.userName ? <span>Escribe su nombre de usuario por favor</span> : null}

						<label value="validationServer01">Corre electronico</label>
						<input
							name="email"
							placeholder="email"
							type="email"
							className="form-control"
							value={datos.email}
						/>
						{submited && !datos.email ? <span>Escribe su correo electronico por favor</span> : null}
						<label value="validationServer01">Contraseña</label>
						<input
							name="password"
							placeholder="Password"
							type="password"
							className="form-control"
							value={datos.password}
						/>
						{submited && !datos.password ? <span>Escribe su contraseña por favor</span> : null}

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

						<label value="validationServer01">Numero de telefono </label>
						<input
							name="phoneNumber"
							placeholder="numero de telefono"
							type="tel"
							className="form-control"
							value={datos.phoneNumber}
						/>
						{submited && !datos.phoneNumber ? <span>Escribe su numero de tefelono por favor </span> : null}

						<input
							name="url"
							placeholder="enlace de tu pagina web (si tienes)"
							type="text"
							className="form-control"
							value={datos.url}
						/>

						<input
							name="direction"
							placeholder="Direccion"
							type="text"
							className="form-control"
							value={datos.dierction}
						/>
						{submited && !datos.direction ? <span>Escribe su direccion por favor </span> : null}

						<input
							name="location"
							placeholder="Localidad"
							type="text"
							className="form-control"
							value={datos.location}
						/>
						{submited && !datos.location ? <span>Escribe su localidad por favor</span> : null}

						<input name="cif" placeholder="CIF" type="text" className="form-control" value={datos.cif} />
						{submited && datos.cif ? <span>Password do not match! </span> : null}

						<input
							name="razonSocial"
							placeholder="Razon social"
							type="text"
							className="form-control"
							value={datos.razonSocial}
						/>
						{submited && !datos.razonSocial ? <span>Password do not match! </span> : null}
					</div>
				</div>
				<button className="btn btn-primary" type="submit" value="sign up">
					Register
				</button>
			</form>
		</div>
	);
};
export default SignUpPro;
