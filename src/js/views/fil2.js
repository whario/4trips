import React, { useState, useEffect } from "react";
import "../../styles/File2.css";

const File = () => {
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

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="offset-sm-2 col-sm-8 offset-sm-2  col-sm-6 col-md-3">
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
							<label value="validationServer01">Numero de telefono </label>
							<input
								name="phoneNumber"
								placeholder="numero de telefono"
								type="tel"
								className="form-control"
								value={datos.phoneNumber}
							/>
							{submited && !datos.phoneNumber ? (
								<span>Escribe su numero de tefelono por favor </span>
							) : null}
							<br />
							<label value="validationServer01">enlace de su pagina we (Si existe)</label>
							<input
								name="url"
								placeholder="enlace de tu pagina web (si tienes)"
								type="text"
								className="form-control"
								value={datos.url}
							/>
							<br />
							<label value="validationServer01">Direccion</label>
							<input
								name="direction"
								placeholder="Direccion"
								type="text"
								className="form-control"
								value={datos.dierction}
							/>
							{submited && !datos.direction ? <span>Escribe su direccion por favor </span> : null}
							<label value="validationServer01">Localidad</label>
							<input
								name="location"
								placeholder="Localidad"
								type="text"
								className="form-control"
								value={datos.location}
							/>
							{submited && !datos.location ? <span>Escribe su localidad por favor</span> : null}
							<label value="validationServer01">CIF de empresa (opcional)</label>
							<input
								name="cif"
								placeholder="CIF"
								type="text"
								className="form-control"
								value={datos.cif}
							/>
							{submited && datos.cif ? <span>Password do not match! </span> : null}
							<label value="validationServer01">Razon social (opcional)</label>
							<input
								name="razonSocial"
								placeholder="Razon social"
								type="text"
								className="form-control"
								value={datos.razonSocial}
							/>
							{submited && !datos.razonSocial ? <span>Password do not match! </span> : null}

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
export default File;
