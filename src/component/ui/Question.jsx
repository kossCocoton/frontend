import React from "react";
import Radio from "../ui/Radio";
import styled from "styled-components";

const Container = styled.div`
    width: 100%; /* 전체 너비를 사용 */
`;

const RoundedBox = styled.div`
    font-size: 20px;
    font-weight: 200;
    border-radius: 10px; /* 둥글게 */
    border: 0px;
    cursor: pointer;
    background-color: #F7F0EB;
    padding: 15px;
    margin: 15px 0; /* 위아래 여백 */
    box-shadow: 3px 5px 10px rgba(150, 150, 150, 0.2);
    display: flex;
    justify-content: flex-start; /* 왼쪽 정렬 */
    align-items: center;
    text-align: left; /* 텍스트 왼쪽 정렬 */
`;

const Label = styled.label`
    margin-right: 10px; /* 라디오 버튼과의 간격 */
    cursor: pointer; /* 커서 포인터로 변경 */
`;

const Question = ({ question, name, value, onChange, options }) => (
    <Container>
        <RoundedBox>{question}</RoundedBox>
        {options.map(option => (
            <Label key={option.value}>
                <Radio
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={() => onChange(option.value)}
                />
                {option.label}
            </Label>
        ))}
    </Container>
);

export default Question;
