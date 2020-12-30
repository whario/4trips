import React, { useState, useEffect } from "react";
import "../../styles/SignUpPro.css";
///Componentes
import Navbar from "../Component/Navbar.js";
import Footer from "../Component/Footer.js";

const SignUpPro = () => {
	const [datos, setDatos] = useState({
		userName: "",
		email: "",
		password: "",
		repeatPassword: ""
	});
	const [submited, setSubmited] = useState(false);
	const [valied, setValied] = useState(false);
	const handleUserNameChange = e => {
		setDatos({
			...datos,
			userName: e.target.value
		});
	};
	const handleEmailChange = e => {
		setDatos({
			...datos,
			email: e.target.value
		});
	};
	const handlePasswordeChange = e => {
		setDatos({
			...datos,
			password: e.target.value
		});
	};
	const handleReapeatPasswordChange = e => {
		setDatos({
			...datos,
			repeatPassword: e.target.value
		});
	};
	const handleSubmit = event => {
		event.preventDefault();
		if (datos.userName && datos.email && datos.password && datos.repeatPassword) {
			setValied(true);
		}
		setSubmited(true);
	};

	return (
		<div>
			<Navbar />
			<form className="myForm m-5 offset-md-4 col-md-4.offset-md-4 " onSubmit={handleSubmit}>
				<div className="form-row ">
					{submited && valied ? <div className="alert alert-success" role="alert">
                    This is a success alert—check it out!
                    </div> : null}
					<div className="col-md-6 mb-3">
						<label value="validationServer01">First name</label>
						<input
							name="userName"
							value={datos.userName}
							type="text"
							className="form-control"
							id="validationServer01"
							onChange={handleUserNameChange}
						/>
						{submited && !datos.userName ? <span>Write your user name</span> : null}
						<label value="validationServer01">E-mail</label>
						<input
							onChange={handleEmailChange}
							name="email"
							placeholder="email"
							type="email"
							className="form-control"
							value={datos.email}
						/>
						{submited && !datos.email ? <span>Write your Email</span> : null}
						<label value="validationServer01">Password</label>
						<input
							name="password"
							placeholder="Password"
							type="password"
							className="form-control"
							value={datos.password}
							onChange={handlePasswordeChange}
						/>
						{submited && !datos.password ? <span>Write your Password</span> : null}
						<label value="validationServer01">Confirm password</label>
						<input
							name="repeatPassword"
							placeholder="Confirm password"
							type="password"
							className="form-control"
							value={datos.repeatPassword}
							onChange={handleReapeatPasswordChange}
						/>
						{submited && datos.repeatPassword != datos.password ? (
							<span>Password do not match! </span>
						) : null}
					</div>
				</div>
				<button className="btn btn-primary" type="submit" value="sign up">
					Register
				</button>
			</form>
			<Footer />
		</div>
	);
};
export default SignUpPro;
