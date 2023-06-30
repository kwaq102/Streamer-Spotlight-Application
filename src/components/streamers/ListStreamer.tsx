import React, { useContext } from "react";
import OneStreamerCard from "./OneStreamerCard";
import { StreamerContext } from "../../App";

interface Props {
	refreshStreamers: () => void;
}
const ListStreamers = ({ refreshStreamers }: Props) => {
	const context = useContext(StreamerContext);
	const { streamers } = context;

	const displayAllStreamers = streamers.map(streamer => (
		<OneStreamerCard
			key={streamer._id}
			id={streamer._id}
			name={streamer.name}
			platform={streamer.platform}
			description={streamer.description}
			upvotes={streamer.upvotes}
			downvotes={streamer.downvotes}
			refreshStreamers={refreshStreamers}
		/>
	));

	return (
		<section>
			<h2>List Streamers</h2>
			<div>{displayAllStreamers}</div>
		</section>
	);
};

export default ListStreamers;
