import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../style/Validation.css"
import Input from "../ui/Input";
import Button from "../ui/Button";
import Diary from "../ui/Diary"

const Wrapper = styled.div`
    height: 100vh;
`

const InfoText = styled.div`
    font-weight: 600;
    size: 23px;
`

const StressNumberContainer = styled.div`
    width: 30vw;
`

const Stress = styled.div`
    border-radius: 50%;
    background-color: #4da6f4;
`

const UserNickNameText = styled.div`
    font-size: 15px;
`

const MyPage = () => {
    return(
        <Wrapper>
            <InfoText>내 정보</InfoText>
            <StressNumberContainer>
                <Stress />
                <UserNickNameText>UserName</UserNickNameText>
            </StressNumberContainer>

            <Diary />
        </Wrapper>
    )
}


export default MyPage;