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
	const proAvatar = e => {
		if (e.target.name == "travelerAvatar") {
			const reader = new FileReader();
			reader.onload = event => {
				if (reader.readyState === 2) {
					setFoto({ travelerAvatar: reader.result });
				}
			};
			if (e.target.files[0] != undefined) {
				reader.readAsDataURL(e.target.files[0]);
			}
		} else {
			setFoto({ travelerAvatar: e.target.value });
		}
	};
	const handleClick = () => {
		const file = document.querySelector("#file");
		console.log(file, "estoy en handleClick");
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
					<input className="file-input" type="file" id="file" name="travelerAvatar" onChange={handleFoto} />
				</Fragment>
			);
		}
	};
	useEffect(() => {
		actions.profilTraveler();
	}, []);

	return (
		<div className="container">
			<div className="col-sm-10 offset-md-2  col-md-8 offset-md-2 offset-la-2  col-la-8 offset-la-2  offset-xl-2  col-xl-8 offset-xl-2  ">
				<div className="card row icon">
					{edit == false ? <i onClick={handleEdit} className="fas fa-pencil-alt edit-icon" /> : null}
					<div className="img-place">{showItems()}</div>
					<ul className="list-group list-group-flush data-list">
						{edit == false ? (
							<li className="list-group-item">
								<strong>{store.travelerInfoCollected.username}</strong>
							</li>
						) : (
							<input
								className="username"
								name="username"
								type="text"
								value={store.travelerInfoCollected.username}
								onChange={handleChange}
							/>
						)}
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
					<div className="div-btns">
						{edit == true ? (
							<button
								onClick={() => {
									handleModal();
								}}
								className="btn btn-primary save-btn">
								Guardar
							</button>
						) : null}
						{edit == true ? (
							<button onClick={handleEdit} className="btn btn-primary cancel-btn">
								Cancelar
							</button>
						) : null}
					</div>
				</div>
				{modal == false ? (
					<Modal
						handleClick={handleClick}
						show={modal.showModal}
						onClose={() => setModal({ showModal: false })}
					/>
				) : null}
			</div>
		</div>
	);
};
