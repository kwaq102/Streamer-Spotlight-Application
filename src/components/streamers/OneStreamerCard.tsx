import React, { useState, SyntheticEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { StreamerContext } from "../../App";

import { avatarLink } from "../../utils/avatar";
import VotesForm from "./VotesForm";

interface Props {
	id: string;
	name: string;
	platform: string;
	description: string;
	upvotes: number;
	downvotes: number;
	refreshStreamers: () => void;
}

const OneStreamerCard = ({
	id,
	name,
	platform,
	description,
	upvotes,
	downvotes,
	refreshStreamers,
}: Props) => {
	const { setStreamerId } = useContext(StreamerContext);

	return (
		<div className="cardStreamer">
			<Link
				to={`./${id}`}
				className="cardStreamer__showInfo-link"
				onClick={() => setStreamerId(id)}
			>
				<img
					className="cardStreamer__avatar"
					src={avatarLink}
					alt="user avatar"
				/>
				<button className="cardStreamer__showInfo-button btn">Show more</button>
			</Link>

			<h4 className="cardStreamer__heading H4">{name}</h4>
			<p className="cardStreamer__text text-platform">{platform}</p>
			<p className="cardStreamer__text text-description">{description}</p>

			<VotesForm
				id={id}
				upvotes={upvotes}
				downvotes={downvotes}
				refreshStreamers={refreshStreamers}
			/>
		</div>
	);
};

export default OneStreamerCard;
