import styled from 'styled-components';
import { TextWrap } from '../../../../assets/styles/styles';
import TypoGraphy from '../../../../components/Typography';
import Input from '../../../../components/Input';
import SearchListBox from '../SearchListBox';
import { useEffect, useState } from 'react';
import Modal2 from './Modal2';
import { SERVER } from '../../../../network/config';
import { tokenState } from '../../../../store/slice/tokenSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ISearchStock } from '../../../../interface/interface';

const Modal = ({
  setModalOpen,
}: {
  setModalOpen: (value: React.SetStateAction<boolean>) => void;
}) => {
  const [stockName, setStockName] = useState('');
  const [market, setMarket] = useState('');
  const [symbol, setSymbol] = useState('');
  const [click, setclick] = useState(false);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([] as ISearchStock[]);

  const token = useSelector(tokenState);

  const onClick = (i: ISearchStock) => {
    setStockName(i.name);
    setMarket(i.market);
    setSymbol(i.symbol);
    setclick(true);
  };

  // 검색 api 연결
  useEffect(() => {
    fetch(`${SERVER}/search/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ search: search }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [search]);

  return (
    <>
      {!click ? (
        <>
          <InputWrap>
            <Input type="search" setSearch={setSearch} />
          </InputWrap>

          {data.length === 0 ? (
            <TextWrap align="center" padding="100px 0 0 0">
              <TypoGraphy
                text="검색된 종목이 없습니다"
                size="b2"
                color="var(--type-gray-4)"
              />
            </TextWrap>
          ) : (
            <SearchResult>
              {data.map((i: ISearchStock, index: number) => (
                <div key={index} onClick={() => onClick(i)}>
                  <SearchListBox name={i.name} symbol={i.symbol} />
                </div>
              ))}
            </SearchResult>
          )}
        </>
      ) : (
        <Modal2
          name={stockName}
          market={market}
          symbol={symbol}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default Modal;

const InputWrap = styled.div`
  width: 100%;
  padding: 25px 26px 0 26px;
`;
const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  width: 100%;
  height: 410px;
  overflow-y: auto;
  margin: 19px 0;
  padding: 0 12px 0 21px;

  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-thumb {
    height: 90px;
    background-color: #ccd8ff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;
