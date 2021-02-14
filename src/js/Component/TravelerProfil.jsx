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
	useEffect(
		() => {
			setFoto({ travelerAvatar: store.travelerInfoCollected.avatar });
		},
		[store.travelerInfoCollected.avatar]
	);
	const [modal, setModal] = useState({
		showModal: false
	});

	const [edit, setedit] = useState(false); //este es cuando le dan al button del editar que salgan los inputs de editar

	const handleEdit = () => {
		setedit(!edit);
	};

	const handleModal = () => {
		setModal(!modal);
	};
	const handleChange = e => {
		actions.editTravelerProfil(e.target.name, e.target.value);
	};
	const handleFoto = e => {
		if (e.target.name == "travelerAvatar") {
			console.log("1");
			const reader = new FileReader();
			reader.onload = event => {
				console.log("render.inlaad 1 ");
				if (reader.readyState === 2) {
					console.log("render.oonload 2 ");
					setFoto({ travelerAvatar: reader.result });
				}
			};
			if (e.target.files[0] != undefined) {
				console.log("2");
				reader.readAsDataURL(e.target.files[0]);
			}
		} else {
			console.log("else 1");
			setFoto({ travelerAvatar: e.target.value });
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
					<img className="card-img-top traveler-img" src={foto.travelerAvatar} />
					<input type="file" id="file" name="travelerAvatar" onChange={handleFoto} />
				</Fragment>
			);
		}
	};
	useEffect(() => {
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
