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
    padding: 0 3vw 3vw 3vw;
    flex-direction: column;
`;

const PostTopContainer = styled.div`
    height: 15vh;
    margin: 15px 0 20px 0;
    display: flex;
    justify-content: space-between;
`;

const PostContainer = styled.div`
    height: 80vh;
    background-color: #F7F0EB;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 15px;
    margin-top: 5px; 
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
    margin-right: 20px;
    flex-direction: column;
    border-radius: 15px;
`;

const Icon = styled.img`
    margin-bottom: 10px;
`;

const StyledSelectBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

let genderoptions = [
    { value: "", label: "모든 성별" },
    { value: "여", label: "여" },
    { value: "남", label: "남" },
];

let occoptions = [
    { value: "", label: "모든 직업" },
    { value: "학생", label: "학생" },
    { value: "개발자", label: "개발자" },
    { value: "디자이너", label: "디자이너" },
    { value: "PM", label: "PM" },
    { value: "무직", label: "무직" }
];

let ageoptions = [
    { value: "", label: "모든 나이대" },
    { value: "10대", label: "10대" },
    { value: "20대", label: "20대" },
    { value: "30대", label: "30대" },
    { value: "40대", label: "40대" },
];

const FilterContainer = styled.div`
    display: flex;
    gap: 15px;
`;

function CommunityPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [viewModalIsOpen, setViewModalIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [gender, setGender] = useState(""); 
    const [occ, setOcc] = useState(""); 
    const [age, setAge] = useState(""); 

    const handleViewMyPosts = () => {
        console.log("내 글 보기 클릭!");
    };

    const handleWritePost = () => {
        setModalIsOpen(true); 
    };

    const handlePostClick = (post) => {
        console.log("Opening post:", post);
        setSelectedPost(post);
        setViewModalIsOpen(true);
    };

    const posts = [
        {
            id: 1,
            title: "1번째 글",
            ageGroup: "20대",
            nickname: "User1",
            job: "개발자",
            date: "2024-09-29",
            gender: "여",
            category: "일상",
            content: "첫 번째 게시글의 내용입니다.",
            comments: ["좋은 글입니다!", "감사합니다!"]
        },
        {
            id: 2,
            title: "2번째 글",
            ageGroup: "30대",
            nickname: "User2",
            job: "디자이너",
            date: "2024-10-01",
            gender: "남",
            category: "기술",
            content: "두 번째 게시글의 내용입니다.",
            comments: ["유익하네요.", "더 알고 싶어요!"]
        },
        {
            id: 3,
            title: "3번째 글",
            ageGroup: "20대",
            nickname: "User3",
            job: "무직",
            date: "2024-10-01",
            gender: "남",
            category: "일상",
            content: "세 번째 게시글의 내용입니다.",
            comments: ["유익하네요.", "더 알고 싶어요!"]
        },
        {
            id: 4,
            title: "4번째 글",
            ageGroup: "10대",
            nickname: "User4",
            job: "학생",
            date: "2024-10-04",
            gender: "남",
            category: "기술",
            content: "네 번째 게시글의 내용입니다.",
            comments: ["유익하네요.", "더 알고 싶어요!"]
        },
        {
            id: 5,
            title: "5번째 글",
            ageGroup: "40대",
            nickname: "User5",
            job: "PM",
            date: "2024-10-08",
            gender: "여",
            category: "기술",
            content: "다섯 번째 게시글의 내용입니다.",
            comments: ["유익하네요.", "더 알고 싶어요!"]
        },
    ];

    // 필터링된 게시글 목록
    const filteredPosts = posts.filter(post => {
        const genderMatch = !gender || post.gender === gender; 
        const occMatch = !occ || post.job === occ; 
        const ageMatch = !age || post.ageGroup === age; 
        return genderMatch && occMatch && ageMatch; 
    });

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
                        <FilterContainer>
                            <Select
                                className="react-select-container"
                                options={genderoptions}
                                onChange={(e) => { setGender(e.value) }}
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
                                onChange={(e) => { setOcc(e.value) }}
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
                                onChange={(e) => { setAge(e.value) }}
                                placeholder="나이대"
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
                        </FilterContainer>
                    </StyledSelectBoxContainer>
                </PostTopContainer>

                <PostContainer>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <PostList 
                                key={index}
                                title={post.title}
                                ageGroup={post.ageGroup}
                                nickname={post.nickname}
                                job={post.job}
                                date={post.date}
                                onClick={() => handlePostClick(post)}
                            />
                        ))
                    ) : (
                        <div style={{ textAlign: 'center' }}>필터링된 게시글이 없습니다.</div>
                    )}
                </PostContainer>

                <div style={{ marginBottom: '15px', textAlign: 'center' }}>-1-</div>

                <ArticleWritePage 
                    modalIsOpen={modalIsOpen} 
                    setModalIsOpen={setModalIsOpen}
                />

                <ArticleViewPage 
                    post={selectedPost} 
                    modalIsOpen={viewModalIsOpen} 
                    setModalIsOpen={setViewModalIsOpen}
                />

            </Container>
        </Layout>
    );
}

export default CommunityPage;
