import React from 'react';
import styled from 'styled-components';
import EmoBin from '../img/EmoBin.svg';
import TrashCanIcon from '../img/TrashCanIcon.png';
import CommunityIcon from '../img/CommunityIcon.png';
import UserIcon from '../img/UserIcon.png';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 5vh; // 최소 높이 설정
    padding: 1vh 30px; // 위아래 패딩
    border-bottom: 0.5px solid #D2CFCF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box; // padding과 border 포함하여 너비 계산
`;

const Iconimage = styled.img`
    width: 40px;
    height: 40px;
`;

const LogoImage = styled.img`
    width: 160px; 
    height: 50px; 
`;

const Logo = styled.div`
    flex: 1;
`;

const Nav = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
`;

function Header() {
    const navigate = useNavigate();
    return (
        <Container>
            <Logo>
                <LogoImage src={EmoBin} />
            </Logo>
            <Nav>
                <Iconimage src={TrashCanIcon} onClick={() => navigate("/emotion")} />
                <Iconimage src={CommunityIcon} onClick={() => navigate("/community")} />
                <Iconimage src={UserIcon} onClick={() => navigate("/my")} />
            </Nav>
        </Container>
    );
};

export default Header;