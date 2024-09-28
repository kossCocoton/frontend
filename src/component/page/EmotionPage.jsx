import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from '../../Layout';
import { useEmotions } from '../../component/list/EmotionList'; // 경로에 맞게 수정
import EmotionTrash from "../img/EmotionTrash.png";

const Container = styled.div`
    display: flex;
    justify-content: center; // 중앙 정렬
    align-items: flex-end; // 아래 정렬
    height: 70vh; // 전체 높이 조정
`;

const TrashCanContainer = styled.div`
    width: 392px;
    height: 548px;
    background-image: url(${EmotionTrash});
    background-repeat: no-repeat;
    background-size: contain; // 이미지 크기에 맞춰 조절
    background-position: center; // 이미지 중앙 정렬
    position: relative; // 자식 요소를 포지셔닝할 수 있도록
    overflow: hidden; // 자식 요소가 컨테이너를 벗어나지 않도록
`;

const Bubble = styled.div`
    background-color: ${({ color }) => color};
    border-radius: 50%;
    width: 70px; // 구슬 크기 조정
    height: 70px; // 구슬 크기 조정
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; // 절대 위치로 변경
    left: ${({ left }) => left}; // 구슬 위치를 외부에서 조정
    bottom: ${({ bottom }) => bottom}; // 바닥에서의 위치
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 그림자 추가
    font-size: 1.5em; // 이모지 크기 조정
`;

function EmotionPage() {
    const emotions = useEmotions();
    const [bubbles, setBubbles] = useState([]);

    // 구슬의 반지름 정의
    const bubbleRadius = 35; // 70px 크기의 구슬의 반지름

    useEffect(() => {
        const mockData = [
            { emotion: "yellow" },
            { emotion: "green" },
            { emotion: "blue" },
            { emotion: "red" }
        ];

        const newBubbles = [];

        // 캠퍼스와 쓰레기통의 크기
        const trashCanWidth = 392;
        const trashCanHeight = 548;
        const maxHeight = 400; // 감정 구슬들이 쌓일 최대 높이

        // 각 색상마다 3개씩 추가
        mockData.forEach(bubble => {
            const { emotion } = bubble;

            for (let i = 0; i < 3; i++) {
                let positionFound = false;

                while (!positionFound) {
                    // 랜덤 위치 생성
                    const x = Math.random() * (trashCanWidth - bubbleRadius * 2) + bubbleRadius;
                    const y = Math.random() * (maxHeight - bubbleRadius * 2) + bubbleRadius; // maxHeight를 기준으로 조정

                    // 겹치는지 확인
                    const overlap = newBubbles.some(existingBubble => {
                        const existingX = parseFloat(existingBubble.left);
                        const existingY = parseFloat(existingBubble.bottom) + bubbleRadius;
                        const distance = Math.sqrt((existingX - x) ** 2 + (existingY - y) ** 2);
                        return distance < bubbleRadius * 2; // 반지름의 합
                    });

                    // 쓰레기통 범위 내에 완전히 포함되는지 확인
                    if (!overlap && (y <= trashCanHeight - bubbleRadius)) {
                        // 위치가 겹치지 않으면 구슬 추가
                        newBubbles.push({
                            color: emotions[emotion].color,
                            emoji: emotions[emotion].emoji,
                            left: `${x}px`,
                            bottom: `${y}px`
                        });
                        positionFound = true;
                    }
                }
            }
        });

        // y값을 기준으로 정렬하여 아래에서부터 쌓이도록
        newBubbles.sort((a, b) => parseFloat(a.bottom) - parseFloat(b.bottom));

        setBubbles(newBubbles);
    }, [emotions]);

    return (
        <Layout>
            <Container>
                <TrashCanContainer>
                    {bubbles.map((bubble, index) => (
                        <Bubble 
                            key={index} 
                            color={bubble.color} 
                            left={bubble.left} 
                            bottom={`${parseFloat(bubble.bottom) - bubbleRadius}px`} // 구슬이 짤리지 않도록 보정
                        >
                            {bubble.emoji}
                        </Bubble>
                    ))}
                </TrashCanContainer>
            </Container>
        </Layout>
    );
}

export default EmotionPage;