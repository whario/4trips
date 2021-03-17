import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";
import defaultAvatarPro from "../../img/default_avatar_pro.png";
import { CommentCard } from "./CommentCard.jsx";
import { AddComment } from "./AddComment.jsx";
import "../../styles/Offers.scss";
import { Link } from "react-router-dom";

export const OfferCard = props => {
	const { store, actions } = useContext(Context);
	const [showComments, setShowComments] = useState(false);
	const reviews = [1, 2, 3, 4, 5];
	console.log(props, "PROPS@@@@@");
	return (
		<div className="card detalleoferta">
			<div className="row">
				<div className="col-md-3 col-sm-12">
					<Link to="/perfilpro">
						{props.offer.userpro.avatar != null ? (
							<img src={props.offer.userpro.avatar} className="rounded-circle" />
						) : (
							<img src={defaultAvatarPro} className="rounded-circle" />
						)}
					</Link>
					<h5 className="card-title-offer">{props.offer.userpro.user_name}</h5>

					<div className="row stars">
						<p className="p-review">Valora a este profesional:</p>
						{reviews.map(item => {
							return (
								<i
									className="fas fa-star"
									key={item}
									onClick={() => {
										actions.sendReviews(item, props.offer.id_pro);
									}}
								/>
							);
						})}
					</div>
				</div>
				<div className="col-md-8 col-sm-6 textoffer">
					{props.offer.text}
					{props.offer.attached}{" "}
				</div>
			</div>
			<div className="row comments-button">
				<div className="col-md-3 offset-md-8 offset-sm-1 col-sm-10 offset-sm-1 show-comments">
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
					{showComments ? <AddComment id_offer={props.offer.id} id_trip={props.offer.id_trip} /> : null}
				</div>
			</div>
		</div>
	);
};

OfferCard.propTypes = {
	offer: PropTypes.object
};
