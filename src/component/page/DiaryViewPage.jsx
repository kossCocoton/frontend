import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Modal from 'react-modal';
import '../../style/Modal.css';
import Button from "../ui/Button";
import axios from 'axios';

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

const Wrapper = styled.div``;

const DisplayEmoticon = styled.div``;

const DateText = styled.div`
    text-align: center;
    margin-bottom: 3vh;
    font-size: 2.5vh;
    color: #333;
`;

const DisplayText = styled.div`
    margin-top: 1vh;
    border: 0px solid;
    width: 100%;
    height: 8vh;
    padding: 10px;
    font-size: 2vh;
    font-weight: 500;
    background-color: #F7F0EB;
    border-radius: 20px;
    display: flex;
    align-items: center;
`;

const DisplayContent = styled.div`
    margin-top: 3vh;
    border: 0px solid;
    width: 100%;
    height: 20vh;
    font-size: 2vh;
    font-weight: 500;
    background-color: #F7F0EB;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const StyledModal = {
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
        left: '10vw',
        right: '10vw',
        bottom: '10vh',
        padding: '20px',
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
};

const ModalStyle = styled.div`
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.4s ease-in;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: visibility 0.2s ease-out;
`;

const OverlayStyle = styled.div`
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.2s ease-in;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: visibility 0.2s ease-out;
`;

function DiaryViewPage({ date, modalIsOpen, setModalIsOpen, diaryTitle, diaryContent }) {
    const [diary, setDiary] = useState({ title: diaryTitle, content: diaryContent });
    const navigate = useNavigate();
    useEffect(() => {
        // Update diary state when props change
        setDiary({ title: diaryTitle, content: diaryContent });
    }, [diaryTitle, diaryContent]);

    return (
        <Wrapper>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                style={StyledModal}
                onRequestClose={() => setModalIsOpen(false)}
                contentElement={(props, children) => (
                    <ModalStyle isOpen={modalIsOpen} {...props}>
                        {children}
                    </ModalStyle>
                )}
                overlayElement={(props, contentElement) => (
                    <OverlayStyle isOpen={modalIsOpen} {...props}>
                        {contentElement}
                    </OverlayStyle>
                )}
            >
                <DisplayEmoticon></DisplayEmoticon>
                <DateText>{date}</DateText>
                <DisplayText>{diary.title || "제목이 없습니다."}</DisplayText>
                <DisplayContent>{diary.content || "내용이 없습니다."}</DisplayContent>
                <ButtonContainer>
                    <Button
                        title="해소하기"
                        onClick={() => {
                            navigate("/emotion");
                        }}
                    />
                    <Button
                        title="확인"
                        onClick={() => {
                            setModalIsOpen(false);
                        }}
                    />
                </ButtonContainer>
            </Modal>
        </Wrapper>
    );
}

export default DiaryViewPage;