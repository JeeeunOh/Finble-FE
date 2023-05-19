import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { TextWrap, TextRow } from '../../../assets/styles/styles';
import { useState, useEffect } from 'react';
import { Btn10 } from '../../../components/Button';
import { LossBar } from '../components/LossBar';
import { EarnBar } from '../components/EarnBar';

import { Line } from 'react-chartjs-2';

import { tokenState } from '../../../store/slice/tokenSlice';
import { useSelector } from 'react-redux';

import q from '../../../assets/img/lab/q.png';
import a from '../../../assets/img/lab/a.png';
import up from '../../../assets/img/lab/up.svg';
import down from '../../../assets/img/lab/down.svg';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import StepBox from '../../../components/StepBox';
import { postEmail } from '../../../network/api';
import { GraphLabel } from '../../Mystock/components/Graph/Label';
import { ILabData } from '../labInitData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Result = ({ data }: { data: ILabData }) => {
  const token = useSelector(tokenState);
  const [email, setEmail] = useState('');
  // 연평균 수익률
  const [text1, setText1] = useState('낮아졌고');
  // 최대 낙폭
  const [text2, setText2] = useState('줄어들었어요');
  // tip flag
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [inform, setInform] = useState(false);
  const [totalPer, setTotalPer] = useState('최종금액Per');

  useEffect(() => {
    if (
      Math.ceil(data.original_portfolio_profit) <
      Math.ceil(data.test_portfolio_profit)
    ) {
      setText1('높아졌고');
    }
    if (
      Math.ceil(data.original_portfolio_max_fall) <
      Math.ceil(data.test_portfolio_max_fall)
    ) {
      setText2('커졌어요');
    }
    let per = Math.ceil(
      ((data.final_val_test - data.present_val_sum) / data.present_val_sum) *
        100
    );
    if (per >= 0) {
      setTotalPer('+' + String(per));
    } else {
      setTotalPer(String(per));
    }
  }, [data]);

  const list1 = [
    [['black', `10년 동안 테스트했을 때`]],
    [
      ['blue', '연평균 수익률'],
      [
        'black',
        `은 ${Math.ceil(data.annual_profit_test)}%로 ${Math.abs(
          Math.ceil(data.annual_profit_test) -
            Math.ceil(data.annual_profit_original)
        )}%p ${text1}`,
      ],
    ],
    [
      ['blue', '최대 낙폭'],
      [
        'black',
        `은 ${Math.ceil(data.test_portfolio_max_fall)}%로 ${Math.abs(
          Math.ceil(data.test_portfolio_max_fall) -
            Math.ceil(data.original_portfolio_max_fall)
        )}%p ${text2}`,
      ],
    ],
  ];

  const list2 = [
    [
      [
        'black',
        `현재 투자원금인 ${Math.ceil(data.present_val_sum).toLocaleString(
          'ko-KR'
        )}원을 10년간 투자했다면`,
      ],
    ],
    [
      ['black', '최종 금액은\u00A0'],
      [
        'blue',
        ` ${Math.ceil(data.final_val_test).toLocaleString(
          'ko-KR'
        )}원(${totalPer}%)`,
      ],
      ['black', '이 되었을 거에요.'],
    ],
  ];

  const question = [
    {
      flag: q1,
      setFlag: setQ1,
      question: '수익률을 더 높이려면 어떻게 해야하나요?',
      answer1:
        '보유 중인 종목 중 개별 기업에 투자하는 주식의 비중을 더 높여보세요. ',
      answer2:
        '그렇지만 동시에 포트폴리오의 안정성이 낮아질 수도 있으니 조심하세요!',
    },
    {
      flag: q2,
      setFlag: setQ2,
      question: '더 안전한 포트폴리오를 만드려면 어떻게 해야하나요?',
      answer1: '새로운 자산 유형을 추가하거나 비중을 늘려보세요. ',
      answer2:
        '아직 없으시다면 추천해드린 S&P 500 지수를 추종하는 ETF, 채권을 포함하고 있는 ETF 등을 추가해보세요! ',
    },
  ];

  const graphData = {
    labels: data.graph_original_portfolio.map(
      (item: { date: string; data: number }) =>
        item.date.substring(0, 7).replace('-', '.')
    ),
    datasets: [
      {
        label: '기존 포트폴리오',
        data: data.graph_original_portfolio.map(
          (item: { date: string; data: number }) => Math.ceil(item.data)
        ),
        borderColor: 'rgb(103, 146, 248)',
        pointStyle: false,
        spanGaps: false,
      },
      {
        label: '새로 만든 포트폴리오',
        data: data.graph_test_portfolio.map(
          (item: { date: string; data: number }) => Math.ceil(item.data)
        ),
        borderColor: 'rgb(255, 88, 82)',
        pointStyle: false,
        spanGaps: false,
      },
    ],
  } as any;

  const saveEmail = async (email: string) => {
    if (email.includes('@')) {
      (await postEmail(token, email)) as any;
      setInform(true);
    } else {
      alert('유효한 이메일 주소를 입력해주세요!');
    }
  };

  return (
    <Container>
      <Column padding="85px 0 76px 0">
        <TextRow
          style={{
            justifyContent: 'space-between',
            marginBottom: '79px',
          }}
        >
          <Column style={{ justifyContent: 'start' }}>
            <TypoGraphy text="투자 실험 결과" size="h1" />
            <TextWrap lineHeight={29} padding="14px 0 0 0">
              {list1.map((items: string[][], idx: number) => (
                <TextRow lineHeight={29}>
                  {items.map((item: string[], idx: number) =>
                    item[0] === 'black' ? (
                      <TypoGraphy text={item[1]} size="t3" />
                    ) : (
                      <TypoGraphy
                        text={item[1]}
                        color="var(--main-blue)"
                        size="t3"
                      />
                    )
                  )}
                </TextRow>
              ))}
            </TextWrap>
          </Column>
          <TextRow>
            <BarGraphWrapper>
              <TypoGraphy text="연평균 수익률" size="b2" />
              <EarnBar
                test={Math.ceil(data.annual_profit_test)}
                original={Math.ceil(data.annual_profit_original)}
              />
            </BarGraphWrapper>
            <BarGraphWrapper>
              <TypoGraphy text="최대 낙폭" size="b2" />
              <LossBar
                test={Math.ceil(data.test_portfolio_max_fall)}
                original={Math.ceil(data.original_portfolio_max_fall)}
              />
            </BarGraphWrapper>
          </TextRow>
        </TextRow>

        <TextRow
          style={{ justifyContent: 'space-between', maxWidth: '1000px' }}
        >
          <Column>
            <TextWrap lineHeight={29} style={{ marginBottom: '32px' }}>
              {list2.map((items: string[][], idx: number) => (
                <TextRow lineHeight={29}>
                  {items.map((item: string[], idx: number) =>
                    item[0] === 'black' ? (
                      <TypoGraphy text={item[1]} size="t3" />
                    ) : (
                      <TypoGraphy
                        text={item[1]}
                        color="var(--main-blue)"
                        size="t3"
                      />
                    )
                  )}
                </TextRow>
              ))}
            </TextWrap>
          </Column>
        </TextRow>
        <LineGraphWrapper>
          <div style={{ width: '100%', padding: '0 0 0 30px' }}>
            <GraphLabel page="lab" />
          </div>
          <LineGraph>
            <Line
              data={graphData}
              options={options}
              width="910px"
              height="390px"
              style={{ padding: '10px 0' }}
            />
          </LineGraph>
        </LineGraphWrapper>
        <Column padding="99px 0 0 0">
          <TipContainer>
            <TypoGraphy
              text="더 나은 투자 전략을 만들기 위한 TIP"
              size="t2"
              style={{ display: 'flex', alignItems: 'center' }}
            />
          </TipContainer>

          {question.map(
            (
              item: {
                flag: boolean;
                setFlag: React.Dispatch<React.SetStateAction<boolean>>;
                question: string;
                answer1: string;
                answer2: string;
              },
              idx: number
            ) => (
              <>
                <TipLine />

                <QuestionRow>
                  <div style={{ display: 'flex', justifyContent: 'start' }}>
                    <ImgQA src={q} />
                    <TypoGraphy
                      text={item.question}
                      size="b1"
                      style={{ marginLeft: '30px' }}
                    />
                  </div>

                  <div
                    onClick={() => {
                      item.setFlag(!item.flag);
                    }}
                  >
                    {item.flag ? (
                      <ImgToggle src={up} />
                    ) : (
                      <ImgToggle src={down} />
                    )}
                  </div>
                </QuestionRow>
                {item.flag ? (
                  <>
                    <TipLine />
                    <AnswerRow>
                      <ImgQA
                        src={a}
                        style={{ marginTop: '-25px', marginLeft: '15px' }}
                      />

                      <TextWrap
                        lineHeight={30}
                        style={{
                          marginLeft: '30px',
                        }}
                      >
                        <TypoGraphy text={item.answer1} size="b1" />
                        <TypoGraphy text={item.answer2} size="b1" />
                      </TextWrap>
                    </AnswerRow>
                  </>
                ) : (
                  <></>
                )}
              </>
            )
          )}
          <TipLine />
        </Column>
      </Column>

      <StepBox step={3} />
      <MoreWrapper>
        <TypoGraphy text="더 많은 기능을 써보고 싶다면?" size="t2" />
        <TypoGraphy
          text="아직 핀블은 베타 버전이에요. 정식으로 출시하면 알려드릴게요!"
          size="b1"
          color="var(--type-gray-2)"
          style={{ marginTop: '10px' }}
        />
        <Row>
          <Input
            placeholder="이메일 또는 전화번호 입력하기"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {inform ? (
            <Btn10 type="inform" text="완료" />
          ) : (
            <div
              onClick={() => {
                saveEmail(email);
              }}
            >
              <Btn10 type="inform" text="소식 받기" />
            </div>
          )}
        </Row>
      </MoreWrapper>
    </Container>
  );
};
export default Result;

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      align: 'start',
      title: {
        color: 'black',
      },
    },
    tooltip: {
      padding: 10,
      bodySpacing: 5,
      usePointStyle: true,
    },
  },

  scales: {
    y: {
      id: 'yAxes',
      display: true,
    },
    x: {
      id: 'xAxes',
      display: true,
      grid: {
        display: false,
      },
    },
  },
} as any;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 76px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 38px;
`;

const Column = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 1000px;
  padding: ${(props) => props.padding || 0};
`;

const BarGraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 234px;
  height: 233px;
  background: #ffffff;
  border-radius: 10px;
  border: 0.6px solid #dadada;
  margin-left: 23px;
  padding: 10px 20px;
`;

const LineGraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 448px;
  padding: 22px 0;
  border: 0.6px solid #dadada;
  background: #ffffff;
  border-radius: 17px;
`;

const LineGraph = styled.div`
  width: 910px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const TipLine = styled.div`
  background-color: #dadada;
  height: 1px;
  width: 1000px;
`;

const QuestionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 79px;
  padding: 0 40px;
`;

const AnswerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 122px;
  background-color: rgba(218, 218, 218, 0.4);
  padding: 0 25px;
`;

const ImgQA = styled.img`
  width: 29px;
  height: 30px;
  cursor: pointer;
`;

const ImgToggle = styled.img`
  width: 20px;
  height: 10px;
  cursor: pointer;
`;

const TipContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 35px;
  background-color: #dee7fd;
  width: 388px;
  height: 49px;
  border-radius: 32px 32px 32px 7px;
`;

const MoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebf0fe;
  width: 1000px;
  height: 237px;
  border-radius: 20px;
  margin-top: 42px;
`;

const Input = styled.input`
  width: 400px;
  height: 40px;
  background: #dee7fd;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-right: 15px;
  padding: 18px;
  font-size: 14px;

  &::placeholder {
    color: var(--type-gray-4);
  }
`;
