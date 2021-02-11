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
			<div className="card">
				<img src={store.travelerInfoCollected.avatar} className="card-img-top traveler-img" alt="..." />

				<h5 className="card-title">{store.travelerInfoCollected.username}</h5>

				<ul className="list-group list-group-flush">
					<li className="list-group-item">An item</li>
					<li className="list-group-item">A second item</li>
					<li className="list-group-item">A third item</li>
				</ul>
			</div>
		</div>
	);
};
