import React, { useState, SyntheticEvent } from "react";
import { streamingPlatformList } from "../../utils/streamingPlatformList";

const StreamerSubmissionForm = () => {
	const [form, setForm] = useState({
		name: "",
		platform: "",
		description: "",
	});

	const updateForm = (key: string, value: string) => {
		setForm(form => ({
			...form,
			[key]: value,
		}));
	};

	const clearForm = () => {
		setForm({ name: "", platform: "", description: "" });
	};

	const addStreamer = async (e: SyntheticEvent) => {
		e.preventDefault();
		console.log(form);
		console.log("dodajemy streamera");

		try {
			await fetch(`http://localhost:3001/streamers`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...form, upvotes: 0, downvotes: 0 }),
			});
		} catch (e) {
			console.error(e);
		}

		clearForm();
	};

	const platforms = streamingPlatformList.map(platform => (
		<option value={platform} key={platform}>
			{platform}
		</option>
	));

	return (
		<section>
			<h2>Streamer Submission Form</h2>
			<form onSubmit={addStreamer}>
				<label>
					Streamer name:
					<input
						type="text"
						value={form.name}
						onChange={e => updateForm("name", e.target.value)}
					/>
				</label>
				<label>
					Platrofm:
					<select
						name="platforms"
						value={form.platform}
						onChange={e => updateForm("platform", e.target.value)}
					>
						{platforms}
					</select>
				</label>
				<label>
					Description:
					<textarea
						onChange={e => updateForm("description", e.target.value)}
						value={form.description}
					/>
				</label>
				<button>Add Streamer</button>
			</form>
		</section>
	);
};

export default StreamerSubmissionForm;
