import React from "react";
import "../../styles/Login.css";
import "bootstrap/dist/css/bootstrap.css";

const LogIn = () => {
	const userLogIn = {
		password: "",
		email: ""
	};
	let isvalidet = false;
	return (
		<div className=" container">
			<div className="navbar" />
			<div className="logInCircle row">
				<h1 className="col-sm col-md col-lg	col-xl myCol">Log in</h1>
				<form className="myForm">
					<input className="firstName" placeholder=" E-mail" type="email" name="email" />
					<input className="lastName" placeholder="password" type="password" name="password" />
					<button className="logInButton">Log In</button>
				</form>
				<div className="SignUpLink">
					<p> You didnt sign up yet?</p> <a href=""> Sign up here </a>
				</div>
			</div>
		</div>
	);
};
export default LogIn;
