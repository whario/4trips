import React, { useContext, useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import SignUpPro from "../views/SignUpPro.js";
import "../../styles/Reviews.css";
const Reviews = props => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{[...Array(5)].map((value, index) => {
				if (index < store.proInfoCollected.percent_reviews) {
					return <span className="fa fa-star checked" />;
				} else {
					return <span className="fa fa-star white-star" />;
				}
			})}
		</div>
	);
};
export default Reviews;
Reviews.propTypes = {
	history: PropTypes.object
};
