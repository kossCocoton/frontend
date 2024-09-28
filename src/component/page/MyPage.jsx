import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../style/Validation.css"
import Input from "../ui/Input";
import Button from "../ui/Button";
import CalendarView from "../ui/CalendarView"
import Layout from "../../Layout";

const Wrapper = styled.div`
    height: 95vh;
    padding: 3vw 3vw;
    display: flex;
    width: 100vw;
`

const MyInfoContainer = styled.div`
    width: 50vw;
    padding-right: 3vw;
`

const InfoText = styled.div`
    font-weight: 600;
    size: 50px;
`

const StressNumberContainer = styled.div`
    width: 30vw;
    display: flex;
    align-items: end;
    margin-bottom: 3vh;
`

const Stress = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #4da6f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
`

const UserStressText = styled.div`
    font-weight: 700;
    font-size: 23px;
`

const UserNickNameText = styled.div`
    font-size: 15px;
`

const StressGraphContainer = styled.div`
    background-color: #E2E2E2;
    width: 40vw;
    height: 30vh;
    margin: 10vh 0vh;
`

const MyPage = () => {
    const navigate = useNavigate();

    return(
        <Layout>
        <Wrapper>
            <MyInfoContainer>
                <InfoText>내 정보</InfoText>
                <StressNumberContainer>
                    <Stress>
                        <UserStressText>80</UserStressText>
                        <UserStressText>/100</UserStressText>
                    </Stress>
                    <UserNickNameText>UserName</UserNickNameText>
                </StressNumberContainer>
                <Button
                    title="일기쓰기"
                    onClick={() => {
                        navigate("/diary");
                      }}/>
                <StressGraphContainer>
                    스트레스 지수 그래프 추가   
                </StressGraphContainer>
            </MyInfoContainer>
            <CalendarView />
        </Wrapper>
        </Layout>
    )
}


export default MyPage;