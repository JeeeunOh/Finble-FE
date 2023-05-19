import styled from 'styled-components';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TypoGraphy from './Typography';

interface input {
  type: string;
  name?: string;
  market?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ type, name, market, setSearch }: input) => {
  let placeholder, unit;

  if (type === 'search') placeholder = '종목 검색 예) 카카오, 테슬라, SPY';
  else if (type === 'price') {
    placeholder = '예) 78000';
    if (market === 'US') unit = '$';
    else unit = '₩';
  } else if (type === 'number') {
    unit = '주';
    placeholder = '예) 1.2';
  }

  return (
    <InputBox>
      {type === 'search' ? (
        <FontAwesomeIcon icon={faMagnifyingGlass} color="var(--type-gray-3)" />
      ) : (
        <></>
      )}

      {type.includes('enter') ? (
        <TypoGraphy text={name} size="input" />
      ) : setSearch ? (
        <InputArea
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
        />
      ) : (
        <></>
      )}

      <TypoGraphy text={unit} color="var(--type-gray-1)" size="input" />
    </InputBox>
  );
};

export default Input;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  gap: 13px;
  padding: 11px 15px;
  border: 1px solid var(--type-gray-5);
  border-radius: 10px;

  &:focus-within {
    border: 1px solid var(--main-blue);
  }
`;

const InputArea = styled.input`
  font-size: var(--fs-b2);
  width: 100%;
  font-weight: var(--fw-b2);
  border: none;
  outline: none;
  display: flex;
  align-items: center;

  &::placeholder {
    color: var(--type-gray-5);
    font-size: var(--fs-b2);
  }
`;
