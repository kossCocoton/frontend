import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Modal from 'react-modal';
import '../../style/Modal.css';
import Button from "../ui/Button";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

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
    const [selectedEmotion, setSelectedEmotion] = useState(null);

    const handleSubmit = () => {
        // 선택된 감정 처리 (예: 서버로 전송)
        console.log("선택된 감정:", selectedEmotion);
        setModalIsOpen(false); // 모달 닫기
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
                                value="😁" // 이모지 값으로 변경
                                checked={selectedEmotion === '😁'} 
                                onChange={() => setSelectedEmotion('😁')} 
                            />
                            😁
                        </EmotionOption>
                        <EmotionOption>
                            <RadioInput 
                                type="radio" 
                                name="emotion" 
                                value="😐" // 이모지 값으로 변경
                                checked={selectedEmotion === '😐'} 
                                onChange={() => setSelectedEmotion('😐')} 
                            />
                            😐
                        </EmotionOption>
                        <EmotionOption>
                            <RadioInput 
                                type="radio" 
                                name="emotion" 
                                value="😫" // 이모지 값으로 변경
                                checked={selectedEmotion === '😫'} 
                                onChange={() => setSelectedEmotion('😫')} 
                            />
                            😫
                        </EmotionOption>
                        <EmotionOption>
                            <RadioInput 
                                type="radio" 
                                name="emotion" 
                                value="😠" // 이모지 값으로 변경
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
