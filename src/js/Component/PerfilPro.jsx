import React, { useContext, useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import SignUpPro from "../views/SignUpPro.js";

export const PerfilPro = () => {
	const { store, actions } = useContext(Context);
	const [foto, setFoto] = useState({
		proAvatar: ""
	});
	useEffect(
		() => {
			setFoto({ proAvatar: store.proInfoCollected.avatar });
		},
		[store.proInfoCollected.avatar]
	);
	useEffect(() => {
		actions.profilPro();
	}, []);
	const [edit, setedit] = useState(false);

	const handleEdit = () => {
		setedit(!edit);
	};
	const handleChange = e => {
		actions.editProProfail(e.target.name, e.target.value);
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
				reader.readAsDataURL(e.target.files[0]);
			}
		} else {
			setFoto({ proAvatar: e.target.value });
		}
	};
	const handleSave = () => {
		const file = document.querySelector("#file");
		actions.updateProData(store.proInfoCollected, file.files[0]);
	};
	console.log(store.proInfoCollected, "proinfocolec");
	return (
		<div className="container">
			<div className="card">
				{edit == false ? <i onClick={handleEdit} className="fas fa-pencil-alt edit-icon" /> : null}
				{edit == false ? (
					<img className="card-img-top traveler-img" src={store.proInfoCollected.avatar} alt="avatar" />
				) : (
					<Fragment>
						<img className="card-img-top traveler-img" src={foto.proAvatar} />,
						<input className="file-input" type="file" id="file" name="proAvatar" onChange={handleFoto} />
					</Fragment>
				)}
				{edit == false ? (
					<p className="list-group-item">
						<strong>{store.proInfoCollected.user_name}</strong>
					</p>
				) : (
					<input
						className="username"
						name="user_name"
						type="text"
						value={store.proInfoCollected.user_name}
						onChange={handleChange}
					/>
				)}
				<div className="">
					{edit == false ? (
						<p className="list-group-item">{store.proInfoCollected.email} </p>
					) : (
						<input
							className="email"
							name="email"
							type="text"
							value={store.proInfoCollected.email}
							onChange={handleChange}
						/>
					)}
					{edit == false ? (
						<p className="list-group-item">{store.proInfoCollected.phone} </p>
					) : (
						<input
							className="phone"
							name="phone"
							type="text"
							value={store.proInfoCollected.phone}
							onChange={handleChange}
						/>
					)}
					{edit == false ? (
						<p className="list-group-item">{store.proInfoCollected.url} </p>
					) : (
						<input
							className="url"
							name="url"
							type="text"
							value={store.proInfoCollected.url}
							onChange={handleChange}
						/>
					)}
					{edit == false ? (
						<p className="list-group-item">{store.proInfoCollected.direction}</p>
					) : (
						<input
							className="direction"
							name="direction"
							type="text"
							value={store.proInfoCollected.direction}
							onChange={handleChange}
						/>
					)}
					{edit == false ? (
						<p className="list-group-item">{store.proInfoCollected.location}</p>
					) : (
						<input
							className="locaton"
							name="location"
							type="text"
							value={store.proInfoCollected.location}
							onChange={handleChange}
						/>
					)}
				</div>
				{edit == true ? (
					<Fragment>
						<button onClick={handleSave} className="btn btn-primary">
							Guardar
						</button>
						<button onClick={handleEdit} className="btn btn-primary">
							Cancelar
						</button>
					</Fragment>
				) : null}
			</div>
		</div>
	);
};
