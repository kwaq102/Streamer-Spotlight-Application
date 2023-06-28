import React, { useEffect, useState } from "react";
import { StreamerEntity } from "types";

const ListStreamers = () => {
	const [streamers, setStramers] = useState<StreamerEntity[]>([]);
	useEffect(() => {
		(async () => {
			const res = await fetch("http://localhost:3001/streamers");
			const data = await res.json();

			setStramers(data);
		})();
	}, []);

	return (
		<section>
			<h2>List Streamers</h2>
			<div>
				<h5>lista streamerów z backendu</h5>
				<div>
					<p>Streamer Name</p>
					<p>
						Głosy + <span>jakaś liczba</span>
					</p>
					<p>
						Głosy - <span>jakaś liczba</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default ListStreamers;
