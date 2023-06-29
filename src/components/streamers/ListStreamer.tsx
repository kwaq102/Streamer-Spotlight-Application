import React, { useEffect, useState } from "react";
import { StreamerEntity } from "types";
import OneStreamerCard from "./OneStreamerCard";

const ListStreamers = () => {
	const [streamers, setStramers] = useState<StreamerEntity[]>([]);
	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:3001/streamers");
			const data = await res.json();
			setStramers(data);
		})();
	}, []);

	const displayAllStreamers = streamers.map(streamer => (
		<OneStreamerCard
			key={streamer._id}
			name={streamer.name}
			platform={streamer.platform}
			description={streamer.description}
			upvotes={streamer.upvotes}
			downvotes={streamer.downvotes}
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
