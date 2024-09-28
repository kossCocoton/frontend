import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../style/Validation.css";
import Input from "../ui/Input";
import Button from "../ui/Button";
import EmoBin from '../img/EmoBin.svg';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import axios from 'axios';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    text-align: center;
    width: 100%;
    max-width: 400px;
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const StyledButtonContainer = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const LogoImage = styled.img`
    width: 160px; 
    height: 50px; 
    margin-bottom: 20px; 
`;

const UnderText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin-top: 10px; 
`;

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};

class LoginData {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const Loginpage = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // 기본 폼 제출 방지
        const loginData = new LoginData(username, password);
        try {
            // API에 POST 요청
            const response = await axios.post('http://localhost:8080/auth/login', loginData);

            if (response.status === 200) {
                alert('로그인 성공!'); // 로그인 성공 시 alert
                navigate("/community");
            }
        } catch (error) {
            console.error('로그인 실패', error);
            alert('로그인 실패: 잘못된 아이디나 비밀번호입니다.'); // 로그인 실패 시 alert
            // navigate("/community"); // 로그인 실패 시 이동하지 않음
        }
    };

    return (
        <Wrapper>
            <Container>
                <LogoImage src={EmoBin} />
                <Form onSubmit={handleLogin} ref={form}>
                    <StyledInputContainer>
                        <Input 
                            type="text" 
                            name="id" 
                            value={username} 
                            onChange={onChangeUsername} 
                            validations={[required]} 
                            placeholder="아이디" 
                            style={{ width: '100%' }} 
                        />
                        <Input 
                            type="password" 
                            name="pw1" 
                            id="pw1" 
                            value={password} 
                            onChange={onChangePassword} 
                            validations={[required]} 
                            placeholder="비밀번호" 
                            style={{ width: '100%' }} 
                        />
                    </StyledInputContainer>

                    <StyledButtonContainer>
                        <Button 
                            title="Emobin으로 로그인" 
                            style={{ width: '100%' }}  
                            type="submit" // 버튼을 제출 버튼으로 설정
                        />
                        <UnderText onClick={() => { navigate("/signup"); }}>
                            계정이 없나요?
                        </UnderText>
                    </StyledButtonContainer>
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </Container>
        </Wrapper>
    );
}

export default Loginpage;
