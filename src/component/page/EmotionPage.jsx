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
    width: 50vw;
    height: 70vh;
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
    width: 50px; // 구슬 크기 조정
    height: 50px; // 구슬 크기 조정
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

    useEffect(() => {
        const mockData = [
            { emotion: "yellow" },
            { emotion: "green" },
            { emotion: "blue" },
            { emotion: "red" },
        ];

        const mappedBubbles = mockData.map(bubble => {
            const { emotion } = bubble;
            return emotions[emotion]; // 해당 이모지와 색상 반환
        });

        setBubbles(mappedBubbles);
    }, [emotions]);

    return (
        <Layout>
            <Container>
                <TrashCanContainer>
                    {bubbles.map((bubble, index) => (
                        <Bubble 
                            key={index} 
                            color={bubble.color} 
                            left={`${(index + 1) * 10}%`} // 위치 조정
                            bottom={`${5 + index * 15}px`} // 떨어지는 느낌을 위해 아래에서 위로
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
