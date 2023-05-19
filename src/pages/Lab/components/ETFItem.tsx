import styled from 'styled-components';
import { TextWrap } from '../../../assets/styles/styles';
import TypoGraphy from '../../../components/Typography';
import { ETF } from '../../../interface/interface';
import { Btn10 } from '../../../components/Button';

interface IETFItem {
  item: ETF;
  ETFFlag: Array<Array<{ symbol: string; flag: boolean }>>;
  onChangeETF: (listNum: number, itemNum: number) => void;
  listNum: number;
  itemNum: number;
}

export const ETFItem = ({
  item,
  ETFFlag,
  onChangeETF,
  listNum,
  itemNum,
}: IETFItem) => {
  return (
    <Container>
      <Row padding="4px 0" style={{ justifyContent: 'space-between' }}>
        <Row>
          <Profile src={item.img} />
          <Column>
            <TypoGraphy text={item.name} size="b1" />
            <TypoGraphy
              text={item.intro}
              color="var(--type-gray-2)"
              size="b4"
            />
          </Column>
        </Row>

        {ETFFlag[listNum][itemNum].flag ? (
          <Btn10 text={'추가됨'} type="disable_add" />
        ) : (
          <div
            onClick={() => {
              onChangeETF(listNum, itemNum);
            }}
          >
            <Btn10 text={'추가하기'} type="add" />
          </div>
        )}
      </Row>
      <TextWrap lineHeight={26} padding="4px 0" style={{ height: '85px' }}>
        {item.detail.map((item: string, idx: number) => (
          <TypoGraphy
            text={item}
            color="var(--type-gray-2)"
            size="b2"
            key={`ETFITEM_${idx}`}
          />
        ))}
      </TextWrap>
      <TypoGraphy text={item.hashTag} color="var(--main-blue)" size="b3" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 438px;
  height: 190px;
  padding: 14.5px 19px;
  margin-bottom: 16px;
  background: #f6f8ff;
  border-radius: 10px;
`;

const Column = styled.div`
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const Row = styled.div<{ padding?: string }>`
  display: flex;
  padding: ${(props) => props.padding || 0};
  align-items: center;
`;

const Profile = styled.img`
  height: 50px;
  width: 50px;
`;
