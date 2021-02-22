import React from "react";
import PropTypes from "prop-types";
const ErrorMsg = props => {
	return (
		<div>
			<div className="alert alert-danger" role="alert">
				<p>{props.msg}</p>
			</div>
		</div>
	);
};
ErrorMsg.propTypes = {
	msg: PropTypes.string,
	sucsses: PropTypes.string
};
export default ErrorMsg;
