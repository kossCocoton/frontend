import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../style/Validation.css";
import Input from "../ui/Input";
import Button from "../ui/Button";
import CalendarView from "../ui/CalendarView";
import Layout from "../../Layout";

const Wrapper = styled.div`
    height: 95vh;
    padding: 3vw 3vw;
    display: flex;
    width: 100vw;
`;

const MyInfoContainer = styled.div`
    width: 50vw;
    padding-right: 3vw;
`;

const InfoText = styled.div`
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 20px;
`;

const StressNumberContainer = styled.div`
    width: 30vw;
    display: flex;
    align-items: end;
    margin-bottom: 3vh;
`;

const Stress = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: ${props => {
        const stressLevel = props.stressLevel;

        if (stressLevel >= 0 && stressLevel <= 12.5) return '#FFD700'; // 노란색
        if (stressLevel >= 13 && stressLevel <= 31.25) return '#4CAF50'; // 초록색
        if (stressLevel >= 32.5 && stressLevel <= 47.5) return '#2196F3'; // 파란색
        if (stressLevel >= 50 && stressLevel <= 100) return '#F44336'; // 빨간색
        return '#E2E2E2'; // 기본 색상
    }};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
`;

const UserStressText = styled.div`
    font-weight: 700;
    font-size: 23px;
`;

const UserNickNameText = styled.div`
    font-size: 15px;
`;

const StressGraphContainer = styled.div`
    background-color: #E2E2E2;
    width: 40vw;
    height: 20vh;
    margin: 10vh 0vh;
`;

const MyPage = () => {
    const navigate = useNavigate();

    // 실제 사용자 스트레스 지수를 가져오는 로직 (예시로 80으로 설정)
    const userStressLevel = 12; // 여기에 실제 스트레스 지수를 설정하세요

    return (
        <Layout>
            <Wrapper>
                <MyInfoContainer>
                    <InfoText>내 정보</InfoText>
                    <StressNumberContainer>
                        <Stress stressLevel={userStressLevel}>
                            <UserStressText>{userStressLevel}</UserStressText>
                            <UserStressText>/100</UserStressText>
                        </Stress>
                        <UserNickNameText>UserName</UserNickNameText>
                    </StressNumberContainer>
                    <Button
                        title="일기쓰기"
                        onClick={() => {
                            navigate("/diary");
                        }} />
                    <StressGraphContainer>
                        스트레스 지수 그래프 추가   
                    </StressGraphContainer>
                </MyInfoContainer>
                <CalendarView />
            </Wrapper>
        </Layout>
    );
}

export default MyPage;
