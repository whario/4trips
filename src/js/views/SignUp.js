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
		avatar: ""
	});

	const [submited, setSubmited] = useState(false);

	const [valied, setValied] = useState(false);

	const [view, setView] = useState("");

	const handleChange = e => {
		if (e.target.name == "avatar") {
			// verficamos el nombre del input con el nombre "avatar"
			const reader = new FileReader(); // creamos una instancia new FileReader que nos permite leer archivos
			reader.onload = event => {
				// esta es la parte que lee el archivo
				console.log(reader.readyState);
				if (reader.readyState === 2) {
					// el estado que esta el archivo "2 el estado final que se ha leido el archivo por completo"
					console.log("target", e.target);
					setDatos({ ...datos, avatar: reader.result }); // seteamos en el estado el resultado que hemos tenido
				}
			};

			if (e.target.files[0] != undefined) {
				//verfeicamos que existe un elemento de tipo file
				console.log("targen unbdefin", e.target.files[0]);
				reader.readAsDataURL(e.target.files[0]); // inicio eel proceso para convertit en una url y pasamos el archivo orginal e.target.files[0]
			}
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
		//esto es para obtener la imagen en crudo y pasarla al back
		const file = document.querySelector("#file");
		actions.registeredTraveler(datos, props, file.files[0]);
	};
	console.log(datos);
	return (
		<div className="container ">
			<div className="row justify-content-center">
				<br />
				<div className="col-sm-12 col-md-10 col-la-8">
					<form className="myForm m-5 " onChange={handleChange} onSubmit={handleSubmit}>
						{submited && valied && datos.password == datos.repeatPassword ? (
							<div className="alert alert-success" role="alert">
								<p className="P">Registro completado con éxito</p>
							</div>
						) : null}
						<br />
						<div className="avatar-container-signup">
							{datos.avatar ? (
								<img className="avatar-traveler-signup" src={datos.avatar} />
							) : (
								<img
									src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
									className="avatar-traveler-signup"
								/>
							)}

							<div className="overlay"> sube una foto </div>
						</div>
						<input type="file" name="avatar" className="hidenButton" id="file" />
						<div className="row">
							<div className="col-sm-12 col-md-10 col-la-8 form">
								<label className="label" value="validationServer01">
									Nombre de usuario
								</label>
								<input
									name="username"
									placeholder="Nombre de usuario"
									value={datos.username}
									type="text"
									className="form-control"
									id="validationServer01"
								/>
								{submited && !datos.username ? (
									<span className="errormsg">Escoge un nombre de usuario</span>
								) : null}
								<br />

								<label className="label" value="validationServer01">
									Correo electronico
								</label>
								<input
									name="email"
									placeholder="Email"
									type="email"
									className="form-control"
									value={datos.email}
								/>
								{submited && !datos.email ? (
									<span className="errormsg">Introduce una dirección de correo electronico</span>
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
									<span className="errormsg">Intorduce una contraseña</span>
								) : null}
								<br />
								<label className="label" value="validationServer01">
									Repite tu contraseña
								</label>

								<input
									name="repeatPassword"
									placeholder="Repite tu contraseña"
									type="password"
									className="form-control"
									value={datos.repeatPassword}
								/>
								{submited && datos.repeatPassword != datos.password ? (
									<span className="errormsg">La contraseña no coincide</span>
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
