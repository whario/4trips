import React from "react";
import "../../styles/ChoseUser.css";
import pro from "../../img/pro.png";
import viajero from "../../img/viajero.png";

import PropTypes from "prop-types";
const ChoseUser = props => {
	const handelOnViajero = event => {
		event.preventDefault();
		props.history.push("/registroviajero");
	};
	const handelOnPro = event => {
		event.preventDefault();
		props.history.push("/registroPro");
	};
	return (
		<div className="container">
			<div className="row justify-content-center div-container">
				<div>
					<div className="col-sm-10 ">
						<div className="viajero" onClick={handelOnViajero} />
					</div>
				</div>
				<div>
					<div className="col-sm-10 ">
						<div className="pro" onClick={handelOnPro} />
					</div>
				</div>
			</div>
		</div>
	);
};
ChoseUser.propTypes = {
	history: PropTypes.object
};

export default ChoseUser;
