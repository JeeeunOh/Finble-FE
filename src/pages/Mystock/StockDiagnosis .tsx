import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useAppSelect } from '../../store/configStore.hooks';
import { tokenState } from '../../store/slice/tokenSlice';
import { nameState } from '../../store/slice/userSlice';
import Section1 from './section/Section1';
import Section2 from './section/Section2';
import { IInitData, initData } from './components/initData';
import { getPortfolioAnalysis } from '../../network/api';
import Header from '../../components/Header';
import Loading from './Loading';

const StockDiagnosis = () => {
  const token = useAppSelect(tokenState);
  const name = useSelector(nameState); // 성 + 이름
  const [data, setData] = useState(initData as IInitData);

  // 포트폴리오 진단 api 연결
  useEffect(() => {
    if (name !== '') {
      getPortfolioAnalysis(token, setData);
    }
  }, []);

  //스크롤바
  let paddingFlag;
  if (data !== initData) paddingFlag = false;
  else paddingFlag = true;

  return (
    <Container>
      <Header paddingFlag={paddingFlag} />
      <div style={{ marginTop: '50px' }}></div>
      {data !== initData ? (
        <>
          <Section1 data={data} />
          <Section2 data={data} />
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default StockDiagnosis;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
