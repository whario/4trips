import React, { useState, useContext } from "react";
import "../../styles/Offers.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AddOffer = props => {
	const { store, actions } = useContext(Context);
	const [inputs, setInputs] = useState({
		text: "",
		attached: "",
		id_trip: props.id_trip
	});
	const handelChange = e => {
		console.log("handleChange", e.target.value);
		if (e.target.name == "attached") {
			const reader = new FileReader();
			reader.onload = event => {
				if (reader.readyState === 2) {
					setInputs({ ...inputs, attached: reader.result });
				}
			};
			if (e.target.files[0] != undefined) {
				reader.readAsDataURL(e.target.files[0]);
			}
		} else {
			setInputs({ ...inputs, [e.target.name]: e.target.value });
		}
	};
	const [submit, setSubmit] = useState(false);
	const [valied, setValied] = useState(false);

	const handelSubmit = event => {
		event.preventDefault();
		if (inputs.text != "") {
			setValied(true);
		}
		setSubmit(true);
		const file = document.querySelector("#file");
		console.log(file, "FILE");
		actions.sendOffer(inputs, props, file.files[0]);
	};

	return (
		<div className="container offer">
			<div className="col-8">
				<form className="" onChange={handelChange} onSubmit={handelSubmit}>
					<div className="input-group mb-3">
						<input
							type="text"
							name="text"
							className="form-control"
							placeholder="Envia una oferta a este viajero"
							src={inputs.offer}
						/>
						{submit && !inputs.text ? <span className="alert alert-danger">Describe tu oferta</span> : null}
						<input type="file" name="attached" className="form-control" id="file" />
						<button className="btn btn-outline-secondary" type="submit" id="button-addon1">
							Enviar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

AddOffer.propTypes = {
	history: PropTypes.object,
	id_trip: PropTypes.integer
};

export default AddOffer;
