import TypoGraphy from '../../components/Typography';
import { Btn60 } from '../../components/Button';
import styled from 'styled-components';
import { useState } from 'react';
import { Img, ImgContainer, TextWrap } from '../../assets/styles/styles';
import LoginModal from '../../components/LoginModal';
import Header from '../../components/Header';
import noneLoginIllust from '../../assets/img/noneLoginIllust.svg';

const NoneLogin = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <Header />
      <div style={{ marginTop: '50px' }}></div>
      <Wrapper>
        <div>
          <TypoGraphy text="앗, 로그인부터!" size="h1" />
          <TextWrap padding="13px 0 40px 0" lineHeight={29.2}>
            <TypoGraphy
              text="로그인/회원가입 이후 내 포트폴리오를 입력할 수 있어요."
              size="t3"
              color="var(--type-gray-2)"
            />
            <TypoGraphy
              text="로그인하고 더 많은 정보를 확인해보세요!"
              size="t3"
              color="var(--type-gray-2)"
            />
          </TextWrap>
          <BtnWrapper onClick={() => setModalOpen(true)}>
            <Btn60 type="able" text="로그인하기" />
          </BtnWrapper>
        </div>
        <ImgContainer
          width="494px"
          height="312px"
          style={{ margin: '-50px -50px 0 0' }}
        >
          <Img src={noneLoginIllust} width="100%" height="100%" />
        </ImgContainer>
      </Wrapper>

      {/* modal */}
      <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Container>
  );
};
export default NoneLogin;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 50px);
  background-color: #f6f8fe;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 249px;
  max-width: 1000px;
`;

const BtnWrapper = styled.div`
  width: fit-content;
`;
