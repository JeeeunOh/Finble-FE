import styled from 'styled-components';
import TypoGraphy from '../../../components/Typography';

interface stock {
  name: string;
  symbol: string;
  category?: string;
}

const SearchListBox = ({ name, symbol }: stock) => {
  return (
    <Container>
      <TypoGraphy text={name} size="b1" />
      <TypoGraphy text={symbol} color="#b9b9b9" size="input" />
    </Container>
  );
};

export default SearchListBox;

const Container = styled.div`
  width: 100%;
  height: 71px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;
  padding: 0 6px;

  &:hover {
    background: rgba(103, 146, 248, 0.1);
  }
`;
