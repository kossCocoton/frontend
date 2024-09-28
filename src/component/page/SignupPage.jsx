import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../style/Validation.css"
import EmoBin from '../img/EmoBin.svg';
import Input from "../ui/Input";
import Button from "../ui/Button";
import Select from 'react-select';

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
  { value: "male", label: "남" },
  { value: "female", label: "여" },
];

let occoptions = [
  { value: "예시1", label: "예시1" },
  { value: "예시2", label: "예시2" },
  { value: "예시3", label: "예시3" },
  { value: "예시4", label: "예시4" },
  { value: "예시5", label: "예시5" },
];

let ageoptions = [
  { value: "under10", label: "10대 이하" },
  { value: "10", label: "10대" },
  { value: "20", label: "20대" },
  { value: "30", label: "30대" },
  { value: "over40", label: "40대 이상" },
];

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
