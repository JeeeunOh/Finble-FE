import styled from 'styled-components';
import {
  Img,
  ImgContainer,
  TextRow,
  TextWrap,
} from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';
import ArrowDown from '../../../assets/icons/arrowDown.svg';
import QuestionMark from '../../../assets/icons/questionMark.svg';
import ToolTip from './ToolTip';
import { useState } from 'react';

interface box {
  title: string;
  status?: string;
  max_fall: number;
  max_loss: number;
}

const WhiteSmallBox = ({ title, status, max_fall, max_loss }: box) => {
  let color, bgcolor;
  const [display, setDisplay] = useState(false);

  if (status == '위험') {
    color = 'var(--semantic-red)';
    bgcolor = 'rgba(255, 88, 82, 0.13)';
  } else if (status == '안전') {
    bgcolor = 'rgba(87, 220, 119, 0.13)';
    color = '#57DC77';
  }

  return (
    <WhiteBox width="406px" height="200px" borderColor={color}>
      <TextContainer>
        <TypoGraphy text={title} size="t3" />
        <StatusBox bgcolor={bgcolor}>
          <StatusCircle color={color} />
          <TypoGraphy text={status} size="b1" />
        </StatusBox>
      </TextContainer>

      <TextWrap padding="25px 0 0 0">
        <TextRow style={{ alignItems: 'center', gap: '10px' }}>
          <ImgContainer width="20px">
            <Img src={ArrowDown} />
          </ImgContainer>
          <TypoGraphy
            text={`${max_fall.toFixed(2)}%`}
            color="var(--main-blue)"
            size="t2"
          />
          <TypoGraphy
            text="( 최대낙폭 )"
            color="var(--type-gray-2)"
            size="b1"
          />
        </TextRow>
        <TextRow style={{ alignItems: 'center', gap: '10px', height: '36px' }}>
          <TypoGraphy
            text={`-₩ ${max_loss.toLocaleString('ko-KR')}`}
            color="var(--type-gray-2)"
            size="t3"
          />
          <ToolTipWrap>
            <ImgContainer
              width="22px"
              onClick={() => setDisplay((prev) => !prev)}
            >
              <Img src={QuestionMark} />
            </ImgContainer>
            <ToolTip display={display} />
          </ToolTipWrap>
        </TextRow>
      </TextWrap>
    </WhiteBox>
  );
};

const WhiteBox = styled.div<{
  width?: string;
  height?: string;
  padding?: string;
  borderColor?: string;
}>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border: ${(props) => `2px solid ${props.borderColor}` || 'none'};
  padding: ${(props) => props.padding || '25px 35px'};
  border-radius: 20px;
  background: var(--type-white);
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatusBox = styled.div<{ bgcolor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  gap: 10px;
  background: ${(props) => props.bgcolor || 'none'};
  width: 83px;
  height: 33px;
`;

const StatusCircle = styled.div<{ color?: string }>`
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color || 'none'};
`;

const ToolTipWrap = styled.div`
  width: 22px;
  height: 36px;
  padding: 13px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export { WhiteBox, WhiteSmallBox };
