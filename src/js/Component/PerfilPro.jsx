import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import SignUpPro from "../views/SignUpPro.js";

export const PerfilPro = () => {
	const { store, actions } = useContext(Context);
	const [foto, setFoto] = useState({
		proAvatar: ""
	});
	useEffect(() => {
		actions.profilPro();
	}, []);
	const [edit, setedit] = useState(false);

	const handleEdit = () => {
		setedit(!edit);
	};
	const handleFoto = e => {
		if (e.target.name == "proAvatar") {
			const reader = new FileReader();
			reader.onload = event => {
				if (reader.readyState === 2) {
					setFoto({ proAvatar: reader.result });
				}
			};
			if (e.target.files[0] != undefined) {
				reader.readAsDataUrl(e.target.files[0]);
			}
		} else {
			setFoto({ proAvatar: e.target.value });
		}
	};
	return (
		<div className="container">
			<div className="card">
				<i onClick={handleEdit} className="fas fa-pencil-alt edit-icon" />
				<img className="card-img-top traveler-img" src={store.proInfoCollected.avatar} alt="avatar" />
				{edit == false ? (
					<li className="list-group-item">
						<strong>{store.proInfoCollected.user_name}</strong>
					</li>
				) : (
					<input className="username" name="user_name" type="text" value={store.proInfoCollected.user_name} />
				)}
				<ul className="list-group list-group-flush">
					{edit == false ? (
						<li className="list-group-item">{store.proInfoCollected.email} </li>
					) : (
						<input className="email" name="email" type="text" value={store.proInfoCollected.email} />
					)}
					{edit == false ? (
						<li className="list-group-item">{store.proInfoCollected.phone} </li>
					) : (
						<input className="phone" name="phone" type="text" value={store.proInfoCollected.phone} />
					)}
					{edit == false ? (
						<li className="list-group-item">{store.proInfoCollected.url} </li>
					) : (
						<input className="url" name="url" type="text" value={store.proInfoCollected.url} />
					)}
					{edit == false ? (
						<li className="list-group-item">{store.proInfoCollected.direction}</li>
					) : (
						<input
							className="direction"
							name="direction"
							type="text"
							value={store.proInfoCollected.direction}
						/>
					)}
					{edit == false ? (
						<li className="list-group-item">{store.proInfoCollected.location}</li>
					) : (
						<input
							className="locaton"
							name="location"
							type="text"
							value={store.proInfoCollected.location}
						/>
					)}
				</ul>
			</div>
		</div>
	);
};
