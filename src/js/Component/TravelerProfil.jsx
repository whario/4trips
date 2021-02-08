import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";

export const TravelerProfil = () => {
	const { store, actions } = useContext(Context);
	console.log("texto");
	useEffect(() => {
		console.log("texto2");
		actions.profilTraveler();
	}, []);
	return (
		<div>
			<h1>{store.travelerInfoCollected.username}</h1>
			<h1>{store.travelerInfoCollected.email} </h1>
		</div>
	);
};
