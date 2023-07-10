import React from "react";
import StreamerSubmissionForm from "../streamers/StreamerSubmissionForm";
import ListStreamers from "../streamers/ListStreamer";

interface Props {
	errorInfo: boolean;
	refreshStreamers: () => void;
}

const ListStreamersPage = ({ refreshStreamers, errorInfo }: Props) => {
	return (
		<>
			<StreamerSubmissionForm refreshStreamers={refreshStreamers} />
			<ListStreamers
				refreshStreamers={refreshStreamers}
				errorInfo={errorInfo}
			/>
		</>
	);
};

export default ListStreamersPage;
