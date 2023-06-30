import React, { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

interface Props {
	streamerId: string;
	setStreamerId: Dispatch<SetStateAction<string>>;
}

const Navigation = ({ streamerId, setStreamerId }: Props) => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink onClick={() => setStreamerId("")} to="/streamers" end>
						Show All
					</NavLink>
				</li>
				<li>
					<NavLink
						to={`/streamers/${streamerId ? streamerId : "streamer-info"}`}
					>
						Streamer info
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
