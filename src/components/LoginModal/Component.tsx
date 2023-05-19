import styled from 'styled-components';
import { TextWrap } from '../../assets/styles/styles';
import TypoGraphy from '../Typography';
import { GoogleButton } from './GoogleButton';

const ModalContent = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <TypoGraphy text="시작하기" size="t2" />
      <TextWrap lineHeight={26} padding="20px 0 26px 0" align="center">
        <TypoGraphy
          text="주린이들을 위한 분산 투자 가이드, 핀블"
          size="b1"
          color="var(--type-gray-2)"
        />
        <TypoGraphy
          text="포트폴리오 분석을 시작해보세요"
          size="b1"
          color="var(--type-gray-2)"
        />
      </TextWrap>
      <GoogleButton setModalOpen={setModalOpen} />
      <TextWrap lineHeight={21} padding="30px 0 0 0" align="center">
        <TypoGraphy
          text="로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,"
          size="b3"
          color="var(--type-gray-4)"
        />
        <TypoGraphy
          text="서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다."
          size="b3"
          color="var(--type-gray-4)"
        />
      </TextWrap>
    </>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
`;

// modal
const ModalOpen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export { ModalContent, ModalOpen, IconWrapper };
