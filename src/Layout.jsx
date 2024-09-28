import React from 'react';
import styled from 'styled-components';
import Header from './component/ui/Header'; // 수정된 부분

const Container = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
`;

const ContentArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 15vh;
  height: calc(100vh - 5vh);
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <ContentArea>{children}</ContentArea>
    </Container>
  );
};

export default Layout;