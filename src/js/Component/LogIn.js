import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/Login.css";
import "bootstrap/dist/css/bootstrap.css";

export default function LogIn() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => console.log(data);

	return (
		<div className=" container">
			<div className="navbar" />
			<div className="logInCircle row col-sm col-md col-lg col-xl ">
				<h1 className="col-sm col-md col-lg	col-xl myCol">Log in</h1>
				<form className="myForm" onSubmit={handleSubmit(onSubmit)}>
					<input
						className="firstName"
						placeholder=" E-mail"
						type="email"
						name="email"
						ref={register({ required: true, message: "Email required" })}
					/>
					{errors.email && <p>{errors.email.message}</p>}
					<input
						className="lastName"
						placeholder="password"
						type="password"
						name="password"
						ref={register({ required: true })}
					/>
					{errors.password && <span>pasword required</span>}
					<br />
					<button type="submit" className="logInButton">
						Log In
					</button>
				</form>
				<div className="SignUpLink">
					<p>You didnt sign up yet?</p> <a href=""> Sign up here </a>
					<br />
				</div>
			</div>
		</div>
	);
}
