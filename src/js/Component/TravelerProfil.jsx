import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import "../../styles/TravelerProfil.css";

export const TravelerProfil = () => {
	const { store, actions } = useContext(Context);
	const [foto, setFoto] = useState({
		travelerAvatar: ""
	});

	console.log(foto);
	const [edit, setedit] = useState(false);
	const handleEdit = e => {
		setedit(!edit);
	};
	const handleChange = e => {
		actions.editTravelerProfil(e.target.name, e.target.value);
	};
	const handleFoto = e => {
		if ((e.target.name = "travelerAvatar")) {
			const reader = new FileReader();
			reader.onload = event => {
				if (reader.readyState === 2) {
					setFoto({ ...foto, travelerAvatar: reader.result });
				}
			};
			if (e.target.files[0] != undefined) {
				reader.readAsDataURL(e.target.files[0]);
			}
		} else {
			setFoto({ ...foto, [e.target.name]: e.target.value });
		}
	};
	const handleClick = e => {
		const file = document.querySelector("#file");
		actions.updateTravelerData(store.travelerInfoCollected, file.files[0]);
	};
	const showItems = () => {
		if (edit == true) {
			return (
				<Fragment>
					<img
						className="card-img-top traveler-img"
						name="travelerAvatar"
						src={foto.travelerAvatar}
						value={store.travelerInfoCollected.avatar}
					/>
					<input type="file" id="file" onChange={handleFoto} />
				</Fragment>
			);
		}
	};
	useEffect(() => {
		console.log("texto2");
		actions.profilTraveler();
	}, []);
	return (
		<div className="container">
			<div className="card">
				<i onClick={handleEdit} className="fas fa-pencil-alt edit-icon" />
				<div>
					{edit == false ? (
						<img
							className="card-img-top traveler-img"
							name="travelerAvatar"
							src={store.travelerInfoCollected.avatar}
						/>
					) : (
						showItems()
					)}
				</div>

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
								className="emailInput"
								name="email"
								type="text"
								value={store.travelerInfoCollected.email}
								onChange={handleChange}
							/>
						)}
					</li>
				</ul>
				{edit == true ? (
					<button onClick={handleClick} className="btn btn-primary save-btn">
						guardad
					</button>
				) : null}
			</div>
		</div>
	);
};
