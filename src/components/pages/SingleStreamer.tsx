import React, { useContext } from "react";
import { StreamerContext } from "../../App";
import { Link } from "react-router-dom";
import { avatarLink } from "../../utils/avatar";

interface Props {
	streamerId: string;
}

const SingleStreamer = ({ streamerId }: Props) => {
	const context = useContext(StreamerContext);
	const { streamers } = context;
	const streamer = streamers.find(streamer => streamer._id === streamerId);

	return (
		<section className="singleStreamer">
			<h2 className="singleStreamer__heading H2">Streamer record</h2>
			{streamer ? (
				<div className="singleStreamer__wrapperInfo">
					<img
						className="singleStreamer__avatar"
						src={avatarLink}
						alt="user avatar"
					/>
					<p className="singleStreamer__text text-name">
						Streamer:{" "}
						<span className="singleStreamer__text__span">{streamer.name}</span>
					</p>
					<p className="singleStreamer__text text-platform">
						Platform:{" "}
						<span className="singleStreamer__text__span">
							{streamer.platform}
						</span>
					</p>
					<p className="singleStreamer__text text-description">
						Description:{" "}
						<span className="singleStreamer__text__span">
							{streamer.description}
						</span>
					</p>
				</div>
			) : (
				<p className="singleStreamer__text">Wybierz streamera</p>
			)}
			<Link to="/streamers" className="singleStreamer__backLink">
				<button className="singleStreamer__backLink__button btn">
					Back to list
				</button>
			</Link>
		</section>
	);
};

export default SingleStreamer;
