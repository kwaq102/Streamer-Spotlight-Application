import React from "react";
import { Link } from "react-router-dom";
const StreamerSelect = () => {
	return (
		<div className="streamerSelect">
			<p className="streamerSelect__info">You have to choose some streamer</p>
			<Link to="/streamers" className="streamerSelect__link">
				<button className="streamerSelect__button btn">Streamer list</button>
			</Link>
		</div>
	);
};

export default StreamerSelect;
