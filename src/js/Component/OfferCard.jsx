import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const OfferCard = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-md-4 col-sm-1">
			<div className="card h-100">
				<div className="row">OfferCard</div>
			</div>
		</div>
	);
};
OfferCard.propTypes = {
	offers: PropTypes.array
};
