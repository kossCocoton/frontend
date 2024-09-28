import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import EmoBin from '../img/EmoBin.svg';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const LogoImage = styled.img`
    width: 360px; 
    height: 110px; 
`;

const StartButton = styled.div`
    padding: 12px 200px;
    background-color: #E3D4CA;
    border-radius: 20px;
    cursor: pointer;
`;

const Subtitle = styled.h3`
    font-size: 30px;
    font-weight: 200;
`;

const OnboardingPage = () => {
    const navigate = useNavigate(); 

    const handleStartClick = () => {
        navigate('/login'); 
    };

    return (
        <Container>
            <LogoImage src={ EmoBin } />
            <StartButton onClick={handleStartClick}>시작하기</StartButton>
            <Subtitle>감정은 쌓지 말고, 쓰레기통에 버리세요.</Subtitle>
        </Container>
    );
};

export default OnboardingPage;