import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from '../../Layout';
import EmotionTrash from "../img/EmotionTrash.png";
import Button from "../ui/Button";
import SelectEmotion from "../page/SelectEmotion"; // 모달 컴포넌트 임포트
import axios from 'axios';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    height: 85vh;
`;

const TrashCanContainer = styled.div`
    width: 330px;
    height: 480px;
    background-image: url(${EmotionTrash});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: relative;
    overflow: hidden;
`;

const Bubble = styled.div`
    background-color: ${({ color }) => color};
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${({ left }) => left};
    bottom: ${({ bottom }) => bottom};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 1.5em;
`;

const emotionConfig = {
    '😁': { color: '#FFD700' }, // 매우 낮음
    '😐': { color: '#28A745' }, // 낮음
    '😫': { color: '#007BFF' }, // 높음
    '😠': { color: '#FF5733' }, // 매우 높음
};

function EmotionPage() {
    const [bubbles, setBubbles] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const bubbleRadius = 35;

    useEffect(() => {
        const fetchEmotions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/emotion'); // API 요청
                const data = response.data.emotions || []; // 기본값으로 빈 배열 설정

                const newBubbles = [];
                const trashCanWidth = 392;
                const trashCanHeight = 548;
                const maxHeight = 400;

                data.forEach((emotion) => {
                    const { emoji } = emotion;
                    const { color } = emotionConfig[emoji] || { color: '#FFFFFF' }; // 기본값 설정

                    for (let i = 0; i < 3; i++) {
                        let positionFound = false;

                        while (!positionFound) {
                            const x = Math.random() * (trashCanWidth - bubbleRadius * 2) + bubbleRadius;
                            const y = Math.random() * (maxHeight - bubbleRadius * 2) + bubbleRadius;

                            const overlap = newBubbles.some(existingBubble => {
                                const existingX = parseFloat(existingBubble.left);
                                const existingY = parseFloat(existingBubble.bottom) + bubbleRadius;
                                const distance = Math.sqrt((existingX - x) ** 2 + (existingY - y) ** 2);
                                return distance < bubbleRadius * 2;
                            });

                            if (!overlap && (y <= trashCanHeight - bubbleRadius)) {
                                newBubbles.push({
                                    color: color, // 이모지에 맞는 색상 설정
                                    emoji: emoji,
                                    left: `${x}px`,
                                    bottom: `${y}px`
                                });
                                positionFound = true;
                            }
                        }
                    }
                });

                newBubbles.sort((a, b) => parseFloat(a.bottom) - parseFloat(b.bottom));
                setBubbles(newBubbles);
            } catch (error) {
                console.error('감정 데이터 가져오기 실패:', error);
            }
        };

        fetchEmotions(); // 컴포넌트 마운트 시 감정 데이터 가져오기
    }, []);

    const handleButtonClick = () => {
        setModalIsOpen(true); // 버튼 클릭 시 모달 열기
    };

    return (
        <Layout>
            <Container>
                <Button onClick={handleButtonClick} /> {/* 버튼 클릭 시 모달 열리도록 수정 */}
                <TrashCanContainer>
                    {bubbles.map((bubble, index) => (
                        <Bubble 
                            key={index} 
                            color={bubble.color} 
                            left={bubble.left} 
                            bottom={`${parseFloat(bubble.bottom) - bubbleRadius}px`}
                        >
                            {bubble.emoji}
                        </Bubble>
                    ))}
                </TrashCanContainer>
                <SelectEmotion 
                    modalIsOpen={modalIsOpen} 
                    setModalIsOpen={setModalIsOpen} // 모달 닫기 함수
                />
            </Container>
        </Layout>
    );
}

export default EmotionPage;
