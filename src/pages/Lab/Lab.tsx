import NoneLogin from '../Login/NoneLogin';
import Experiment from './section/Experiment';
import Result from './section/Result';
import Intro from './section/Intro';
import styled from 'styled-components';

import ReactModal from 'react-modal';
import { useState, useEffect } from 'react';
import { Img, TextRow, TextWrap } from '../../assets/styles/styles';

import TypoGraphy from '../../components/Typography';
import closeIcon from '../../assets/icons/close.svg';
import modalImg from '../../assets/img/lab/modalImg.svg';
import { labInitData } from './labInitData';

import { nameState } from '../../store/slice/userSlice';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { Cookies, useCookies } from 'react-cookie';

const list1 = [
  [
    ['blue', '가상의 돈'],
    ['black', '을 나눠서\u00A0'],
    ['blue', '투자'],
    ['black', '해보고, 어떤 결과가 나올지'],
  ],
  [
    ['blue', '미리 테스트'],
    ['black', '해보는 기능이에요. 지금 나의 상황과 비교하면서'],
  ],
  [['black', "'이렇게 투자했으면 어땠을까?' 하는 궁금증을 풀어보세요."]],
];

const Lab = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [isExp, setIsExp] = useState(false);
  const name = useSelector(nameState);
  const [data, setData] = useState(labInitData);

  // cookie
  const [appCookies, setAppCookies, removeCookie] = useCookies([
    'MODAL_EXPIRES',
  ]);
  const cookies = new Cookies().get('LOGIN_EXPIRES');
  const [hasCookie, setHasCookie] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  //팝업 하루동안 보지않기 (cookie)
  const getExpiredDate = (days: number) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + days);
    return date;
  };
  const closeModalUntilExpires = () => {
    if (!appCookies) return;

    const expires = getExpiredDate(5);
    setAppCookies('MODAL_EXPIRES', true, { path: '/', expires });
  };
  useEffect(() => {
    if (appCookies['MODAL_EXPIRES']) return;
    setHasCookie(false);
  }, []);

  return (
    <>
      <Header />
      <div style={{ marginTop: '50px' }}></div>
      {
        /*name !== ''*/ cookies !== undefined ? (
          <Container>
            <Intro />
            <Experiment
              isExp={isExp}
              setIsExp={setIsExp}
              data={data}
              setData={setData}
            />
            {data !== labInitData ? <Result data={data} /> : <></>}
            <ReactModal
              ariaHideApp={false}
              isOpen={modalOpen && !hasCookie}
              onRequestClose={() => setModalOpen(false)}
              style={{
                overlay: {
                  position: 'fixed',
                  background: 'rgba(0, 0, 0, 0.3)',
                },
                content: {
                  margin: 'auto',
                  width: '612px',
                  height: '362px',
                  background: 'var(--type-white)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '20px',
                  padding: '15px 20px 20px 20px',
                },
              }}
            >
              <ModalOpen>
                <TitleWrap>
                  <CheckWrap>
                    <input type="checkbox" onClick={closeModalUntilExpires} />
                    <TypoGraphy
                      text="하루동안 보지않기"
                      color="var(--type-gray-1)"
                      size="b3"
                    />
                  </CheckWrap>
                  <Img
                    src={closeIcon}
                    width="19px"
                    height="19px"
                    style={{
                      cursor: 'pointer',
                      zIndex: 99,
                    }}
                    onClick={() => {
                      setModalOpen(false);
                    }}
                  />
                </TitleWrap>
                <TextRow style={{ marginTop: '-15px' }}>
                  <TypoGraphy
                    text="투자 실험"
                    size="t2"
                    color="var(--main-blue)"
                  />
                  <TypoGraphy text="이 무엇인가요?" size="t2" />
                </TextRow>
                <Img src={modalImg} height="188px" />

                <TextWrap lineHeight={26}>
                  {list1.map((items: string[][], itemsIdx: number) => (
                    <TextRow
                      align="center"
                      key={`Lab_list1_${itemsIdx}`}
                      lineHeight={26}
                    >
                      {items.map((item: string[], itemIdx: number) =>
                        item[0] === 'black' ? (
                          <TypoGraphy
                            text={item[1]}
                            size="b2"
                            color="var(--type-gray-2)"
                            key={`Lab_list1_0_${itemIdx}`}
                          />
                        ) : (
                          <TypoGraphy
                            text={item[1]}
                            color="var(--main-blue)"
                            size="b2"
                            key={`Lab_list1_1_${itemIdx}`}
                          />
                        )
                      )}
                    </TextRow>
                  ))}
                </TextWrap>
              </ModalOpen>
            </ReactModal>
          </Container>
        ) : (
          <NoneLogin />
        )
      }
    </>
  );
};
export default Lab;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f7f8fa;
`;

// modal
const ModalOpen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  z-index: 99;
  padding: 0 0 5px 0;
`;

const CheckWrap = styled.div`
  display: flex;
  align-itmes: flex-end;
  justify-content: center;
  gap: 5px;
`;
