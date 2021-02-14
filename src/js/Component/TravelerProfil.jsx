import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import { Modal } from "./Modal.jsx";
import "../../styles/TravelerProfil.css";

export const TravelerProfil = () => {
	const { store, actions } = useContext(Context);
	const [foto, setFoto] = useState({
		travelerAvatar: ""
	});
	const [modal, setModal] = useState({
		showModal: false
	});

	const [edit, setedit] = useState(false); //este es cuando le dan al button del editar que salgan los inputs de editar
	const handleEdit = () => {
		setedit(!edit);
	};

	const handleModal = () => {
		console.log("handle");
		setModal(!modal);
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
	const handleClick = () => {
		const file = document.querySelector("#file");
		actions.updateTravelerData(store.travelerInfoCollected, file.files[0]);
	};
	const showItems = () => {
		if (edit == false) {
			return (
				<img
					className="card-img-top traveler-img"
					name="travelerAvatar"
					src={store.travelerInfoCollected.avatar}
				/>
			);
		} else {
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
				<div>{showItems()}</div>
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
					<button
						onClick={() => {
							handleClick();
							handleModal();
						}}
						className="btn btn-primary save-btn">
						guardad
					</button>
				) : null}
			</div>
			{modal == false ? <Modal show={modal.showModal} onClose={() => setModal({ showModal: false })} /> : null}
		</div>
	);
};
