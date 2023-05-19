import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import {
  Container,
  Img,
  ImgContainer,
  TextRow,
  TextWrap,
} from '../../../assets/styles/styles';
import mainSub from '../../../assets/img/main/section2/mainSub1.svg';
import Icon from '../../../assets/img/main/section2/Icon.svg';

const Section2 = () => {
  return (
    <Container maxWidth={839}>
      <TextWrap lineHeight={45} padding="115px 0 102px 0" align="center">
        <Img src={Icon} width="65px" height="44px" />
        <TypoGraphy text="끝없이 떨어지던 작년 주식 시장," size="h1" />
        <TypoGraphy text="혹시 크게 스트레스 받진 않았나요?" size="h1" />
      </TextWrap>

      <SubContainer>
        <Column>
          <TextWrap lineHeight={36} padding="0 0 44px 0">
            <TypoGraphy text="특정 종목에만 돈을 몰아넣으며" size="h2" />
            <TextRow align="center">
              <TypoGraphy
                text="위험한 투자"
                color="var(--main-blue)"
                size="h2"
              />
              <TypoGraphy text="를 하고 있는 건 아닌지" size="h2" />
            </TextRow>
            <TypoGraphy text="생각해 볼 필요가 있어요" size="h2" />
          </TextWrap>

          <TextWrap lineHeight={20}>
            <TypoGraphy
              text="투자 자금을 여러 자산에 고르게 나눈"
              size="t3"
              color="var(--type-gray-2)"
            />
            <TextRow>
              <TypoGraphy
                text="'포트폴리오'"
                color="var(--main-blue)"
                size="t3"
              />
              <TypoGraphy
                text="를 만들면 투자의 위험성을 줄일 수 있어요"
                color="var(--type-gray-2)"
                size="t3"
              />
            </TextRow>
          </TextWrap>
        </Column>
        <ImgContainer width="385px" height="206px">
          <Img src={mainSub} />
        </ImgContainer>
      </SubContainer>
    </Container>
  );
};
export default Section2;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: center;
  height: 100%;
`;
