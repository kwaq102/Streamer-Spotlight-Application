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
		<section className="allStreamers">
			<h2 className="allStreamers__heading H2">Streamers List</h2>
			<div className="allStreamers__listWrapper"> {displayAllStreamers}</div>
		</section>
	);
};

export default ListStreamers;
