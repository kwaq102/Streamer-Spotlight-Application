import React, { useContext } from "react";
import { StreamerContext } from "../../App";

interface Props {
	streamerId: string;
}

const SingleStreamer = ({ streamerId }: Props) => {
	const context = useContext(StreamerContext);
	const { streamers } = context;

	const streamer = streamers.find(streamer => streamer._id === streamerId);

	return (
		<section>
			<h2>Streamer record</h2>
			{streamer ? (
				<div>
					<h4>Streamer info</h4>
					<img
						src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
						alt=""
					/>
					<p>{streamer.name}</p>
					<p>{streamer.platform}</p>
					<p>{streamer.description}</p>
				</div>
			) : (
				<p>Wybierz streamera</p>
			)}
		</section>
	);
};

export default SingleStreamer;
