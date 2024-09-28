import React, { useState } from "react";
import styled from "styled-components";
import Layout from '../../Layout';
import StressIcon from "../img/StressIcon.png";
import PostIcon from "../img/PostIcon.png";
import Select from 'react-select';
import ArticleWritePage from "./ArticleWritePage";
import ArticleViewPage from "./ArticleViewPage";
import PostList from "../list/PostList";

const Container = styled.div`
    display: flex;
    height: 95vh;
    width: 100%;
    padding: 3vw;
    flex-direction: column;
`;

const PostTopContainer = styled.div`
    height: 15vh;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`;

const PostContainer = styled.div`
    height: 80vh;
    background-color: #F7F0EB;
    margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const SquareButton = styled.div`
    padding: 20px 10px;
    width: 130px;
    background-color: #F7F0EB;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 10px; // 버튼 간격 추가
    flex-direction: column;
`;

const Icon = styled.img`
    margin-right: 8px; // 아이콘과 텍스트 간격
`;

const StyledSelectBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

function CommunityPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [viewModalIsOpen, setViewModalIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null); // 선택된 게시글 저장

    const [gender, setGender] = useState("female");
    const [occ, setOcc] = useState("예시");
    const [age, setAge] = useState("20대");

    const handleViewMyPosts = () => {
        console.log("내 글 보기 클릭!");
    };

    const handleWritePost = () => {
        setModalIsOpen(true); // 작성 모달 열기
    };

    const handlePostClick = (post) => {
        console.log("Opening post:", post); // Debug log
        setSelectedPost(post);
        setViewModalIsOpen(true);
    };  

    const posts = [
        {
            id: 1,
            title: "첫 번째 글",
            ageGroup: "20대",
            nickname: "작성자1",
            job: "개발자",
            date: "2023-09-29",
            gender: "여",
            category: "일상",
            content: "첫 번째 게시글의 내용입니다.",
            comments: ["좋은 글입니다!", "감사합니다!"]
        },
        {
            id: 2,
            title: "두 번째 글",
            ageGroup: "30대",
            nickname: "작성자2",
            job: "디자이너",
            date: "2023-09-28",
            gender: "남",
            category: "기술",
            content: "두 번째 게시글의 내용입니다.",
            comments: ["유익하네요.", "더 알고 싶어요!"]
        },
    ];
    
    return (
        <Layout>
            <Container>
                <PostTopContainer>
                    <ButtonContainer>
                        <SquareButton onClick={handleViewMyPosts}>
                            <Icon src={StressIcon} alt="Stress Icon" />
                            내 글 보기
                        </SquareButton>
                        <SquareButton onClick={handleWritePost}>
                            <Icon src={PostIcon} alt="Post Icon" />
                            작성하기
                        </SquareButton>
                    </ButtonContainer>
                    <StyledSelectBoxContainer>
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
                </PostTopContainer>

                <PostContainer>
                    {posts.map((post, index) => (
                        <PostList 
                            key={index}
                            title={post.title}
                            ageGroup={post.ageGroup}
                            nickname={post.nickname}
                            job={post.job}
                            date={post.date}
                            onClick={() => handlePostClick(post)} // 클릭 시 게시글 전달
                        />
                    ))}
                </PostContainer>

                <ArticleWritePage 
                    modalIsOpen={modalIsOpen} 
                    setModalIsOpen={setModalIsOpen}
                />

                <ArticleViewPage 
                    post={selectedPost} // 선택된 게시글 전달
                    modalIsOpen={viewModalIsOpen} 
                    setModalIsOpen={setViewModalIsOpen}
                />

            </Container>
        </Layout>
    );
}

export default CommunityPage;
