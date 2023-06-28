import React from "react";
import Navigation from "./components/Navigation";
import { Navigate, Route, Routes } from "react-router";
import ListStreamersPage from "./components/pages/ListStreamersPage";
import ErrorPage from "./components/pages/ErrorPage";
import SingleStreamer from "./components/pages/SingleStreamer";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<Navigate replace to="/streamers" />} />
				<Route path="/streamers" element={<ListStreamersPage />} />
				<Route path="/streamers/:streamerId" element={<SingleStreamer />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
