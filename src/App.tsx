import React, { useEffect, useState, createContext, MouseEvent } from "react";
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
	const [loader, setLoader] = useState(false);
	const [showNav, setShowNav] = useState(false);
	const [errorInfo, setErrorInfo] = useState(false);

	const closeNav = (e: MouseEvent) => {
		if (showNav) {
			setShowNav(false);
		} else return;
	};

	const refreshStreamers = async () => {
		try {
			setLoader(true);
			const res = await fetch("http://localhost:3001/streamers");

			if (res.status === 500) {
				setErrorInfo(true);
				return;
			}

			const data = await res.json();
			setStreamers(data);
		} catch (e: any) {
			if (e.message === "Failed to fetch") {
				setErrorInfo(true);
				console.error("Failed to server, please try again later...");
			}
		} finally {
			setLoader(false);
		}
	};

	useEffect(() => {
		setErrorInfo(false);
		refreshStreamers();
	}, []);

	return (
		<>
			<div className="App" onClick={closeNav}>
				<Navigation
					streamerId={streamerId}
					setStreamerId={setStreamerId}
					showNav={showNav}
					setShowNav={setShowNav}
					closeNav={closeNav}
				/>
				<StreamerContext.Provider value={{ streamers, setStreamerId }}>
					<Routes>
						<Route path="/" element={<Navigate replace to="/streamers" />} />
						<Route
							path="/streamers"
							element={
								<ListStreamersPage
									refreshStreamers={refreshStreamers}
									errorInfo={errorInfo}
									loader={loader}
								/>
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
