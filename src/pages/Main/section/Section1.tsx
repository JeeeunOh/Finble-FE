import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import mainBg from '../../../assets/img/main/mainBg.png';
import { Btn60 } from '../../../components/Button';
import { Link } from 'react-router-dom';
import { TextWrap, TextRow, Img } from '../../../assets/styles/styles';
import mainIllust from '../../../assets/img/main/section1/mainIllust.svg';

const Section1 = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <TypoGraphy
            text="주식창을 볼 때마다 심장이 철렁했다면?"
            size="h2"
            color="var(--type-gray-2)"
          />
          <TextWrap lineHeight={45} padding="16px 0 42px 0">
            <TypoGraphy
              text="편안하게 투자할 수 있도록"
              size="h1"
              color="var(--type-black)"
            />
            <TextRow>
              <TypoGraphy text="핀블" size="h1" color="var(--main-blue)" />
              <TypoGraphy
                text="이 도와드릴게요!"
                size="h1"
                color="var(--type-black)"
              />
            </TextRow>
          </TextWrap>
          <BtnWrapper to="/stock">
            <Btn60 type="able" text="지금 바로 시작하기" />
          </BtnWrapper>
        </div>
        <Img src={mainIllust} width="558.30px" />
      </Wrapper>
    </Container>
  );
};
export default Section1;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 535px;
  background: linear-gradient(270.04deg, #f6f8fe 18.96%, #eaefff 99.95%);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
`;

const BtnWrapper = styled(Link)`
  display: block;
  width: fit-content;
  height: fit-content;
`;
