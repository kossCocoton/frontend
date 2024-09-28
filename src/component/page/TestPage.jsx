import styled from "styled-components";
import Button from "../ui/Button";
import React, { useState } from "react";
import Question from "../ui/Question"; // Question 컴포넌트 임포트

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 가운데 정렬
  padding: 0 20vw; // 양쪽 패딩
`;

const Text = styled.div`
  width: 100%; // 전체 너비
  text-align: center; // 가운데 정렬
  font-size: 30px;
  font-weight: 300;
  margin: 40px 0; // 위아래 여백을 주기 위해 margin 설정
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
  margin: 20px 0; // 각 질문 사이에 여백을 주기 위해 margin 설정
  width: 100%;
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
    const [score, setScore] = useState(null); // 점수를 저장할 상태

    const handleAnswerChange = (questionName, value) => {
        setAnswers(prevAnswers => {
            const newAnswers = { ...prevAnswers, [questionName]: value };
            console.log("현재 답변:", newAnswers); // 상태가 업데이트된 후 로그 출력
            return newAnswers;
        });
    };

    const calculateScore = () => {
        console.log("최종 답변:", answers); // 점수를 계산하기 전에 로그 출력

        // answers 객체에서 값이 있는 경우만 계산
        const totalScore = Object.values(answers)
            .filter(value => value !== undefined) // 값이 있는 것만 필터링
            .map(value => parseFloat(value)) // float로 변환
            .reduce((acc, curr) => acc + curr, 0);

        const finalScore = Math.max(0, Math.min(totalScore, 100)); // 최소 0, 최대 100으로 제한
        setScore(finalScore); // 점수 상태 업데이트
        console.log("현재 점수:", finalScore);
    };

    return (
        <Wrapper>
            <Text>스트레스 자가 진단 테스트</Text>
            {questions.map((question) => (
                <QuestionContainer key={question.id}>
                    <Question 
                        question={question.text}
                        name={question.id}
                        value={answers[question.id]}
                        onChange={(value) => handleAnswerChange(question.id, value)}
                        options={radioOptions}
                    />
                </QuestionContainer>
            ))}
            <StyledButtonContainer>
                <Button title="제출하기" onClick={calculateScore} />
            </StyledButtonContainer>
            {score !== null && (
                <Text>당신의 점수: {score}점</Text> // 결과 점수 표시
            )}
        </Wrapper>
    );
}

export default TestPage;
