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
import CommunityPage  from "./component/page/CommunityPage";
import TestPage from "./component/page/TestPage";
import MyPage from "./component/page/MyPage";
import DiaryWritePage from "./component/page/DiaryWritePage";
import EmotionPage from "./component/page/EmotionPage";
import { EmotionProvider } from "./component/list/EmotionList";

function App() {
  return (
	<EmotionProvider>
	<Routes>
		<Route index element={<OnboardingPage />} />
		<Route path="login" element={<LoginPage />} />
		<Route path="signup" element={<SignupPage />} />
		<Route path="community" element={<CommunityPage />} />
    <Route path="test" element={<TestPage />} />
    <Route path="my" element={<MyPage />} />
		<Route path="diary" element={<DiaryWritePage />} />
		<Route path="emotion" element={<EmotionPage />} />
		{/* <Route path="main/:communityid" element={<MainPage />} /> */}
	</Routes>
	</EmotionProvider>
  );
}

export default App;