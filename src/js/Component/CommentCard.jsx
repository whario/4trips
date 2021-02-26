import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { checkPropTypes } from "prop-types";
import defaultAvatarPro from "../../img/default_avatar_pro.png";
import defaultAvatarTra from "../../img/default_avatar.png";

export const CommentCard = props => {
	const { store, actions } = useContext(Context);
	console.log(props.comment, "estoy en el comentcard");
	const checkingImageUser = comment => {
		console.log(comment, "dentro de la funcion");
		if (comment.userpro != null) {
			return <img src={comment.userpro.avatar} />;
		} else {
			return <img src={comment.traveler.avatar} />;
		}
	};

	return (
		<>
			{props.comment ? (
				<div className="card">
					<div className="col-4">{checkingImageUser(props.comment)}</div>
					<div className="col-8">
						<h5 className="card-title">
							{props.comment.userpro != null
								? props.comment.userpro.user_name
								: props.comment.traveler.username}
						</h5>
						<div className="card-body">
							<div className="props description">{props.comment.text}</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

CommentCard.propTypes = {
	comment: PropTypes.object
};
