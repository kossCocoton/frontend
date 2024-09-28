import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import './index.css';
import styled from "styled-components";

// import MainPage from "./component/page/MainPage";
import LoginPage from "./component/page/LoginPage";
import SignupPage from "./component/page/SignupPage";
import OnboardingPage from "./component/page/OnboardingPage";

function App() {
  return (
	
	<Routes>
		<Route index element={<OnboardingPage />} />
		<Route path="login" element={<LoginPage />} />
		<Route path="signup" element={<SignupPage />} />
		{/* <Route path="main/:communityid" element={<MainPage />} /> */}
	</Routes>
  );
}

export default App;