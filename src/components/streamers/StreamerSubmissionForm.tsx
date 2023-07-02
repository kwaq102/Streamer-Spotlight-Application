import React, { useState, useEffect, SyntheticEvent } from "react";
import { streamingPlatformList } from "../../utils/streamingPlatformList";
import { errorStyles } from "../../utils/styles";
import SuccessInfo from "../SuccessInfo";

interface Props {
	refreshStreamers: () => void;
}
const StreamerSubmissionForm = ({ refreshStreamers }: Props) => {
	const [form, setForm] = useState({
		name: "",
		platform: "Twitch",
		description: "",
	});
	const { name, platform, description } = form;

	const [addedStreamer, setAddedStreamer] = useState(false);

	const [nameError, setNameError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);

	const platforms = streamingPlatformList.map(platform => (
		<option
			className="streamerForm__addForm__field field-option"
			value={platform}
			key={platform}
		>
			{platform}
		</option>
	));

	useEffect(() => {
		const timer = setTimeout(() => {
			setAddedStreamer(false);
		}, 6000);

		return () => clearInterval(timer);
	}, [addedStreamer]);

	const updateForm = (key: string, value: string) => {
		setAddedStreamer(false);
		setNameError(false);
		setDescriptionError(false);
		setForm(form => ({
			...form,
			[key]: value,
		}));
	};

	const validateForm = () => {
		if (name.length < 3 || name.length > 50) {
			setNameError(true);
		}
		if (description.length < 5 || description.length > 50000) {
			setDescriptionError(true);
		}
	};

	const clearForm = () => {
		setForm({ name: "", platform: "Twitch", description: "" });
	};

	const addStreamer = async (e: SyntheticEvent) => {
		e.preventDefault();

		if (nameError || descriptionError) return;

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
		refreshStreamers();
		clearForm();
		setAddedStreamer(true);
	};

	return (
		<section className="streamerForm">
			<h2 className="streamerForm__heading H2">Streamer Submission Form</h2>
			<form onSubmit={addStreamer} className="streamerForm__addForm">
				<label className="streamerForm__addForm__label label-name">
					{nameError ? (
						<span
							className="tooltip"
							data-tooltip="The length of name should be between 3 and 50 characters"
						>
							Streamer name
						</span>
					) : (
						<span>Streamer name</span>
					)}

					<input
						className="streamerForm__addForm__field field-text"
						type="text"
						value={name}
						onChange={e => updateForm("name", e.target.value)}
						style={nameError ? errorStyles : {}}
					/>
					{nameError && (
						<span className="streamerForm__addForm__errorText">
							Name is wrong
						</span>
					)}
				</label>
				<label className="streamerForm__addForm__label label-platform">
					<span>Platrofm</span>
					<select
						className="streamerForm__addForm__field field-select"
						name="platforms"
						value={platform}
						onChange={e => updateForm("platform", e.target.value)}
					>
						{platforms}
					</select>
				</label>
				<label className="streamerForm__addForm__label label-description">
					{descriptionError ? (
						<>
							<span
								className="tooltip"
								data-tooltip="The length of description should be between 5 and 50 000 characters"
							>
								Description
							</span>
							<span className="streamerForm__addForm__errorText descriptionError">
								Description is wrong
							</span>
						</>
					) : (
						<span>Description</span>
					)}
					<textarea
						className="streamerForm__addForm__field field-textarea"
						onChange={e => updateForm("description", e.target.value)}
						value={description}
						style={descriptionError ? errorStyles : {}}
					/>
				</label>
				<button
					className="streamerForm__addForm__button btn"
					onClick={validateForm}
				>
					Add Streamer
				</button>
			</form>
			{addedStreamer && <SuccessInfo text="Add streamer has been success!" />}
		</section>
	);
};

export default StreamerSubmissionForm;
