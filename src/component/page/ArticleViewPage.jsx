import React from "react";
import styled from "styled-components";
import Modal from 'react-modal';
import Button from "../ui/Button";

const Wrapper = styled.div``;

const DisplayText = styled.div`
    margin-top: 1vh;
    font-size: 2vh;
    font-weight: 500;
    background-color: #F7F0EB;
    border-radius: 20px;
    padding: 10px;
`;

const DisplayContent = styled.div`
    margin-top: 3vh;
    font-size: 2vh;
    font-weight: 500;
    background-color: #F7F0EB;
    border-radius: 20px;
    padding: 10px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const StyledModal = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        background: "#fff",
        borderRadius: "30px",
        padding: '20px',
        animation: 'fadeIn 0.5s',
    },
};

Modal.setAppElement('#root');

function ArticleViewPage({ modalIsOpen, setModalIsOpen, post }) {
    if (!post) return null; // Prevent rendering if no post is selected

    return (
        <Wrapper>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)} // Close modal
                style={StyledModal}
                ariaHideApp={false}
            >
                <DisplayText>{post.title}</DisplayText>
                <DisplayContent>{post.content}</DisplayContent>
                <DisplayText>작성자: {post.nickname} ({post.gender})</DisplayText>
                <DisplayText>카테고리: {post.category}</DisplayText>
                <DisplayText>날짜: {post.date}</DisplayText>
                <DisplayText>댓글:</DisplayText>
                <DisplayContent>
                    {post.comments.length > 0 ? (
                        post.comments.map((comment, index) => (
                            <div key={index}>{comment}</div>
                        ))
                    ) : (
                        <div>댓글이 없습니다.</div>
                    )}
                </DisplayContent>
                <ButtonContainer>
                    <Button title="확인" onClick={() => setModalIsOpen(false)} />
                </ButtonContainer>
            </Modal>
        </Wrapper>
    );
}

export default ArticleViewPage;
