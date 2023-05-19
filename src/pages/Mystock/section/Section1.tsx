import { useState } from 'react';
import styled from 'styled-components';
import { Container, TextRow, TextWrap } from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { SectorLabel, StockLabel } from '../components/Graph/Label';
import { useSelector } from 'react-redux';
import { firstNameState } from '../../../store/slice/userSlice';
import { IInitData } from '../components/initData';
ChartJS.register(ArcElement, Tooltip, Legend);

const Section1 = ({ data }: { data: IInitData }) => {
  const [stock, setStock] = useState(data.portfolio_ratio);
  const [sector, setPortfolio] = useState(data.sector_ratio);
  const name = useSelector(firstNameState);

  const backgroundColor = [
    '#6792F8',
    '#FFE07E',
    '#4FEDAE',
    '#A574EE',
    '#3F4658',
    '#20CBDD',
    '#5EC596',
    '#A5A5A5',
  ];
  const graphData = {
    labels: [],
    datasets: [
      {
        // label: '# of Votes',
        data: stock.map((i: { ratio: number }) => i.ratio),
        backgroundColor: backgroundColor,
        borderWidth: 0,
        cutout: '65%',
      },
    ],
  };

  const [assets, setAssets] = useState([
    Math.floor(data.present_val_sum).toLocaleString('ko-KR'),
    Math.floor(data.invested_val_sum).toLocaleString('ko-KR'),
  ]);

  let sectorText1, sectorText2;
  if (Array.from(data.sector_ratio).length > 1) {
    sectorText1 = '와 \u00A0';
    sectorText2 =
      data.sector_ratio[1].sector === 'ETF'
        ? data.sector_ratio[1].sector
        : `${data.sector_ratio[1].sector}주`;
  } else {
    sectorText1 = '';
    sectorText2 = '';
  }

  const content = [
    {
      color: 'var(--main-blue)',
      text:
        data.sector_ratio[0].sector === 'ETF'
          ? data.sector_ratio[0].sector
          : `${data.sector_ratio[0].sector}주`,
    },
    {
      color: 'var(--type-black)',
      text: sectorText1,
    },
    {
      color: 'var(--main-blue)',
      text: sectorText2,
    },
    {
      color: 'var(--type-black)',
      text: '의 비중이 가장 크네요',
    },
  ];

  return (
    <Wrap>
      <Container maxWidth={1000}>
        {/* title */}
        <TextWrap padding="0 0 7px 0">
          <TypoGraphy
            text={name + '님의 주식은 어떻게 이루어졌을까요?'}
            color="var(--type-gray-2)"
            size="t3"
          />
        </TextWrap>
        <TextRow>
          {content.map(
            (
              i: {
                color: string;
                text: string;
              },
              index: number
            ) => (
              <TypoGraphy text={i.text} color={i.color} size="t2" key={index} />
            )
          )}
        </TextRow>

        {/* box */}
        <WhiteBox>
          {/* left text */}
          <SubContainer width={30}>
            <TypoGraphy text="총 자산" size="b3" color="var(--type-gray-2)" />
            <TextRow lineHeight={85}>
              <TypoGraphy text={assets[0]} size="30px" />
              <TypoGraphy
                text="&nbsp;원"
                size="30px"
                color="var(--type-gray-2)"
              />
            </TextRow>
            <TextWrap padding="10px 0 0 0">
              <TypoGraphy
                text="총 투자 금액"
                size="b3"
                color="var(--type-gray-2)"
              />
              <TextRow lineHeight={42}>
                <TypoGraphy text={assets[1]} size="b1" />
                <TypoGraphy
                  text="&nbsp;원"
                  size="b1"
                  color="var(--type-gray-2)"
                />
              </TextRow>
            </TextWrap>
          </SubContainer>

          {/* right graph */}
          <SubContainer border="none">
            {/* 종목별 graph */}
            <TypoGraphy
              text="종목별 비중"
              size="b2"
              color="var(--type-gray-2)"
            />
            <DoughnutGraphWrapper>
              <DoughnutBox>
                <Doughnut data={graphData} width="150px" height="150px" />
              </DoughnutBox>
              <LabelWrapper>
                {data.portfolio_ratio.map(
                  (
                    i: {
                      stock: { name: string; sector: string };
                      ratio: number;
                    },
                    index: number
                  ) => (
                    <StockLabel
                      key={index}
                      color={backgroundColor[index]}
                      name={i.stock.name}
                      sector={i.stock.sector}
                      rate={i.ratio.toFixed(1)}
                    />
                  )
                )}
              </LabelWrapper>
            </DoughnutGraphWrapper>

            {/* 섹터별 graph */}
            <TypoGraphy
              text="섹터별 비중"
              size="b2"
              color="var(--type-gray-2)"
            />
            <BarGraphWrapper>
              {sector.map(
                (
                  i: {
                    sector: string;
                    ratio: number;
                  },
                  index: number
                ) => (
                  <BarGraph
                    key={index}
                    color={backgroundColor[index]}
                    width={i.ratio}
                  />
                )
              )}
            </BarGraphWrapper>
            <LabelWrapper padding="0 15px">
              {sector.map(
                (
                  i: {
                    sector: string;
                    ratio: number;
                  },
                  index: number
                ) => (
                  <SectorLabel
                    key={index}
                    color={backgroundColor[index]}
                    rate={'' + i.ratio}
                    sector={i.sector}
                  />
                )
              )}
            </LabelWrapper>
          </SubContainer>
        </WhiteBox>
      </Container>
    </Wrap>
  );
};

export default Section1;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  background: var(--type-gray-6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 114px 0 120px 0;
`;

const WhiteBox = styled.div`
  padding: 30px 20px;
  background: var(--type-white);
  border-radius: 20px;
  margin: 37px 0 0 0;
  display: flex;
`;

const SubContainer = styled.div<{ border?: string; width?: number }>`
  border-right: ${(props) => props.border || '2px solid var(--type-gray-5)'};
  padding: 0 24px;
  width: ${(props) => props.width || 70}%;
`;

const DoughnutGraphWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  justify-content: space-between;
  padding: 10px 0 20px 10px;
  margin: 0 0 15px 0;
  gap: 25px;
`;
const DoughnutBox = styled.div`
  width: 150px;
  height: 150px;
`;
const LabelWrapper = styled.div<{ padding?: string }>`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  column-gap: 23px;
  row-gap: 15px;
  padding: ${(props) => props.padding || 'none'};
`;

const BarGraphWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 14px;
  margin: 15px 0 10px 15px;
`;
const BarGraph = styled.div<{ width: number; color: string }>`
  width: ${(props) => String(props.width) || '0'}%;
  height: 100%;
  background: ${(props) => props.color || 'var(--type-gray-3)'};
`;
