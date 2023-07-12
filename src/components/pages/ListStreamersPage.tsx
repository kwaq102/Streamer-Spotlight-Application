import React from "react";
import StreamerSubmissionForm from "../streamers/StreamerSubmissionForm";
import ListStreamers from "../streamers/ListStreamer";

interface Props {
	errorInfo: boolean;
	refreshStreamers: () => void;
	loader: boolean;
}

const ListStreamersPage = ({ refreshStreamers, errorInfo, loader }: Props) => {
	return (
		<>
			<StreamerSubmissionForm refreshStreamers={refreshStreamers} />
			<ListStreamers
				refreshStreamers={refreshStreamers}
				errorInfo={errorInfo}
				loader={loader}
			/>
		</>
	);
};

export default ListStreamersPage;
