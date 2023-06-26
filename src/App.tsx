import React from "react";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";
import ListStreamer from "./components/pages/ListStreamer";
import SingleStreamer from "./components/pages/SingleStreamer";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/streamers" element={<ListStreamer />} />
				<Route path="/streamers/:streamerId" element={<SingleStreamer />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
