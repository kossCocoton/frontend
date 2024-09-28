import {React, useState, useEffect, useRef} from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import moment from 'moment';
import Layout from "../../Layout";
import { useNavigate, useParams } from "react-router-dom";

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

const ContentText = styled.div`
    text-align : center;
    font-size : 2vh;
    font-weight : 600;
`

const DiaryWriteContainer = styled.div`
    width: 100%;
`

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
`
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
`
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
`

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
`

function DiaryWritePage() {
    const form = useRef();
    const params = useParams();

    const today = params.date || moment().format('YYMMDD');
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeContent = (e) => {
        const content = e.target.value;
        setContent(content);
    };

    const onChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title);
    };

    return (
        <Layout>
        <Wrapper>
            <ContentText>{today}</ContentText>
            <DiaryWriteContainer>
                <TitleText>({title.replace(/<br\s*\?>/gm, "\n").length}글자)</TitleText>
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

                <TitleText>({content.replace(/<br\s*\?>/gm, "\n").length}글자)</TitleText>
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
                        title="스트레스 지수 검사하기"
                        onClick={() => {
                            navigate("/test");
                        }}
                    />
                </StyledButtonContainer>
            </DiaryWriteContainer>
        </Wrapper>
        </Layout>
    );
}

export default DiaryWritePage;