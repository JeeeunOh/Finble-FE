import TypoGraphy from '../../../components/Typography';
import styled from 'styled-components';
import { TextRow, TextWrap, Img } from '../../../assets/styles/styles';
import graph1 from '../../../assets/img/lab/graph1.gif';
import graph2 from '../../../assets/img/lab/intro_graph.svg';

const Intro = () => {
  return (
    <Container>
      {/* title */}
      <TypoGraphy text="투자 실험실" color="var(--main-blue)" size="t3" />
      <TextWrap align="center" lineHeight={45} padding="14px 0 60px 0">
        <TypoGraphy text="마음 편히 주식 투자하는 방법," size="h1" />
        <TextRow>
          <TypoGraphy text="핀블의 ‘" size="h1" />
          <TypoGraphy text="투자 실험" color="var(--main-blue)" size="h1" />
          <TypoGraphy text="’을 소개합니다." size="h1" />
        </TextRow>
      </TextWrap>

      {/* first box */}
      <Box>
        {/* left text */}
        <Column style={{ marginLeft: '48px' }}>
          <TextWrap padding="0 0 17px 0">
            <TextRow align="center">
              <TypoGraphy text="투자 실험" color="var(--main-blue)" size="h2" />
              <TypoGraphy text=", 왜 필요한 걸까요?" size="h2" />
            </TextRow>
          </TextWrap>

          <TextWrap lineHeight={26}>
            {list1.map((items: string[][], itemsIdx: number) => (
              <TextRow lineHeight={26} key={`list1_${itemsIdx}`}>
                {items.map((item: string[], itemIdx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy
                      text={item[1]}
                      size="b2"
                      key={`list1_0_${itemIdx}`}
                    />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="b2"
                      key={`list1_1_${itemIdx}`}
                    />
                  )
                )}
              </TextRow>
            ))}
          </TextWrap>

          <TextWrap lineHeight={26} padding="16.99px 0 0 0">
            {list2.map((items: string[][], itemsIdx: number) => (
              <TextRow lineHeight={26} key={`list2_${itemsIdx}`}>
                {items.map((item: string[], itemIdx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy
                      text={item[1]}
                      size="b2"
                      key={`list2_0_${itemIdx}`}
                    />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="b2"
                      key={`list2_1_${itemIdx}`}
                    />
                  )
                )}
              </TextRow>
            ))}
          </TextWrap>
        </Column>

        {/* right img */}
        {/* <ImgContainer width="532px"> */}
        <Img src={graph1} style={{ width: '343px', marginRight: '62px' }} />
        {/* </ImgContainer> */}
      </Box>

      {/* second box */}
      <Box
        style={{ marginTop: '26px', height: '314px', justifyContent: 'start' }}
      >
        {/* right img */}
        <Img style={{ width: '241px', marginLeft: '67px' }} src={graph2} />

        {/* left text */}
        <Column padding="0 0 0 63px">
          <TextWrap lineHeight={52} padding="0 0 17px 0">
            <TextRow align="center">
              <TypoGraphy text="투자 실험" color="var(--main-blue)" size="h2" />
              <TypoGraphy text="은 어떻게 하나요?" size="h2" />
            </TextRow>
          </TextWrap>

          <TextWrap lineHeight={26}>
            {list3.map((items: string[][], itemsIdx: number) => (
              <TextRow lineHeight={26} key={`list3_${itemsIdx}`}>
                {items.map((item: string[], itemIdx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy
                      text={item[1]}
                      size="b2"
                      key={`list3_0_${itemIdx}`}
                    />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="b2"
                      key={`list3_1_${itemIdx}`}
                    />
                  )
                )}
              </TextRow>
            ))}
          </TextWrap>

          <TextWrap lineHeight={26} padding="17px 0 0 0">
            {list4.map((items: string[][], itemsIdx: number) => (
              <TextRow lineHeight={26} key={`list4_${itemsIdx}`}>
                {items.map((item: string[], itemIdx: number) =>
                  item[0] === 'black' ? (
                    <TypoGraphy
                      text={item[1]}
                      size="b2"
                      key={`list4_0_${itemIdx}`}
                    />
                  ) : (
                    <TypoGraphy
                      text={item[1]}
                      color="var(--main-blue)"
                      size="b2"
                      key={`list4_1_${itemIdx}`}
                    />
                  )
                )}
              </TextRow>
            ))}
          </TextWrap>
        </Column>
      </Box>
    </Container>
  );
};

export default Intro;

const list1 = [
  [['blue', '“달걀을 한 바구니에 담지 말라”']],
  [['black', '이 속담을 한 번이라도 들어봤다면']],
  [['black', '쉽게 이해할 수 있어요.']],
];

const list2 = [
  [['black', '투자 실험을 통해 내 자산을 여러 "바구니"에 나눠보며']],
  [
    ['blue', '위험도는 낮추고, 수익률은 안정적'],
    ['black', '으로 만들 수 있어요.'],
  ],
];

const list3 = [
  [
    ['black', '개인이 직접 투자하기에는 힘든\u00A0'],
    ['blue', '채권, 금과 같은 자산'],
    ['black', '들을'],
  ],
  [['black', '전문기관에 맡겨 묶음으로 투자하는 방법.']],
  [
    ['blue', "즉, '펀드'처럼 투자하는 상품을 ETF"],
    ['black', '라고 해요.'],
  ],
  [
    [
      'black',
      '또한 ETF는 주식시장에 상장돼 있어 주식처럼 쉽게 사고팔 수 있어요.',
    ],
  ],
];

const list4 = [
  [['black', 'ETF만 잘 활용하면 거의 모든 자산군에 투자할 수 있으니,']],
  [
    ['blue', "자산을 여러 '바구니'에 나눈 것과 같은 효과"],
    ['black', '를 볼 수 있어요.'],
  ],
  [['black', '다양한 자산을 포트폴리오에 추가하며 투자 실험을 해보세요.']],
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  background: #f7f8fa;
  padding: ${70 + 50}px 0 90px 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 854px;
  height: 280px;
  background: #ffffff;
  border: 0.6px solid #dadada;
  border-radius: 20px;
`;

const Column = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: ${(props) => props.padding || 0};
`;
