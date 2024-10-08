import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
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
`;

const DisplayEmoticon = styled.div`
    
`;

const DateText = styled.div`
    text-align: center;
    margin-bottom: 3vh;
    font-size: 2.5vh;
    color: #333;
`;

const CommentsContainer = styled.div`
    margin-top: 2vh;
    width: 100%;
`;

const Comment = styled.div`
    background-color: #e8e8e8;
    padding: 10px;
    border-radius: 10px;
    margin: 5px 0;
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
    height: 15vh;
    font-size: 2vh;
    font-weight: 500;
    background-color: #F7F0EB;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
`;

const ButtonContainer  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Text = styled.div`
    
`

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
        left: '20vw',
        right: '20vw',
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

function ArticleViewPage({ post, modalIsOpen, setModalIsOpen }) {
    const navigate = useNavigate();

    if (!post) return null; // 선택된 게시글이 없으면 아무것도 렌더링하지 않음

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
                <Text>{post.nickname} / {post.nickname} / {post.job}</Text>
                <DateText>{post.date}</DateText>
                <DisplayText>{post.title}</DisplayText>
                <DisplayContent>{post.content}</DisplayContent>

                <CommentsContainer>
                    {post.comments && post.comments.map((comment, index) => (
                        <Comment key={index}>{comment}</Comment>
                    ))}
                </CommentsContainer>
                <ButtonContainer>
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

export default ArticleViewPage;