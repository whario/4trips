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
	return <div>{store.travelerInfoCollected.username}</div>;
};
