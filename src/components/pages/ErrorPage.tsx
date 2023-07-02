import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="error">
			<p className="error__info">Something went wrong...</p>
			<Link to="/streamers" className="error__info__link">
				<button className="error__info__button btn">Go back</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
