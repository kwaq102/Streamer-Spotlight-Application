import React, { Dispatch, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";

import barIcon from "../images/bars.svg";
import x from "../images/x.svg";

interface Props {
	streamerId: string;
	setStreamerId: Dispatch<SetStateAction<string>>;
}

const Navigation = ({ streamerId, setStreamerId }: Props) => {
	const [showNav, setShowNav] = useState(false);

	const sideNav = !showNav ? (
		<img src={barIcon} alt="bar icon" className="navigation__burger__icon" />
	) : (
		<img src={x} alt="x close icon" className="navigation__closeX__icon" />
	);

	return (
		<nav className="navigation">
			<div className="navigation__wprapper">
				<span
					className="navigation__burger"
					onClick={() => {
						setShowNav(!showNav);
					}}
				>
					{sideNav}
				</span>
				<h2 className="navigation__heading">
					Streamer<span className="navigation__heading__span">Spotlight</span>
					Application
				</h2>
				<ul className={`navigation__list ${!showNav ? "" : "showNav"}`}>
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
