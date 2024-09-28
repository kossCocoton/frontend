import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import '../../style/CalendarView.css';
import styled from "styled-components";
import moment from "moment";
import DiaryViewPage from "../page/DiaryViewPage";

// 스타일 컴포넌트 정의
const Wrapper = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Container = styled.div`
    justify-content: center;
    border-radius: 20px;
    border: 1px solid #E2E2E2;
    background-color: #FFFFFF;
`;

// 캘린더에서 날짜 색상 결정
const getStressColor = (stressLevel) => {
    if (stressLevel >= 0 && stressLevel <= 12.5) return '#FFD700'; // 노란색
    if (stressLevel >= 13 && stressLevel <= 31.25) return '#4CAF50'; // 초록색
    if (stressLevel >= 32.5 && stressLevel <= 47.5) return '#2196F3'; // 파란색
    if (stressLevel >= 50 && stressLevel <= 100) return '#F44336'; // 빨간색
    return '#E2E2E2'; // 기본 색상
};

function CalendarView(props) {
    const { comname } = props;
    const [value, onChange] = useState(new Date());
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [stressData, setStressData] = useState({}); // 날짜별 스트레스 데이터를 저장할 객체
    const navigate = useNavigate();

    useEffect(() => {
        // 예시로 데이터베이스에서 데이터를 조회하는 함수 (여기서 스트레스 지수 데이터 가져오기)
        const fetchData = async () => {
            // 여기에서 실제 API 호출로 데이터를 가져옵니다.
            const response = await fetch("/api/stress-data"); // API 주소 수정 필요
            const data = await response.json();
            const formattedData = {};

            // 데이터를 YYYYMMDD 형식으로 변환하여 객체에 저장
            data.forEach(item => {
                const dateKey = moment(item.date).format('YYMMDD');
                formattedData[dateKey] = item.stressLevel;
            });

            setStressData(formattedData);
        };

        fetchData();
    }, []);

    return (
        <Wrapper>
            <Container>
                <Calendar
                    locale="en"
                    calendarType="gregory"
                    onChange={onChange}
                    value={value}
                    next2Label={null}
                    prev2Label={null}
                    minDetail="year"
                    onClickDay={() => {
                        setModalIsOpen(true); // 날짜 클릭 시 모달 열기
                    }}
                    tileContent={({ date }) => {
                        const dateKey = moment(date).format('YYMMDD');
                        const stressLevel = stressData[dateKey];
                        return (
                            <div
                                style={{
                                    backgroundColor: stressLevel ? getStressColor(stressLevel) : 'transparent',
                                    borderRadius: '50%',
                                    width: '100%',
                                    height: '100%',
                                    opacity: 0.5
                                }}
                            />
                        );
                    }}
                />
            </Container>

            <DiaryViewPage
                date={moment(value).format('YYMMDD')}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
            />
        </Wrapper>
    );
}

export default CalendarView;
