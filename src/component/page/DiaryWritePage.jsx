import {React, useState, useEffect, useRef} from "react";
// import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate, useParams } from "react-router-dom";;

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    height: 95vh;
    display: flex;
`

const ContentText = styled.div`
    text-align : center;
    font-size : 2vh;
    font-weight : 600;
`
const DateText = styled.div`
    text-align : center;
    color: #C7DB44;
    margin-bottom : 3vh;
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
        // padding-bottom : 5vh;
        font-size: 2vh;
        word-break:break-all;
        resize:none;
        overflow: auto;
    }
    >textarea::placeholder {
        color: #D9D9D9;
        
    }
    >textarea:focus {
        outline: none;
    }
`
const Line = styled.hr`
    margin-top : 1vh;
    color : #A9A9A9;
    border : 1px solid #A9A9A9;
    margin-left : 3vw;
    margin-right : 3vw;
`
const FileUpload = styled.div`
    margin-top : 2vh;
    margin-left: 3vw;
    margin-right: 3vw;
    height: 15vh;
    display: flex;
    >input[type="file"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip:rect(0,0,0,0);
        border: 0;
    }
`

const Highlight = styled.span`
    color: #C7DB44;
    font-size: 3vh;
    padding-left: 0px;
    width: 10px;
`

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    >Button{
    width: 70vw;
    justify-content: center;
    margin-left: 2vh;
    }
`

const required = (value) => {
    if (!value) {
        return (
        <div className="invalid-feedback d-block">
            This field is required!
        </div>
        );
    }
};

function DiaryWritePage(props){
    const form = useRef();
    const params = useParams();
    const today = params.date;
    const navigate = useNavigate();

    //const [date, setDate] = useState("");
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

    return(
        <Wrapper>
            <ContentText>{props.date}</ContentText>
            <div>
                <TitleText>일기 제목 ({title.replace(/<br\s*\?>/gm, "\n").length}글자)<Highlight>*</Highlight></TitleText>
                <StyledInputForm><input
                    type="text"
                    name="title"
                    id="title"
                    maxLength={20}
                    value={title}
                    required
                    onChange={onChangeTitle}
                    validations={[required]}
                    placeholder="20글자 이내로 제목을 입력해주세요 :)"
                />
                </StyledInputForm>
                <Line/>

                <TitleText>글을 작성하세요! ({content.replace(/<br\s*\?>/gm, "\n").length}글자)<Highlight>*</Highlight></TitleText>
                <StyledInputContent><textarea
                    type="textarea"
                    name="content"
                    id="content"
                    maxLength={200}
                    value={content}
                    required
                    onChange={onChangeContent}
                    validations={[required]}
                    placeholder="200글자 이내로 게시물 내용을 작성해주세요 :)"
                />
                </StyledInputContent>
                <div class="button-container">
                    <div class="button-div">
                    <StyledButtonContainer>
                    <Button
                            title="스트레스 지수 검사하기"
                            onClick={() => {
                                navigate("/test");
                            }}
                        />
                    </StyledButtonContainer>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default DiaryWritePage;