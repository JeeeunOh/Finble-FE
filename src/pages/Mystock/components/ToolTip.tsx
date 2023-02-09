import { useState } from 'react';
import styled from 'styled-components';
import { TextWrap } from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';

const ToolTip = ({ display }: { display: boolean }) => {
  let wrapDisplay = 'none';
  if (display) wrapDisplay = 'flex';

  return (
    <Wrap display={wrapDisplay}>
      <Triangle />
      <Square>
        <TextWrap lineHeight={20}>
          <TypoGraphy
            text="현재 총 자산을 기준으로 계산해 보았을 때, 가장 많이 떨어진 시기에 이만큼 자산이 줄었을 것이라는 의미에요."
            size="b4"
            color="var(--type-white)"
          />
        </TextWrap>
      </Square>
    </Wrap>
  );
};

export default ToolTip;

const Wrap = styled.div<{ display: string }>`
  display: ${(props) => props.display || 'none'};
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: calc(14px * 1) solid var(--type-gray-1);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
`;

const Square = styled.div`
  width: 288px;
  height: auto;
  padding: 15px 20px;
  background-color: var(--type-gray-1);
  border-radius: 5px;
`;
