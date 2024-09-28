import React from 'react';
import styled from 'styled-components';
import EmoBin from '../img/EmoBin.svg';
import TrashCanIcon from '../img/TrashCanIcon.svg';
import CommunityIcon from '../img/CommunityIcon.svg';
import UserIcon from '../img/UserIcon.svg';

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 5vh; // 최소 높이 설정
    padding: 16px 50px; // 위아래 패딩
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
    padding-right: 70px;
    gap: 40px;
    align-items: center;
`;

function Header() {
    return (
        <Container>
            <Logo>
                <LogoImage src={EmoBin} />
            </Logo>
            <Nav>
                <Iconimage src={TrashCanIcon} />
                <Iconimage src={CommunityIcon} />
                <Iconimage src={UserIcon} />
            </Nav>
        </Container>
    );
};

export default Header;