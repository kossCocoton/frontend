import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../style/Validation.css"
import EmoBin from '../img/EmoBin.svg';
import Input from "../ui/Input";
import Button from "../ui/Button";
import Select from 'react-select';
import axios from 'axios';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  text-align: center;
`;

const LogoImage = styled.img`
    width: 160px; 
    height: 50px; 
`;

const MainTitle = styled.p`
  font-size: 30px;
  font-weight: 800;
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const StyledInputForm = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const StyledSelectBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const StyledButtonContainer = styled.div`
  width: 100%; 
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Under_text = styled.div`
  text-decoration: underline;
  cursor: pointer;
`;

let genderoptions = [
  { value: "여성", label: "여성" },
  { value: "남성", label: "남성" },
  { value: "선택안합", label: "선택안함" },
];

let occoptions = [
  { value: "학생", label: "학생" },
  { value: "직장인", label: "직장인" },
  { value: "무직", label: "무직" }
];

let ageoptions = [
  { value: "TEN", label: "10대 이하" },
  { value: "TWENTY", label: "20대" },
  { value: "THIRTY", label: "30대" },
  { value: "FOURTY", label: "40대" },
  { value: "FIFTY", label: "50대" },
  { value: "SIXTY_UP", label: "60대 이상" },
];

// 회원가입 정보를 담는 클래스
class SignUpData {
  constructor(username, password, nickname, gender, job, age) {
    this.username = username;
    this.password = password;
    this.nickname = nickname;
    this.age = age;
    this.job = job;
    this.gender = gender;
  }
}


const SignupPage = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pw2, setPw2] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("female");
  const [occ, setOcc] = useState("예시");
  const [age, setAge] = useState("20대");
  const [successful, setSuccessful] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [usernicknameMessage, setUsernicknameMessage] = useState('');
  const [isusername, setIsUserName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeId = e => {
    const username = e.target.value;
    setUsername(username);

    const usernameRegex = /^[a-zA-Z0-9]{4,10}$/;
    if (!usernameRegex.test(username)) {
      setUsernameMessage('4글자 이상 10글자 이하의 영문 대소문자와 숫자만 입력 가능합니다.');
      setIsUserName(false);
    } else {
      setUsernameMessage("");
      setIsUserName(true);
    }
  }

  const onChangePassword = e => {
    const password = e.target.value;
    setPassword(password);

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(password)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.');
      setIsPassword(false);
    } else {
      setPasswordMessage('');
      setIsPassword(true);
    }
  }

  const onChangePw2 = e => {
    const pw2 = e.target.value;
    setPw2(pw2);

    if (password === pw2) {
      setPasswordConfirmMessage('비밀번호를 올바르게 입력했습니다.');
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage('비밀번호가 다릅니다.');
      setIsPasswordConfirm(false);
    }
  }

  const onChangeNickname = e => {
    const nickname = e.target.value;
    setNickname(nickname);
  
    const usernicknameRegex = /^[가-힣]{1,10}$/; // 한글만 1글자 이상 10글자 이하
    if (!usernicknameRegex.test(nickname)) {
      setUsernicknameMessage('1글자 이상 10글자 이하의 한글만 입력 가능합니다.');
      setUsernicknameMessage(false);
    } else {
      setUsernicknameMessage("");
      setUsernicknameMessage(true);
    }
  }

  // 회원가입 폼 제출 함수
  const onSubmit = async (e) => {
    e.preventDefault();

    // 비밀번호 확인
    if (password !== pw2) {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
      setIsPasswordConfirm(false);
      return;
    } else {
      setPasswordConfirmMessage('비밀번호가 일치합니다.');
      setIsPasswordConfirm(true);
    }

    // 회원가입 데이터를 클래스로 생성
    const signUpData = new SignUpData(username, password, nickname, gender, occ, age);

    try {
      // API에 POST 요청
      const response = await axios.post('http://localhost:8080/auth/signup', signUpData);

      if (response.status === 200) {
        setSuccessful(true);
        navigate("/community");
      }
    } catch (error) {
      console.error('회원가입 실패', error);
      alert('회원가입 실패');
    }
  };

  return (
    <Wrapper>
      <Container>
        <LogoImage src={EmoBin} />
        {!successful && (
          <div>
            <StyledInputContainer>
              <StyledInputForm>
                <Input
                  type="text"
                  name="id"
                  id="userId"
                  className="idinput"
                  value={username}
                  onChange={onChangeId}
                  placeholder="아이디를 입력하세요"
                />
              </StyledInputForm>
              {usernameMessage && (
                <span className={`message ${isusername ? 'success' : 'error'}`}>{usernameMessage}</span>
              )}

              <StyledInputForm>
                <Input
                  type="password"
                  name="pw1"
                  id="pw1"
                  autoComplete="off"
                  value={password}
                  onChange={onChangePassword}
                  placeholder="비밀번호를 입력하세요"
                />
              </StyledInputForm>
              {passwordMessage && (
                <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
              )}

              <StyledInputForm>
                <Input
                  type="password"
                  name="pw2"
                  id="pw2"
                  autoComplete="off"
                  value={pw2}
                  onChange={onChangePw2}
                  placeholder="비밀번호를 다시 입력하세요"
                />
              </StyledInputForm>
              {passwordConfirmMessage && (
                <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
              )}

              <StyledInputForm>
                <Input
                  type="text"
                  name="nickname"
                  id="nickname"
                  className="idinput"
                  value={nickname}
                  onChange={onChangeNickname}
                  placeholder="닉네임을 입력하세요"
                />
              </StyledInputForm>
              {usernicknameMessage && (
                <span className={`message ${isusername ? 'success' : 'error'}`}>{usernicknameMessage}</span>
              )}
            </StyledInputContainer>

            <StyledSelectBoxContainer>
              <Select
                className="react-select-container"
                options={genderoptions}
                onChange={(e) => { setGender(e.value) }}
                placeholder="성별"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: '#F7F0EB',
                    margin: '0 10px',
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    fontWeight: 'bold',
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: '#333',
                    fontWeight: 'bold',
                  }),
                  indicatorSeparator: () => null,
                }}
              />
              <Select
                className="react-select-container"
                options={occoptions}
                onChange={(e) => { setOcc(e.value) }}
                placeholder="직업"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: '#F7F0EB',
                    margin: '0 10px',
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    fontWeight: 'bold',
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: '#333',
                    fontWeight: 'bold',
                  }),
                  indicatorSeparator: () => null,
                }}
              />
              <Select
                className="react-select-container"
                options={ageoptions}
                onChange={(e) => { setAge(e.value) }}
                placeholder="나이대"
                components={{
                  IndicatorSeparator: () => null
                }}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: '#F7F0EB',
                    margin: '0 10px',
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    fontWeight: 'bold',
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: '#333',
                    fontWeight: 'bold',
                  }),
                  indicatorSeparator: () => null,
                }}
              />
            </StyledSelectBoxContainer>

            <StyledButtonContainer>
            <Button
              onClick={(e) => {
                e.preventDefault();  // preventDefault를 호출해서 기본 동작을 막음
                onSubmit(e);         // onSubmit에 이벤트 객체 전달
                navigate("/community");
              }} 
              title="EmoBin으로 회원가입"
            />
              <Under_text
                onClick={() => {
                  navigate("/login");
                }}>
                이미 계정이 있나요?
              </Under_text>
            </StyledButtonContainer>
          </div>
        )}

        {successful && (
          <div>
            <MainTitle>회원가입 성공!</MainTitle>
            <Button
              title="로그인하러 가기"
              onClick={() => {
                navigate("/login");
              }}
              style={{ width: '50vw' }} // 버튼의 너비를 100%로 설정
            />
          </div>
        )}
      </Container>
    </Wrapper>
  );
};

export default SignupPage;
