import React from "react";
import "../../styles/Footer.css";
const Footer = () => {
	return (
		<div className="row">
			<div className="col-sm col-md col-la">
				<div className="footer">
					<div className="enlaces">
						<a className="paddingLeft" href="">
							{" "}
							Contactar{" "}
						</a>
						<a className="paddingLeft" href="">
							{" "}
							Política de privacidad{" "}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
