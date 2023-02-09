import styled from 'styled-components';
import { Img } from '../../assets/styles/styles';
import noneLoginIllust from '../../assets/img/noneLoginIllust.svg';
import TypoGraphy from '../../components/Typography';

const Loading = () => {
  return (
    <Wrapper>
      <Img src={noneLoginIllust} width="494px" height="312px" />
      <TypoGraphy text="포트폴리오를 분석중이에요..." size="t2" />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   justify-content: center;
  padding-top: 113px;
`;
