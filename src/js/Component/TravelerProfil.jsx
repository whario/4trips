import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import "../../styles/TravelerProfil.css";

export const TravelerProfil = () => {
	const { store, actions } = useContext(Context);
	console.log("texto");
	useEffect(() => {
		console.log("texto2");
		actions.profilTraveler();
	}, []);
	return (
		<div className="container">
			<div className="img-container">
				<img className="avatar-traveler" src={store.travelerInfoCollected.avatar} />
			</div>
			<h1 className="username-traveler">{store.travelerInfoCollected.username}</h1>
			<h1>{store.travelerInfoCollected.email}</h1>
		</div>
	);
};
