import React, { useState, useEffect } from "react";
import "../../styles/SignUp.css";
import Navbar from "../Component/Navbar.js";
const SignUp = () => {
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
			<form className=" myForm m-5" onSubmit={handleSubmit}>
				<div className="form-row ">
					{submited && valied ? <h3>Done!</h3> : null}
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
						<div className="valid-feedback">Looks good!</div>
					</div>
				</div>
				{submited && !datos.userName ? <span>Write your user name</span> : null}

				<input
					onChange={handleEmailChange}
					name="email"
					placeholder="email"
					type="email"
					className="form-control"
					value={datos.email}
				/>
				{submited && !datos.email ? <span>Write your Email</span> : null}

				<input
					name="password"
					placeholder="Password"
					type="password"
					className="form-control"
					value={datos.password}
					onChange={handlePasswordeChange}
				/>
				{submited && !datos.password ? <span>Write your Password</span> : null}

				<input
					name="repeatPassword"
					placeholder="Confirm password"
					type="password"
					className="form-control"
					value={datos.repeatPassword}
					onChange={handleReapeatPasswordChange}
				/>
				{submited && datos.repeatPassword != datos.password ? <span>Password do not match! </span> : null}

				<img
					name="img"
					type="submit"
					value="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
				/>

				<button type="submit" value="sign up">
					Register
				</button>
			</form>
		</div>
	);
};
export default SignUp;
