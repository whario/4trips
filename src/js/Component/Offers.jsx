import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { OfferCard } from "./OfferCard.jsx";
import "../../styles/Offers.scss";
import PropTypes from "prop-types";

import { checkPropTypes } from "prop-types";

export const Offers = props => {
	return (
		<div>
			{props.offers.map((offer, index) => {
				return <OfferCard offer={offer} key={index} />;
			})}
		</div>
	);
};

Offers.propTypes = {
	offers: PropTypes.array
};
