import React from "react";
import { streamingPlatformList } from "../../utils/streamingPlatformList";

const StreamerSubmissionForm = () => {
	const platforms = streamingPlatformList.map(platform => (
		<option value={platform} key={platform}>
			{platform}
		</option>
	));

	return (
		<section>
			<h2>Streamer Submission Form</h2>
			<form>
				<label>
					Streamer name:
					<input type="text" />
				</label>
				<label>
					Platrofm:
					<select name="platforms">{platforms}</select>
				</label>
				<label>
					Description:
					<textarea />
				</label>
			</form>
		</section>
	);
};

export default StreamerSubmissionForm;
