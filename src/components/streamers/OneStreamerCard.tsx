import { platform } from "os";
import React from "react";

interface Props {
	name: string;
	platform: string;
	description: string;
	upvotes: number;
	downvotes: number;
}

const OneStreamerCard = ({
	name,
	platform,
	description,
	upvotes,
	downvotes,
}: Props) => {
	return (
		<div>
			<h5>{name}</h5>
			<p>{platform}</p>
			<p>{description}</p>
			<p>
				<span>Liczba głosów + to {upvotes}</span>{" "}
				<span>Liczba głosów - to {downvotes}</span>
			</p>
		</div>
	);
};

export default OneStreamerCard;
