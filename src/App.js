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
import MyPage from "./component/page/MyPage";

function App() {
  return (
	
	<Routes>
		<Route index element={<OnboardingPage />} />
		<Route path="login" element={<LoginPage />} />
		<Route path="signup" element={<SignupPage />} />
    <Route path="my" element={<MyPage />} />
		{/* <Route path="main/:communityid" element={<MainPage />} /> */}
	</Routes>
  );
}

export default App;