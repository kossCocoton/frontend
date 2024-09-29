import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import moment from 'moment';
import Layout from "../../Layout";
import Form from "react-validation/build/form";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const ContentText = styled.div`
    text-align : center;
    font-size : 2vh;
    font-weight : 600;
`;

const DiaryWriteContainer = styled.div`
    width: 100%;
`;

const TitleText = styled.div`
    display: flex;
    width: 40vw;
    text-align : left;
    margin-left : 3vw;
    margin-right : 3vw;
    margin-top : 2vh;
    font-size: 2vh;
    color: #545454;
    font-weight : 500;
`;

const StyledInputForm = styled.div`
    margin-top : 1vh;
    margin-left : 3vw;
    margin-right : 3vw;

    >input {
        border : 0px solid;
        width : 100%;
        padding-top : 1vh;
        padding-bottom : 1vh;
        font-size: 2vh;
        font-weight : 500;
        background-color: #F7F0EB;
        padding: 10px;
        border-radius: 20px;
    }
    >input::placeholder {
        color: #D9D9D9;
        font-weight : 500;
    }
    >input:focus {
        outline: none;
    }
`;

const StyledInputContent = styled.div`
    margin-top : 1vh;
    margin-left : 3vw;
    margin-right : 3vw;

    >textarea {
        border : 0px solid;
        width : 100%;
        height : 20vh;
        font-size: 2vh;
        word-break:normal;
        resize:none;
        overflow: auto;
        background-color: #F7F0EB;
        padding: 10px;
        border-radius: 20px;
    }
    >textarea::placeholder {
        color: #D9D9D9;
    }
    >textarea:focus {
        outline: none;
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3vh;

    >Button{
        width: 70vw;
        justify-content: center;
        margin-left: 2vh;
    }
`;

class DiaryData {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

function DiaryWritePage() {
    const form = useRef();
    const params = useParams();
    const today = params.date || moment().format('YYMMDD');
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDiaryWrite = async (e) => {
        e.preventDefault();
        const diaryData = new DiaryData(title, content);

        try {
            const response = await axios.post('http://localhost:8080/api/diary', diaryData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200) {
                alert('다이어리 작성 완료!');
                navigate("/test");
            }
        } catch (error) {
            console.error('다이어리 작성 실패', error);
            alert('다이어리 작성 실패: ' + (error.response ? error.response.data.message : error.message));
        }
    };

    return (
        <Layout>
            <Wrapper>
                <ContentText>{today}</ContentText>
                <Form onSubmit={handleDiaryWrite} ref={form}>
                    <DiaryWriteContainer>
                        <TitleText>({title.length}글자)</TitleText>
                        <StyledInputForm>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                maxLength={20}
                                value={title}
                                required
                                onChange={onChangeTitle}
                                placeholder="일기 제목"
                            />
                        </StyledInputForm>

                        <TitleText>({content.length}글자)</TitleText>
                        <StyledInputContent>
                            <textarea
                                name="content"
                                id="content"
                                maxLength={200}
                                value={content}
                                required
                                onChange={onChangeContent}
                                placeholder="글을 작성하세요!"
                            />
                        </StyledInputContent>
                        <StyledButtonContainer>
                            <Button
                                title="다이어리 작성하기"
                                type="submit"
                            />
                        </StyledButtonContainer>
                    </DiaryWriteContainer>
                </Form>
            </Wrapper>
        </Layout>
    );
}

export default DiaryWritePage;
