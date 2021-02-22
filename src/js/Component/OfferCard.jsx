import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";
import defaultAvatarPro from "../../img/default_avatar.png";

export const OfferCard = props => {
	const { store, actions } = useContext(Context);
	console.log(props.offer, "offer en ofercard");

	return (
		<div className="col-md-4 col-sm-1">
			<div className="card h-100" />
			<div className="row">
				<div className="col-4">
					{props.offer.userpro.avatar != null ? (
						<img src={props.offer.userpro.avatar} className="rounded-circle" />
					) : (
						<div>
							<img src={defaultAvatarPro} className="rounded-circle" />
						</div>
					)}
				</div>
				<div className="col-8">
					<h5 className="card-title">{props.offer.userpro.user_name}</h5>
				</div>
			</div>
			<div className="card-body">
				<li className="list-group-item">
					<div className="row">
						<div className="props description">{props.offer.text}</div>
					</div>
				</li>
			</div>
		</div>
	);
};

OfferCard.propTypes = {
	offer: PropTypes.object
};
