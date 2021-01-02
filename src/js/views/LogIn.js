import React, { useState } from "react";
import "../../styles/Login.css";
import "bootstrap/dist/css/bootstrap.css";

export default function LogIn() {
	const onSubmit = data => console.log(data);

	return (
		<div className="container">
			<div className="navbar" />
			<div className="row">
				<div className="col-12 col-md-6 ">
					<form className="myFormLogIn">
						<input className="form-control" type="email" placeholder="Correo electronico" />
						<input className="form-control" type="password" placeholder="Contraseña" />
						<button className="btn btn-primary" type="submit">
							Iniciar sesión
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
