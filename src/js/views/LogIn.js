import React, { useState } from "react";
import "../../styles/Login.css";
import "bootstrap/dist/css/bootstrap.css";

export default function LogIn() {
	return (
		<div className="container">
			<div className="navbar" />
			<div className="row justify-content-center">
				<div className="col-12 col-md-6 ">
					<form className="myFormLogIn">
						<h3 className="h3"> Inicia sesion</h3>
						<label className="label1"> Correo electronico</label>
						<input className="form-control mt-5 " type="email" placeholder="Correo electronico" />
						<br />
						<label className="label2">Contraseña</label>
						<input className="form-control" type="password" placeholder="Contraseña" />
						<br />
						<button type="button" className="btn btn-primary">
							Iniciar sesion
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
