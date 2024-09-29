import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import Layout from "../../Layout";
import Button from "../ui/Button";
import CalendarView from "../ui/CalendarView";

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
    const location = useLocation();
    const navigate = useNavigate();
    const { score } = location.state || {}; // 상태에서 점수 가져오기
    const [nickname, setNickname] = useState("");
    const [diaryList, setDiaryList] = useState([]);
    const [userStressLevel, setUserStressLevel] = useState(0); // 초기값 0

    useEffect(() => {
        const fetchMyInfo = async () => {
            try {
                const response = await axios.get('http://localhost:8080/my');
                if (response.status === 200) {
                    const data = response.data;
                    setNickname(data.nickname);
                    setDiaryList(data.diaryList);
                    if (data.stressList.length > 0) {
                        setUserStressLevel(data.stressList[0].stress); // 첫 번째 스트레스 지수로 설정
                    }
                }
            } catch (error) {
                console.error('에러:', error.response ? error.response.data : error.message);
            }
        };

        // 데이터가 없는 경우에만 가져오기
        if (!nickname && diaryList.length === 0) {
            fetchMyInfo(); // 컴포넌트 마운트 시 데이터 가져오기
        }
    }, [nickname, diaryList]);

    useEffect(() => {
        if (score !== undefined) {
            setUserStressLevel(prev => (prev === 0 ? score : prev)); // 기존 값이 0일 때만 업데이트
        }
    }, [score]);

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
                        <UserNickNameText>{nickname}</UserNickNameText>
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
                <CalendarView diaryList={diaryList} />
            </Wrapper>
        </Layout>
    );
}

export default MyPage;
