import styled from 'styled-components';
import {
  Container,
  Img,
  ImgContainer,
  TextRow,
  TextWrap,
} from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';
import mainSub4 from '../../../assets/img/main/section4/mainSub4.svg';
import mainSub5 from '../../../assets/img/main/section4/mainSub5.svg';

const Section4 = () => {
  return (
    <Wrapper>
      <Container maxWidth={839}>
        <TextWrap lineHeight={45} align="center" padding="0 0 56px 0">
          <TypoGraphy text="먼저 본인의 투자 현황을 입력하고" size="h1" />
          <TextRow align="center">
            <TypoGraphy
              text="안전한 투자 방법"
              size="h1"
              color="var(--main-blue)"
            />
            <TypoGraphy text="을 알아보세요!" size="h1" />
          </TextRow>
        </TextWrap>
        <ImgContainer width="100%" height="100%">
          <Img /*width="calc((100% - 23px) / 2)"*/ width="50%" src={mainSub4} />
          <Img
            /*width="calc((100% - 23px) / 2 + 2px)"*/ width="50%"
            src={mainSub5}
          />
        </ImgContainer>
      </Container>
    </Wrapper>
  );
};

export default Section4;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f8ff;
  width: 100%;
  padding: 115px 0;
`;
