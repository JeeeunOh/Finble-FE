import styled from 'styled-components';
import del from '../../../assets/img/lab/del.svg';
import { ETFList } from '../../../assets/ETFList';
import TypoGraphy from '../../../components/Typography';
import { TextWrap } from '../../../assets/styles/styles';

export interface IETFFlag {
  symbol: string;
  flag: boolean;
  ratio: number;
}
interface addedItem {
  listNum: number;
  itemNum: number;
  ETFFlag: IETFFlag[][];
  onChangeRatio: (listNum: number, itemNum: number, ratio: number) => void;
  onChangeETF: (listNum: number, itemNum: number) => void;
}

export const AddedItem = ({
  listNum,
  itemNum,
  ETFFlag,
  onChangeETF,
  onChangeRatio,
}: addedItem) => {
  let img;
  for (let i = 0; i < ETFList.length; i++) {
    for (let j = 0; j < ETFList[i].length; j++) {
      if (listNum === i && itemNum === j) {
        img = ETFList[i][j].img;
      }
    }
  }
  return (
    <Container>
      <Img
        src={del}
        onClick={() => {
          onChangeETF(listNum, itemNum);
        }}
      />
      <Box>
        <Row>
          <Profile src={img} />
          <Column>
            <TypoGraphy
              text={ETFFlag[listNum][itemNum].symbol}
              color="var(--main-blue)"
              size="t3"
              style={{ marginBottom: '5px' }}
            />
            <TypoGraphy
              text={ETFList[listNum][itemNum].intro}
              color="var(--type-gray-2)"
              size="b4"
            />
          </Column>
        </Row>

        <InputBox>
          <InputArea
            value={ETFFlag[listNum][itemNum].ratio}
            onChange={(e) => {
              // changeMine(item.portfolio.id, e);
              onChangeRatio(listNum, itemNum, Number(e.target.value));
            }}
          />
          <TypoGraphy text="%" size="input" color="var(--type-gray-3)" />
        </InputBox>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  margin-bottom: 12px;
`;

const Box = styled.div`
  display: flex;
  width: 495.6px;
  align-items: center;
  justify-content: space-between;
  padding: 19px 16px;
  background: #f6f8ff;
  border-radius: 10px;
`;

const Img = styled.img`
  height: 25px;
  width: 23px;
  margin-right: 18px;
  cursor: pointer;
`;

const Profile = styled.img`
  height: 51px;
  width: 51px;
  margin-right: 18px;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
  height: 31px;
  background: #ffffff;
  border: 0.910972px solid #dedede;
  border-radius: 5.46583px;
  padding: 15px 10px;
  font-size: var(--fs-b2);
  font-weight: var(--fw-b2);
`;

const InputArea = styled.input`
  width: 100%;
  font-size: var(--fs-b2);
  font-weight: var(--fw-b2);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--type-gray-5);
  }
`;
