import React, { useState, useEffect, SyntheticEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StreamerContext } from "../../App";

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

	const navigate = useNavigate();

	useEffect(() => {
		refreshStreamers();
	}, [votes.upvotes, votes.downvotes]);

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
			<h3 className="cardStreamer__heading H3">{name}</h3>
			<p className="cardStreamer__text">{platform}</p>
			<p className="cardStreamer__text">{description}</p>

			<form onSubmit={handleVotes}>
				<div>
					<button
						onClick={() => {
							setVotes({
								...votes,
								upvotes: upvotes + 1,
							});
						}}
					>
						+
					</button>
					<p>Liczba głosów + to {upvotes}</p>
				</div>
				<div>
					<button
						onClick={() => {
							setVotes({
								...votes,
								downvotes: downvotes - 1,
							});
						}}
					>
						-
					</button>
					<p>Liczba głosów - to {downvotes}</p>
				</div>
			</form>
			<button
				onClick={() => {
					setStreamerId(id);
					navigate(`./${id}`);
				}}
			>
				Show more info
			</button>
		</div>
	);
};

export default OneStreamerCard;
