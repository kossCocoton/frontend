// PostItem.jsx
import { style } from "framer-motion/client";
import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
    background-color: #F7F0EB;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 0;
    border-bottom: 1px solid #E2E2E2;
    cursor: pointer;
`;

const Title = styled.h2`
    margin: 0;
`;

const SubTitle = styled.h3`
    
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #666;
`;

const PostList = ({ title, ageGroup, nickname, job, date }) => {
    return (
        <PostContainer>
            <InfoContainer>
                <Title>{title}</Title>
                <SubTitle>{ageGroup}</SubTitle>
                <SubTitle>{nickname}</SubTitle>
                <SubTitle>{job}</SubTitle>
                <SubTitle>{date}</SubTitle>
            </InfoContainer>
        </PostContainer>
    );
};

export default PostList;
