import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";
import defaultAvatarPro from "../../img/default_avatar.png";

export const CommentCard = props => {
	const { store, actions } = useContext(Context);
	console.log(props.comment, "comment en commentcard");

	return (
		<div className="card">
			<div className="col-4">
				{props.comment.userpro.avatar != null ? (
					<img src={props.comment.userpro.avatar} className="rounded-circle" />
				) : (
					<img src={defaultAvatarPro} className="rounded-circle" />
				)}
			</div>
			<div className="col-8">
				<h5 className="card-title">{props.comment.userpro.user_name}</h5>
				<div className="card-body">
					<li className="list-group-item">
						<div className="row">
							<div className="props description">{props.comment.text}</div>
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