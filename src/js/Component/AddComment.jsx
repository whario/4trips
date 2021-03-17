import React, { useState, useContext } from "react";
import "../../styles/Offers.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const AddComment = props => {
	const { store, actions } = useContext(Context);
	const [inputs, setInputs] = useState({
		text: "",
		attached: "",
		id_trip: props.id_trip,
		id_offer: props.id_offer
	});
	console.log(props, "***************props");
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
		actions.sendComment(inputs, props, file.files[0]);
		event.target.reset();
	};

	const hiddenFileInput = React.useRef(null);
	const handleClick = event => {
		hiddenFileInput.current.click();
	};
	return (
		<div className="card my-1 sendcomment col-10 offset-2">
			<form className="row" onChange={handelChange} onSubmit={handelSubmit}>
				<div className="col-7">
					<input
						type="text"
						name="text"
						placeholder="Escribe tu comentario..."
						src={inputs.offer}
						className="postcomment"
					/>
					{submit && !inputs.text ? (
						<span className="alert alert-danger">Tienes que escribir un comentario</span>
					) : null}
				</div>
				<div className="col-1 postcomment" onClick={handleClick}>
					<i className="fas fa-camera" />
				</div>
				<div className="col-2">
					<input type="file" name="attached" ref={hiddenFileInput} className="col-4 inputfile" id="file" />
					<button className="btn btn-outline-secondary" type="submit" id="button-addon1">
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

AddComment.propTypes = {
	history: PropTypes.object,
	id_trip: PropTypes.number,
	id_offer: PropTypes.number
};

export default AddComment;
