import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { CommentCard } from "./CommentCard.jsx";
import "../../styles/Offers.scss";
import PropTypes from "prop-types";

import { checkPropTypes } from "prop-types";

export const Comments = props => {
	console.log(props, "props");
	return (
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-8 offset-lg-2 col-md-6 offset-md-3">
					<div className="espaciador" />
					{props.comments.map((comment, index) => {
						return <CommentCard comment={comment} key={index} />;
					})}
				</div>
			</div>
		</div> //hago mapeo de comments y se lo paso por props a CommentCard
	);
};

Comments.propTypes = {
	comments: PropTypes.array
};
