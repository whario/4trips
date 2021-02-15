import React from "react";
import PropTypes from "prop-types";

export const Modal = props => {
	console.log(props, "props en modal");
	return (
		<div tabIndex="-1" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
							onClick={() => props.onClose()}>
							{" "}
							<i className="fas fa-times" />
						</button>
					</div>
					<div className="modal-body">
						<p>Modal body text goes here.</p>
					</div>
					<div className="modal-footer">
						{props.onClose ? (
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								onClick={() => props.onClose()}
							/>
						) : null}
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => props.onClose()}>
							Cancelar
						</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Confirmar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};
Modal.defaultProps = {
	show: false,
	onClose: null
};
