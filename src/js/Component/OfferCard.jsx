import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";
import defaultAvatarPro from "../../img/default_avatar_pro.png";
import { CommentCard } from "./CommentCard.jsx";
import { AddComment } from "./AddComment.jsx";
import "../../styles/Offers.scss";

export const OfferCard = props => {
	const { store, actions } = useContext(Context);
	const [showComments, setShowComments] = useState(false);

	return (
		<div className="card detalleoferta">
			<div className="row">
				<div className="col-3">
					{props.offer.userpro.avatar != null ? (
						<img src={props.offer.userpro.avatar} className="rounded-circle" />
					) : (
						<img src={defaultAvatarPro} className="rounded-circle" />
					)}
					<h5 className="card-title">{props.offer.userpro.user_name}</h5>
				</div>
				<div className="col-8 textoffer">{props.offer.text}</div>
			</div>
			<div className="row">
				<div className="col-3 offset-9">
					<button
						className="btn btn-dark btn-sm"
						onClick={() => {
							setShowComments(!showComments);
						}}>
						Esta oferta tiene {props.offer.comments.length} comentarios
					</button>
				</div>
				<div className="row comentarios">
					{showComments
						? props.offer.comments.map((comment, index) => {
								return <CommentCard comment={comment} key={index} />;
						  })
						: null}
					<AddComment id_offer={props.offer.id} id_trip={props.offer.id_trip} />
				</div>
			</div>
		</div>
	);
};

OfferCard.propTypes = {
	offer: PropTypes.object
};
