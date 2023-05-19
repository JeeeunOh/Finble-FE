import styled from 'styled-components';
import { TextRow } from '../../../../assets/styles/styles';
import TypoGraphy from '../../../../components/Typography';

interface label {
  color: string;
  name?: string;
  sector?: string;
  rate?: string;
}

const StockLabel = ({ color, name, sector, rate }: label) => {
  return (
    <Container>
      <Left>
        <ColorBox color={color} />
        <TypoGraphy text={name} size="b3" color="var(--type-gray-1)" />
        <TypoGraphy text={sector} size="b4" color="var(--type-gray-4)" />
      </Left>
      <TypoGraphy text={rate + '%'} size="b3" color="var(--type-gray-1)" />
    </Container>
  );
};

const SectorLabel = ({ color, sector, rate }: label) => {
  return (
    <Container width="auto">
      <Left>
        <ColorBox color={color} width={13} height={13} />
        <TypoGraphy text={sector} size="b3" color="var(--type-gray-2)" />
        <TypoGraphy text={rate + '%'} size="b3" color="var(--type-gray-2)" />
      </Left>
    </Container>
  );
};

const GraphLabel = ({ page }: { page: string }) => {
  let text1, text2;
  if (page === 'lab') {
    text1 = '기존 포트폴리오';
    text2 = '새로 만든 포트폴리오';
  } else {
    text1 = '내 포트폴리오';
    text2 = '코스피';
  }
  return (
    <Row padding="15px 0 5px 10px">
      <Row>
        <ColorBox color="var(--main-blue)" width={35} height={5} />
        <TypoGraphy text={text1} size="b3" />
      </Row>
      <Row>
        <ColorBox color="var(--semantic-red)" width={35} height={5} />
        <TypoGraphy text={text2} size="b3" />
      </Row>
    </Row>
  );
};

export { StockLabel, SectorLabel, GraphLabel };

const Container = styled.div<{ width?: string }>`
  display: flex;
  justify-content: space-between;
  height: 29px;
  align-items: center;
  width: ${(props) => props.width || '185px'};
`;

const ColorBox = styled.div<{ color: string; width?: number; height?: number }>`
  width: ${(props) => props.width || 11}px;
  height: ${(props) => props.height || 29}px;
  background: ${(props) => props.color || 'black'};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Row = styled.div<{ padding?: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${(props) => props.padding || 0};
`;
