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
		<option
			className="streamerForm__addForm__field field-option"
			value={platform}
			key={platform}
		>
			{platform}
		</option>
	));

	return (
		<section className="streamerForm">
			<h2 className="streamerForm__heading H2">Streamer Submission Form</h2>
			<form onSubmit={addStreamer} className="streamerForm__addForm">
				<label className="streamerForm__addForm__label label-name">
					Streamer name
					<input
						className="streamerForm__addForm__field field-text"
						type="text"
						value={form.name}
						onChange={e => updateForm("name", e.target.value)}
					/>
				</label>
				<label className="streamerForm__addForm__label label-platform">
					Platrofm
					<select
						className="streamerForm__addForm__field field-select"
						name="platforms"
						value={form.platform}
						onChange={e => updateForm("platform", e.target.value)}
					>
						{platforms}
					</select>
				</label>
				<label className="streamerForm__addForm__label label-description">
					Description
					<textarea
						className="streamerForm__addForm__field field-textarea"
						onChange={e => updateForm("description", e.target.value)}
						value={form.description}
					/>
				</label>
				<button className="streamerForm__addForm__button btn">
					Add Streamer
				</button>
			</form>
		</section>
	);
};

export default StreamerSubmissionForm;
