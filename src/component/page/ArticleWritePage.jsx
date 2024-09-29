import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import moment from 'moment';
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const ModalWrapper = styled.div`
    display: ${({ modalIsOpen }) => (modalIsOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
`;

const TitleText = styled.div`
    margin: 2vh 0;
    font-size: 2vh;
    color: #545454;
    font-weight: 500;
`;

const StyledInputForm = styled.div`
    > input {
        width: 100%;
        padding: 10px;
        font-size: 2vh;
        background-color: #F7F0EB;
        border-radius: 20px;
    }
`;

const StyledInputContent = styled.div`
    > textarea {
        width: 100%;
        height: 20vh;
        font-size: 2vh;
        background-color: #F7F0EB;
        border-radius: 20px;
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3vh;
`;

class WriteData {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }
  }

function ArticleWritePage({ modalIsOpen, setModalIsOpen }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const writeData = new WriteData(title,content);
        try {
            // API에 POST 요청
            const response = await axios.post('http://localhost:8080/api/diary', writeData);
      
          } catch (error) {
            console.error('글 작성 실패', error);
            alert('글 작성 실패');
          }
        // 폼 제출 로직
        setModalIsOpen(false);
        navigate("/community");
    };

    return (
        <ModalWrapper modalIsOpen={modalIsOpen}>
            <ModalContent>
                <TitleText>글 제목</TitleText>
                <StyledInputForm>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="글 제목"
                    />
                </StyledInputForm>

                <TitleText>글 내용</TitleText>
                <StyledInputContent>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="글을 작성하세요!"
                    />
                </StyledInputContent>

                <StyledButtonContainer>
                    <Button title="작성하기" onClick={(e) => handleSubmit(e)} />
                </StyledButtonContainer>
            </ModalContent>
        </ModalWrapper>
    );
}

export default ArticleWritePage;
