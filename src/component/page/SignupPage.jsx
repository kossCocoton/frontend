import React, { Component, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../style/Validation.css"
import Input from "../ui/Input";
import Button from "../ui/Button";
import Select from 'react-select';
// import Form from "react-validation/build/form";
// import { isEmail } from "validator";

const Wrapper = styled.div`
  height: 92vh;
`

const Container = styled.div`
  padding-top: 2%;
  text-align: center;
`

const SubTitle = styled.div`
  color: #838383;
  font-size: 25px;
  font-weight: bold;
`

const MainTitle = styled.p`
  font-size: 30px;
  padding: 0px 15px;
  margin-block-start: 10px;
  margin-block-end: 0.5em;
  margin-inline-start: 10px;
  margin-inline-end: 0px;
  font-weight: 800;
  margin-bottom: 25px;
`

// const Form = styled.form`
// `

const Text = styled.div`
  width: 100px;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  justify-content: center;
`

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledInputForm = styled.div`
  height: 10vh;
  width: 50vw;
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-right: 30%;
  >Input{
    justify-content: center;
    width: 30vw;
  }
`

const StyledSelectBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1vw;
  padding-right: 8vw;
  padding-left: 1vw;
  
`

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

const Under_text = styled.div`
  text-decoration: underline;
  cursor: pointer;
`

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
]

let ageoptions = [
  { value: "under10", label: "10대 이하" },
  { value: "10", label: "10대" },
  { value: "20", label: "20대" },
  { value: "30", label: "30대" },
  { value: "over40", label: "40대 이상" },
]


const SignupPage = (props) => {
  const form = useRef();
  //const checkBtn = useRef();
  
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pw2, setPw2] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("female");
  const [occ, setOcc] = useState("예시")
  const [age, setAge] = useState("20대");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [usernameMessage, setUsernameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [usernicknameMessage, setUsernicknameMessage] = useState('');

  const [isusername, setIsUserName] = useState(false);
  const [isusernickname, setIsUsernickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeId= e => {
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

  const onChangePassword= e => {
    const password = e.target.value;
    setPassword(password);

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(password)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.');
      setIsPassword(false);
    } else {
      setPasswordMessage();
      setIsPassword(true);
    }
  }

  const onChangePw2= e => {
    const pw2 = e.target.value;
    setPw2(e.target.value);

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
      setIsUsernickname(false); // 여기서 변경된 상태 사용
    } else {
      setUsernicknameMessage("");
      setIsUsernickname(true); // 상태 변경
    }
  }



  return(
      <Wrapper>
            <Container>
              <SubTitle>Emobin</SubTitle>
              {/* <Form> */}
                  {!successful && (
                  <div>
                    <MainTitle>회원가입</MainTitle>
                    <StyledInputContainer>
                      <label>
                        <StyledInputForm><Text>아이디</Text><Input type="text" name="id" id="userId" className="idinput" value={username} onChange={onChangeId}/><br /></StyledInputForm>                        
                        {usernameMessage && (<span className={`message ${isusername ? 'success' : 'error'}`}>{usernameMessage}</span>)}

                        <StyledInputForm><Text>비밀번호</Text><Input type="password" name="pw1" id="pw1" autocomplete="off" value={password} onChange={onChangePassword}/><br /></StyledInputForm>
                        {passwordMessage && (<span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>)}

                        <StyledInputForm><Text>비밀번호 확인</Text><Input type="password" name="pw2" id="pw2" autocomplete="off" value={pw2} onChange={onChangePw2}/><br /></StyledInputForm>
                        {passwordConfirmMessage &&(<span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>)}

                        <StyledInputForm><Text>닉네임</Text><Input type="text" name="nickname" id="nickname" className="idinput" value={nickname} onChange={onChangeNickname}/><br /></StyledInputForm>                        
                        {usernicknameMessage && (<span className={`message ${isusername ? 'success' : 'error'}`}>{usernicknameMessage}</span>)}
                      </label>
                    </StyledInputContainer>

                    <StyledSelectBoxContainer>
                        <Text></Text>
                        <Select
                          className="react-select-container"
                          options={genderoptions}
                          onChange={(e) => {setGender(e.value)}}
                          placeholder="성별"
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              backgroundColor: '#F7F0EB', 
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

                        <Text></Text>
                        <Select
                          className="react-select-container"
                          options={occoptions}
                          onChange={(e) => {setOcc(e.value)}}
                          placeholder="직업"
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              backgroundColor: '#F7F0EB', 
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


                        <Text></Text>
                        <Select
                            className="react-select-container"
                            options={ageoptions}
                            onChange={(e) => {setAge(e.value)}}
                            placeholder="나이대"
                            components={{
                              IndicatorSeparator: () => null
                            }}
                            styles={{
                              control: (provided) => ({
                                ...provided,
                                backgroundColor: '#F7F0EB', 
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

                  { successful && (
                    <div>
                      <MainTitle>회원가입 성공!</MainTitle>
                      <Button
                      title="로그인하러 가기"
                      onClick={() => {
                        navigate("/login");
                      }}
                    />
                    </div>

                  )}
              {/* </Form> */}
            </Container>
      </Wrapper>
  );
};

export default SignupPage;