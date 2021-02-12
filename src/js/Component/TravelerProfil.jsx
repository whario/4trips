import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import "../../styles/TravelerProfil.css";

export const TravelerProfil = () => {
	const { store, actions } = useContext(Context);
	const [edit, setedit] = useState(false);
	const handleEdit = e => {
		setedit(!edit);
	};
	const handleChange = e => {
		actions.editTravelerProfil(e.target.name, e.target.value);
	};

	useEffect(() => {
		console.log("texto2");
		actions.profilTraveler();
	}, []);
	return (
		<div className="container">
			<div className="card">
				<i onClick={handleEdit} className="fas fa-pencil-alt edit-icon" />
				<img
					name="travelerAvatar"
					src={store.travelerInfoCollected.avatar}
					className="card-img-top traveler-img"
					alt="..."
				/>
				<div className="overlay-traveler"> sube una foto </div>
				{edit == false ? (
					<strong>{store.travelerInfoCollected.username}</strong>
				) : (
					<input
						className="username"
						name="username"
						type="text"
						value={store.travelerInfoCollected.username}
						onChange={handleChange}
					/>
				)}

				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						{edit == false ? (
							<strong>{store.travelerInfoCollected.email} </strong>
						) : (
							<input
								className="email-input"
								name="email"
								type="text"
								value={store.travelerInfoCollected.email}
								onChange={handleChange}
							/>
						)}
					</li>
				</ul>
				{edit == true ? <button className="btn btn-primary save-btn">guardad</button> : null}
			</div>
		</div>
	);
};
