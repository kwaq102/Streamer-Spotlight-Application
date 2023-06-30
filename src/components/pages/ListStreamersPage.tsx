import React from "react";
import StreamerSubmissionForm from "../streamers/StreamerSubmissionForm";
import ListStreamers from "../streamers/ListStreamer";

interface Props {
	refreshStreamers: () => void;
}

const ListStreamersPage = ({ refreshStreamers }: Props) => {
	return (
		<>
			<StreamerSubmissionForm />
			<ListStreamers refreshStreamers={refreshStreamers} />
		</>
	);
};

export default ListStreamersPage;
