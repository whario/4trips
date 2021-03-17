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
			setValied(false);
			setSubmit(true);
			const file = document.querySelector("#file");
			console.log(file, "FILE");
			actions.sendOffer(inputs, props, file.files[0]);
			event.target.reset();
		} else {
			setValied(true);
			setSubmit(false);
		}
	};

	const hiddenFileInput = React.useRef(null);
	const handleClick = event => {
		hiddenFileInput.current.click();
	};
	return (
		<div className="my-2 sendoffer">
			<form className="row public-offer" onChange={handelChange} onSubmit={handelSubmit}>
				<input
					type="text"
					name="text"
					className="col-6 write-offer"
					placeholder="Describe tu oferta"
					src={inputs.offer}
				/>
				{valied ? <span className="alert alert-danger">Describe tu oferta</span> : null}
				<div className="col-1 postcommen" onClick={handleClick}>
					<i className="fas fa-camera camara-icon" />
				</div>
				<div className="col-1">
					<input type="file" name="attached" ref={hiddenFileInput} className="inputfile" id="file" />
				</div>
				<button className="btn btn-dark col-3" type="submit" id="button-addon1">
					Enviar
				</button>
			</form>
		</div>
	);
};

AddOffer.propTypes = {
	history: PropTypes.object,
	id_trip: PropTypes.number
};

export default AddOffer;
