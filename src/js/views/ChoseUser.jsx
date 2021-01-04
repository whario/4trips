import React from "react";
import "../../styles/ChoseUser.css";
import SignUp from "../views/SignUp.js";

import PropTypes from "prop-types";
const ChoseUser = props => {
	const handelOnViajero = event => {
		event.preventDefault();
		props.history.push("/registroviajero");
	};
	const handelOnPro = event => {
		event.preventDefault();
		props.history.push("/registroprofecional");
	};
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-3">
					<div className="viajero" onClick={handelOnViajero} />
				</div>
				<div className="col-3">
					<div className="pro" onClick={handelOnPro} />
				</div>
			</div>
		</div>
	);
};
ChoseUser.propTypes = {
	history: PropTypes.object
};

export default ChoseUser;
