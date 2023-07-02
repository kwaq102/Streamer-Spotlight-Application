import React, { useEffect, useState, createContext } from "react";
import { StreamerEntity } from "types";
import Navigation from "./components/Navigation";
import { Navigate, Route, Routes } from "react-router";
import ListStreamersPage from "./components/pages/ListStreamersPage";
import ErrorPage from "./components/pages/ErrorPage";
import SingleStreamer from "./components/pages/SingleStreamer";
import StreamerSelect from "./components/streamers/StreamerSelect";
import Footer from "./components/Footer";

interface StreamerContextType {
	streamers: StreamerEntity[];
	setStreamerId: (id: string) => void;
}

export const StreamerContext = createContext<StreamerContextType>({
	streamers: [],
	setStreamerId: () => {},
});

function App() {
	const [streamers, setStreamers] = useState<StreamerEntity[]>([]);
	const [streamerId, setStreamerId] = useState<string>("");

	console.log(streamerId);

	const refreshStreamers = async () => {
		const res = await fetch("http://localhost:3001/streamers");
		const data = await res.json();
		setStreamers(data);
	};

	useEffect(() => {
		refreshStreamers();
	}, []);

	return (
		<>
			<div className="App">
				<Navigation streamerId={streamerId} setStreamerId={setStreamerId} />
				<StreamerContext.Provider value={{ streamers, setStreamerId }}>
					<Routes>
						<Route path="/" element={<Navigate replace to="/streamers" />} />
						<Route
							path="/streamers"
							element={
								<ListStreamersPage refreshStreamers={refreshStreamers} />
							}
						/>
						<Route
							path={`/streamers/streamer-info`}
							element={<StreamerSelect />}
						/>
						<Route
							path={`/streamers/:${streamerId}`}
							element={<SingleStreamer streamerId={streamerId} />}
						/>
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</StreamerContext.Provider>
				<Footer />
			</div>
		</>
	);
}

export default App;
