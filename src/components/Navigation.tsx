import React, { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

interface Props {
	streamerId: string;
	setStreamerId: Dispatch<SetStateAction<string>>;
}

const Navigation = ({ streamerId, setStreamerId }: Props) => {
	return (
		<nav className="navigation">
			<div className="navigation__wprapper">
				<h2 className="navigation__heading">
					Streamer<span className="navigation__heading__span">Spotlight</span>
					Application
				</h2>
				<ul className="navigation__list">
					<li className="navigation__list__element">
						<NavLink
							className="navigation__list__link"
							onClick={() => setStreamerId("")}
							to="/streamers"
							end
						>
							Show All
						</NavLink>
					</li>
					<li className="navigation__list__element">
						<NavLink
							className="navigation__list__link"
							to={`/streamers/${streamerId ? streamerId : "streamer-info"}`}
						>
							Streamer info
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
