import React, { useState} from "react";
import "../../styles/SignUpPro.css";

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

	return (
		<div className="container myContainer">
			<div className="row  justify-content-center">
				<div className="col-sm-12 col-md-10 col-la-8 ">
					<form className="myForm m-5" onChange={handelChange} onSubmit={handleSubmit}>
						{submited && valied ? (
							<div className="alert alert-success" role="alert">
								This is a success alert—check it out!
							</div>
						) : null}
						<div className="row">
							<div className="col-12">
								<label value="validationServer01">Nombre de usuario</label>
								<input
									name="userName"
									value={datos.userName}
									type="text"
									className="form-control"
									id="validationServer01"
									placeholder="Nombre de usuario"
								/>
								{submited && !datos.userName ? (
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
									name="cif"
									placeholder="CIF"
									type="text"
									className="form-control"
									value={datos.cif}
								/>

								<label value="validationServer01">Razon social (opcional)</label>

								<input
									name="razonSocial"
									placeholder="Razon social"
									type="text"
									className="form-control"
									value={datos.razonSocial}
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
export default SignUpPro;