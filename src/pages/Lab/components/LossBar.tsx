import styled from 'styled-components';
import TypoGraphy from '../../../components/Typography';

export const LossBar = ({
  original,
  test,
}: {
  original: number;
  test: number;
}) => {
  return (
    <Container>
      <LastBar height={original} />
      <CurBar height={test} />
      <Original>기존</Original>
      <Portfolio>포트폴리오</Portfolio>
      <Line />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 228px;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 15px;
  left: 8px;
  height: 0.6px;
  width: 175px;
  background-color: #909090;
`;

const LastBar = styled.div<{ height: number }>`
  position: absolute;
  top: 15px;
  left: 39px;
  width: 39px;
  height: ${(props) => props.height}px;
  background-color: #ffaeae;
  border-radius: 0px 0px 4px 4px;
`;

const CurBar = styled.div<{ height: number }>`
  position: absolute;
  top: 15px;
  right: 39px;

  width: 39px;
  height: ${(props) => props.height}px;
  background-color: #ff5852;
  border-radius: 0px 0px 4px 4px;
`;

const Original = styled.div`
  position: absolute;
  size: 14px;
  bottom: 2px;
  left: 42px;
  color: #a5a5a5;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
`;

const Portfolio = styled.div`
  size: 14px;
  font-weight: 600;
  color: #6792f8;
  background-color: #ebf0fe;
  width: 92px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  position: absolute;
  bottom: 0px;
  left: 90px;
`;
