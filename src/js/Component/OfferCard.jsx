import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";

export const OfferCard = props => {
	const { store, actions } = useContext(Context);
	console.log(props.offer, "offer en ofercard");

	return (
		<div className="col-md-4 col-sm-1">
			<div className="card h-100" />
		</div>
	);
};

OfferCard.propTypes = {
	offer: PropTypes.object
};
