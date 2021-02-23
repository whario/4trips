import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";
import defaultAvatarPro from "../../img/default_avatar.png";

export const OfferCard = props => {
	const { store, actions } = useContext(Context);
	console.log(props.offer, "offer en ofercard");

	return (
		<div className="card">
			<div className="col-4">
				{props.offer.userpro.avatar != null ? (
					<img src={props.offer.userpro.avatar} className="rounded-circle" />
				) : (
					<img src={defaultAvatarPro} className="rounded-circle" />
				)}
			</div>
			<div className="col-8">
				<h5 className="card-title">{props.offer.userpro.user_name}</h5>
				<div className="card-body">
					<li className="list-group-item">
						<div className="row">
							<div className="props description">{props.offer.text}</div>
						</div>
					</li>
				</div>
			</div>
		</div>
	);
};

OfferCard.propTypes = {
	offer: PropTypes.object
};
