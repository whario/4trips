import React, { useContext, useState, Fragment } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import "../../styles/TravelerProfil.css";
import { TripCard } from "./TripCard.jsx";

export const TravelerProfil = props => {
	const { store, actions } = useContext(Context); //
	const [foto, setFoto] = useState({
		travelerAvatar: ""
	});
	useEffect(
		//
		() => {
			setFoto({ travelerAvatar: store.travelerInfoCollected.avatar }); //seteo la foto en el store para cuando quiero hacer cambio a del estado de editar a no editar
		},
		[store.travelerInfoCollected.avatar] // se ejecuta la funcion simplemente cuando haya un cambio en la posicion store.travelerInfoCollected.avatar
	);

	const [edit, setedit] = useState(false); //este es cuando le dan al button del editar que salgan los inputs de editar //

	const handleEdit = () => {
		// para poner quitar la pagina de editar
		setedit(!edit);
	};

	const handleChange = e => {
		// aqui llamo la funcion de flux donde tengo la funcion que guardo los datos editados en el store
		actions.editTravelerProfil(e.target.name, e.target.value);
	};
	const handleFoto = e => {
		// aqui tengo la explicacion en el signup
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
		//
		const file = document.querySelector("#file");
		actions.updateTravelerData(store.travelerInfoCollected, file.files[0]); // aqui la actualicacion del perfil en el backend
		setedit(!edit);
	};
	const showItems = () => {
		//666
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
		//para poder obtener el perfil
		actions.profilTraveler(props);
		actions.list_user_trips();
	}, []);

	return (
		<div className="container">
			<div className="col-sm-10 offset-md-2  col-md-8 offset-md-2 offset-la-2  col-la-8 offset-la-2  offset-xl-2  col-xl-8 offset-xl-2">
				<div className="card card-edit row icon">
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
							<button onClick={handleClick} className="btn btn-primary save-btn">
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
			</div>
			<div className="row">
				{store.userTrips.length > 0
					? store.userTrips.map((trip, index) => {
							return <TripCard key={index} trip={trip} />;
					  })
					: "cargando viajes..."}
			</div>
		</div>
	);
};
