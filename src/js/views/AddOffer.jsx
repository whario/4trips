import React, { useState } from "react";
import "../../styles/Offers.scss";

export const AddOffer = () => {
	const [inputs, setInputs] = useState({
		offer: "",
		attached: ""
	});
	return (
		<div className="container offer">
			<div className="col-8">
				<div className="input-group mb-3">
					<input
						type="text"
						name="offer"
						className="form-control"
						placeholder="Envia una oferta a este viajero"
						aria-label="Example text with button addon"
						aria-describedby="button-addon1"
					/>
					<input type="file" name="attached" className="form-control" id="" />
					<button className="btn btn-outline-secondary" type="button" id="button-addon1">
						Enviar
					</button>
				</div>
			</div>
		</div>
	);
};
