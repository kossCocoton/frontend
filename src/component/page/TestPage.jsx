import styled from "styled-components";
import RadioGroups from "../ui/RadioGroup";
import Radio from "../ui/Radio";
import Button from "../ui/Button";
import React, { Component, useEffect, useState, useRef } from "react";

const Text = styled.div`
  width: 1000px;
  text-align: right;
  font-size: 30px;
  font-weight: bold;
  margin-right: 20px;
  justify-content: center;
`

const RoundedBox = styled.div`
    font-size: 20px;
    font-weight: 800;
    border-radius: 50px;
    border: 0px;
    cursor: pointer;
    background-color: #F7F0EB;
    padding: 15px;
    margin: 15px;
    width: 1500px;
    height: 5px;
    box-shadow: 3px 5px 10px 2px rgb(150,150,150,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: right;
`;

const StyledButtonContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  padding-left: 30%;
  padding-right: 30%;
  justify-content: center;
  align-items: center;
  
  >Button{
    width: 30vw;
    justify-content: center;
  }
`

let radioOptions = [
    { value: "0", label: "전혀 없었다" },
    { value: "1", label: "거의 없었다" },
    { value: "2", label: "때때로 있었다" },
    { value: "3", label: "자주 있었다" },
    { value: "4", label: "매우 자주 있었다" },
  ];

  function TestPage() {
    const [answers, setAnswers] = useState("");
    return (
        <div>
            <br></br>
            <Text>스트레스 자가 진단 테스트</Text>
            <br></br>
            <br></br>
            <RoundedBox>어려운 일들이 너무 많이 쌓여서 극복하지 못할 것 같은 느낌을 얼마나 자주 경험하셨습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range1"
                        value={option.value}
                        checked={answers.range1 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range1: option.value }))}
                    />
                    {option.label}
                </label>
            ))}


            <RoundedBox>최상의 컨디션이라고 얼마나 자주 느끼셨습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range2"
                        value={option.value}
                        checked={answers.range2 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range2: option.value }))}
                    />
                    {option.label}
                </label>
            ))}


            <RoundedBox>당신이 꼭 해야하는 일을 처리할 수 없다고 생각한 적이 얼마나 있었습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range3"
                        value={option.value}
                        checked={answers.range3 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range3: option.value }))}
                    />
                    {option.label}
                </label>
            ))}

            <RoundedBox>당신의 개인적 문제들을 다루는 데 있어서 얼마나 자주 자신감을 느꼈습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range4"
                        value={option.value}
                        checked={answers.range1 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range1: option.value }))}
                    />
                    {option.label}
                </label>
            ))}

            <RoundedBox>인생에서 중요한 일들을 조절할 수 없다는 느낌을 얼마나 경험하였습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range5"
                        value={option.value}
                        checked={answers.range1 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range1: option.value }))}
                    />
                    {option.label}
                </label>
            ))}


            <RoundedBox>예상치 못했던 일 때문에 당황했던 적이 얼마나 있었습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
            name="range6"
            value={option.value}
            checked={answers.range1 === option.value}
            onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range1: option.value }))}
                />
                {option.label}
                </label>
            ))} 

            <RoundedBox>신경이 예민해지고, 스트레스를 받고 있다는 느낌을 얼마나 경험하였습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range7"
                        value={option.value}
                        checked={answers.range1 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range1: option.value }))}
                    />
                    {option.label}
                </label>
            ))}

            <RoundedBox>일상의 일들이 당신의 생각대로 진행되고 있다는 느낌을 얼마나 경험하였습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range8"
                        value={option.value}
                        checked={answers.range2 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range2: option.value }))}
                    />
                    {option.label}
                </label>
            ))}


            <RoundedBox>일상생활의 짜증을 얼마나 자주 잘 다스릴 수 있었습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range9"
                        value={option.value}
                        checked={answers.range3 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range3: option.value }))}
                    />
                    {option.label}
                </label>
            ))}


            <RoundedBox>어려운 일들이 너무 많이 쌓여서 극복하지 못할 것 같은 느낌을 얼마나 자주 경험하셨습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range1"
                        value={option.value}
                        checked={answers.range1 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range1: option.value }))}
                    />
                    {option.label}
                </label>
            ))}
            <RoundedBox>당신이 통제할 수 없는 일 때문에 화가 난 경험이 얼마나 있었습니까?</RoundedBox>
            {radioOptions.map(option => (
                <label key={option.value}>
                    <Radio
                        name="range10"
                        value={option.value}
                        checked={answers.range1 === option.value}
                        onChange={() => setAnswers(prevAnswers => ({ ...prevAnswers, range1: option.value }))}
                    />
                    {option.label}
                </label>
            ))}

            <StyledButtonContainer>
                <Button title="제출하기" onClick={handleSubmit} />
            </StyledButtonContainer>
        </div>
    );
};

export default TestPage;