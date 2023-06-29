import React from "react";
import StreamerSubmissionForm from "../streamers/StreamerSubmissionForm";
import ListStreamers from "../streamers/ListStreamer";

const ListStreamersPage = () => {
	return (
		<>
			<StreamerSubmissionForm />
			<ListStreamers />
		</>
	);
};

export default ListStreamersPage;
