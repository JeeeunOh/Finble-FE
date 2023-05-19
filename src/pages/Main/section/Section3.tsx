import TypoGraphy from '../../../components/Typography';
import {
  Container,
  ImgContainer,
  Img,
  TextRow,
  TextWrap,
} from '../../../assets/styles/styles';
import mainSub2 from '../../../assets/img/main/section3/mainSub2.svg';
import mainSub3 from '../../../assets/img/main/section3/mainSub3.svg';
import Icon from '../../../assets/img/main/section3/Icon.svg';

const Section3 = () => {
  return (
    <Container padding="191px 0 107px 0" maxWidth={839}>
      <TextWrap lineHeight={45} align="center">
        <Img src={Icon} width="65px" height="44px" />
        <TypoGraphy text="마음 편히 주식 투자하는 방법," size="h1" />
        <TextRow align="center">
          <TypoGraphy text="핀블의 '" size="h1" />
          <TypoGraphy text="투자 실험" size="h1" color="var(--main-blue)" />
          <TypoGraphy text="'을 소개합니다." size="h1" />
        </TextRow>
      </TextWrap>
      <TextWrap lineHeight={20} align="center" padding="27px 0 44px 0">
        <TextRow align="center">
          <TypoGraphy
            text="가상의 투자 결과"
            size="t3"
            color="var(--main-blue)"
          />
          <TypoGraphy text="를 바라보며" size="t3" color="var(--type-gray-2)" />
        </TextRow>
        <TypoGraphy
          size="t3"
          color="var(--type-gray-2)"
          text="앞으로 어떻게 투자해야할지 미리 알아보세요."
        />
      </TextWrap>
      <TextRow>
        <ImgContainer width="100%" height="100%" style={{ gap: '23px' }}>
          <Img width="calc((100% - 23px) / 2)" src={mainSub2} />
          <Img width="calc((100% - 23px) / 2)" src={mainSub3} />
        </ImgContainer>
      </TextRow>
    </Container>
  );
};
export default Section3;
