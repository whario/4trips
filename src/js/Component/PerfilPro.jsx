import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import SignUpPro from "../views/SignUpPro.js";

export const PerfilPro = props => {
	console.log(props);
	console.log(props.datos);
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluie">
			<div className="avatar-cont">
				<h1 />
			</div>
		</div>
	);
};
PerfilPro.propTypes = {
	history: PropTypes.object,
	datos: PropTypes.object
};
