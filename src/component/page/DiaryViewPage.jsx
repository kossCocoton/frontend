import {React, useState, useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import styled,{keyframes} from "styled-components";
import Modal from 'react-modal';
import '../../style/Modal.css';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;


const Wrapper = styled.div`
`

const Top = styled.div`
    display: flex;
    // height: 10vh;
    justify-content: space-between;
    margin-right : 3vw;
    align-items: center;
`
const ContentText = styled.div`
    text-align : center;
    font-size : 2vh;
    font-weight : 600;
`
const DateText = styled.div`
    text-align : center;
    color: #C7DB44;
    margin-bottom : 3vh;
`
const TitleText = styled.div`
    text-align : left;
    margin-left : 3vw;
    margin-right : 1vw;
    font-size: 3vh;
    color: #545454;
    font-weight : 500;
`

const TitleDelete = styled.div`
    display: flex;
`

const StyledModal = {
    overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(255, 255, 255, 0.45)",
		zIndex: 1,
	},
 	content: {
        flexDirection: "column",
 		background: "#fff",
 		overflow: "auto",
 		WebkitOverflowScrolling: "touch",
 		borderRadius: "30px",
 		outline: "none",
 		zIndex: 10,
        top: '5vh',
        left: '25vw',
        right: '25vw',
        bottom: '5vh',
 	},
}

const ModalStyle = styled.div`
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.4s ease-in;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: visibility 0.2s ease-out;
`;

const OverlayStyle = styled.div`
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.2s ease-in;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transition: visibility 0.2s ease-out;
`;

function DiaryViewPage({ date, modalIsOpen, setModalIsOpen }) {
    const [diary, setDiary] = useState("");

    return(
        <Wrapper>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                style={StyledModal}
                onRequestClose={() => setModalIsOpen(false)} // 모달 닫기
                contentElement={(props, children) => (
                    <ModalStyle isOpen={modalIsOpen} {...props}>
                        {children}
                    </ModalStyle>
                )}
                overlayElement={(props, contentElement) => (
                    <OverlayStyle isOpen={modalIsOpen} {...props}>
                        {contentElement}
                    </OverlayStyle>
                )}
            >
                <ContentText>추억 확인하기</ContentText>
                <DateText>Date: {date}</DateText>
                <Top>
                    <TitleDelete>
                        <TitleText>{diary.title}</TitleText>
                    </TitleDelete>
                </Top>
            </Modal>
        </Wrapper>
    );
}

export default DiaryViewPage;