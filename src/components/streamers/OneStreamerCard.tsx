import React, { useState, SyntheticEvent, useContext } from "react";
import { Link } from "react-router-dom";
import { StreamerContext } from "../../App";

import thumbUp from "../../images/thumbs-up.svg";
import thumbDown from "../../images/thumbs-down.svg";

const avatarLink =
	"https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png";

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

	const [votes, setVotes] = useState({
		upvotes,
		downvotes,
	});

	const handleVotes = async (e: SyntheticEvent) => {
		e.preventDefault();
		try {
			console.log(id);
			await fetch(`http://localhost:3001/streamers/${id}/vote`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					upvotes: votes.upvotes,
					downvotes: votes.downvotes,
				}),
			});
			refreshStreamers();
		} catch (e) {
			console.error(e);
		}
	};

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

			{/* może forma do innego komponentu jak będzie czas */}
			<form className="cardStreamer__formVote" onSubmit={handleVotes}>
				<div className="cardStreamer__formVote__wrapperVote voteUp">
					<button
						className="cardStreamer__formVote__button"
						onClick={() => {
							setVotes({
								...votes,
								upvotes: upvotes + 1,
							});
						}}
					>
						<img
							className="cardStreamer__formVote_icon"
							src={thumbUp}
							alt="ddd"
						/>
					</button>
					<p className="cardStreamer__formVote__result">{upvotes}</p>
				</div>
				<div className="cardStreamer__formVote__wrapperVote voteDown">
					<button
						className="cardStreamer__formVote__button"
						onClick={() => {
							setVotes({
								...votes,
								downvotes: downvotes + 1,
							});
						}}
					>
						<img
							className="cardStreamer__formVote_icon"
							src={thumbDown}
							alt="thumb down icon"
						/>
					</button>
					<p className="cardStreamer__formVote__result resultDown">
						{downvotes}
					</p>
				</div>
			</form>
		</div>
	);
};

export default OneStreamerCard;
