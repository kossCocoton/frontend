import styled from "styled-components";
import Button from "../ui/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20vw;
`;

const Text = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  margin-top: 40px;
`;

const StyledButtonContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > Button {
    width: 30vw;
    justify-content: center;
  }
`;

const QuestionContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
`;

const RoundedBox = styled.div`
  font-size: 20px;
  font-weight: 200;
  border-radius: 10px;
  border: 0;
  background-color: #f7f0eb;
  padding: 15px;
  margin: 15px 0;
  box-shadow: 3px 5px 10px rgba(150, 150, 150, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const Label = styled.label`
  margin-right: 50px;
  cursor: pointer;
`;

const radioOptions = [
  { value: "0", label: "전혀 없었다" },
  { value: "2.5", label: "거의 없었다" },
  { value: "5", label: "때때로 있었다" },
  { value: "7.5", label: "자주 있었다" },
  { value: "10", label: "매우 자주 있었다" },
];

const questions = [
  { id: "range1", text: "어려운 일들이 너무 많이 쌓여서 극복하지 못할 것 같은 느낌을 얼마나 자주 경험하셨습니까?" },
  { id: "range2", text: "최상의 컨디션이라고 얼마나 자주 느끼셨습니까?" },
  { id: "range3", text: "당신이 꼭 해야하는 일을 처리할 수 없다고 생각한 적이 얼마나 있었습니까?" },
  { id: "range4", text: "당신의 개인적 문제들을 다루는 데 있어서 얼마나 자주 자신감을 느꼈습니까?" },
  { id: "range5", text: "인생에서 중요한 일들을 조절할 수 없다는 느낌을 얼마나 경험하였습니까?" },
  { id: "range6", text: "예상치 못했던 일 때문에 당황했던 적이 얼마나 있었습니까?" },
  { id: "range7", text: "신경이 예민해지고, 스트레스를 받고 있다는 느낌을 얼마나 경험하였습니까?" },
  { id: "range8", text: "일상의 일들이 당신의 생각대로 진행되고 있다는 느낌을 얼마나 경험하였습니까?" },
  { id: "range9", text: "일상생활의 짜증을 얼마나 자주 잘 다스릴 수 있었습니까?" },
  { id: "range10", text: "당신이 통제할 수 없는 일 때문에 화가 난 경험이 얼마나 있었습니까?" },
];

function TestPage() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const handleAnswerChange = (questionName, value) => {
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers, [questionName]: value };
      console.log("현재 답변:", newAnswers);
      return newAnswers;
    });
  };

  const calculateScore = () => {
    console.log("최종 답변:", answers);
    const totalScore = Object.values(answers)
      .filter((value) => value !== undefined)
      .map((value) => parseFloat(value))
      .reduce((acc, curr) => acc + curr, 0);

    const finalScore = Math.max(0, Math.min(totalScore, 100));
    setScore(finalScore);
    console.log("현재 점수:", finalScore);

    navigate("/my");
  };

  return (
    <Wrapper>
      <Text>스트레스 자가 진단 테스트</Text>
      {questions.map((question) => (
        <QuestionContainer key={question.id}>
          <Container>
            <RoundedBox>{question.text}</RoundedBox>
            {radioOptions.map((option) => (
              <Label key={option.value}>
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={answers[question.id] === option.value}
                  onChange={() => handleAnswerChange(question.id, option.value)}
                />
                {option.label}
              </Label>
            ))}
          </Container>
        </QuestionContainer>
      ))}
      <StyledButtonContainer>
        <Button title="제출하기" onClick={calculateScore} />
      </StyledButtonContainer>
    </Wrapper>
  );
}

export default TestPage;
