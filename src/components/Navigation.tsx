import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	const streamerId = "123456";

	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/streamers" end>
						Show All
					</NavLink>
				</li>
				<li>
					<NavLink to={`/streamers/${streamerId}`}>Streamer info</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
