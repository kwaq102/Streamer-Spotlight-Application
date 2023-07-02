import React, { useState, SyntheticEvent } from "react";
import thumbUp from "../../images/thumbs-up.svg";
import thumbDown from "../../images/thumbs-down.svg";
interface Props {
	id: string;
	upvotes: number;
	downvotes: number;
	refreshStreamers: () => void;
}

const VotesForm = ({ id, upvotes, downvotes, refreshStreamers }: Props) => {
	const handleVotes = async (e: SyntheticEvent) => {
		e.preventDefault();
		try {
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

	const [votes, setVotes] = useState({
		upvotes,
		downvotes,
	});

	return (
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
						alt="Thumb up icon"
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
				<p className="cardStreamer__formVote__result resultDown">{downvotes}</p>
			</div>
		</form>
	);
};

export default VotesForm;
