import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<p className="footer__wrapper__text">
					Recuritment task for{" "}
					<Link
						to="https://daredrop.com/"
						className="footer__wrapper__text__link"
					>
						Dare Drop
					</Link>
				</p>
				<p className="footer__wrapper__text">
					Author:{" "}
					<span className="footer__wrapper__text-author">Kamil Gajewski</span>
				</p>
				<p className="footer__wrapper__text">
					<span>©</span> All rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
