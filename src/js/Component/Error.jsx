import React from "react";
import PropTypes from "prop-types";
const ErrorMsg = props => {
	return (
		<div className="alert alert-danger" role="alert">
			<p>{props.msg} </p>
		</div>
	);
};
ErrorMsg.propTypes = {
	msg: PropTypes.string
};
export default ErrorMsg;
