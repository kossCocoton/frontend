import React, { useState } from "react";
import styled from "styled-components";
import Modal from 'react-modal';
import Button from "../ui/Button";
import axios from 'axios';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const EmotionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
`;

const EmotionOption = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 100px;
`;

const RadioInput = styled.input`
    margin-right: 10px;
`;

function SelectEmotion({ modalIsOpen, setModalIsOpen }) {
    const [selectedEmotion, setSelectedEmotion] = useState("");

    const handleSubmit = async () => {
        if (!selectedEmotion) {
            alert("감정을 선택하세요.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/emotion', {emoji: selectedEmotion}, {
                headers: {
                    'Content-Type' : 'application/json',
                }
            }); // 이모지를 문자열로 전송

            console.log("서버 응답:", response.data);
            setModalIsOpen(false); // 모달 닫기
        } catch (error) {
            console.error("이모지 전송 실패:", error);
            alert("이모지 전송에 실패했습니다.");
        }
    };

    return (
        <Wrapper>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1,
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: "#fff",
                        overflow: "auto",
                        borderRadius: "30px",
                        outline: "none",
                        zIndex: 10,
                        top: '10vh',
                        left: '20vw',
                        right: '20vw',
                        bottom: '10vh',
                        padding: '20px',
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    },
                }}
                onRequestClose={() => setModalIsOpen(false)} // 모달 닫기
            >
                <ModalContent>
                    <EmotionContainer>
                        <EmotionOption>
                            <RadioInput 
                                type="radio" 
                                name="emotion" 
                                value="😁" 
                                checked={selectedEmotion === '😁'} 
                                onChange={() => setSelectedEmotion('😁')} 
                            />
                            😁
                        </EmotionOption>
                        <EmotionOption>
                            <RadioInput 
                                type="radio" 
                                name="emotion" 
                                value="😐" 
                                checked={selectedEmotion === '😐'} 
                                onChange={() => setSelectedEmotion('😐')} 
                            />
                            😐
                        </EmotionOption>
                        <EmotionOption>
                            <RadioInput 
                                type="radio" 
                                name="emotion" 
                                value="😫" 
                                checked={selectedEmotion === '😫'} 
                                onChange={() => setSelectedEmotion('😫')} 
                            />
                            😫
                        </EmotionOption>
                        <EmotionOption>
                            <RadioInput 
                                type="radio" 
                                name="emotion" 
                                value="😠" 
                                checked={selectedEmotion === '😠'} 
                                onChange={() => setSelectedEmotion('😠')} 
                            />
                            😠
                        </EmotionOption>
                    </EmotionContainer>
                    <Button 
                        title="버리기" 
                        onClick={handleSubmit} 
                        style={{ marginTop: '20px' }} // 버튼에 마진 추가
                    />
                </ModalContent>
            </Modal>
        </Wrapper>
    );
}

export default SelectEmotion;
