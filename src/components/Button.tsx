import styled from 'styled-components';
import TypoGraphy from './Typography';

interface btn {
  type?: string;
  text?: string;
}

const Btn60 = ({ text, type }: btn) => {
  let textColor = 'var(--type-black)';

  if (type === 'login') textColor = 'var(--type-black)';
  else if (type === 'able' || type === 'add') textColor = 'var(--type-white)';
  else if (type === 'disable' || type === 'outline_able')
    textColor = 'var(--main-blue)';
  else if (type === 'outline_disable') textColor = 'var(--type-gray-4)';

  return (
    <Btn60Container type={type}>
      <TypoGraphy text={text} color={textColor} size="small" />
    </Btn60Container>
  );
};

const Btn10 = ({ text, type }: btn) => {
  let textColor = 'var(--type-black)';
  let textSize = 'small';

  if (type === 'add') textColor = 'var(--main-blue)';
  else if (type === 'disable_add' || type === 'disable_check')
    textColor = 'var(--type-gray-4)';
  else if (type === 'check' || type === 'inform' || type == 'checking')
    textColor = 'var(--type-white)';
  else if (type === 'big_add') {
    textColor = 'var(--main-blue)';
    textSize = 't3';
  }

  return (
    <Btn10Container type={type}>
      <TypoGraphy text={text} color={textColor} size={textSize} />
    </Btn10Container>
  );
};

export { Btn60, Btn10 };

const Btn60Container = styled.div<btn>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  cursor: pointer;

  padding: ${(props) =>
    props.type === 'login'
      ? '7px 14px'
      : props.type === 'able'
      ? '16px 60px'
      : props.type === 'disable'
      ? '16px 78px'
      : props.type === 'outline_disable' || props.type === 'outline_able'
      ? '8px 24px'
      : '20px 206px'};
  background: ${(props) =>
    props.type === 'login'
      ? 'transparent'
      : props.type === 'able' || props.type === 'add'
      ? 'var(--main-blue)'
      : 'var(--type-white)'};
  border: ${(props) =>
    props.type === 'login'
      ? '1px solid var(--main-blue)'
      : props.type === 'outline_disable'
      ? '2px solid var(--type-gray-4)'
      : props.type === 'outline_able'
      ? '2px solid var(--main-blue)'
      : 'none'};
`;

const Btn10Container = styled.div<btn>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;

  padding: ${(props) =>
    props.type === 'big_add'
      ? '28px 148px'
      : props.type === 'add' || props.type === 'disable_add'
      ? '11px 15px'
      : props.type === 'check' ||
        props.type === 'checking' ||
        props.type === 'disable_check'
      ? '14px 40px'
      : props.type === 'inform'
      ? '8px 14px'
      : '14px 20px'};

  background: ${(props) =>
    props.type === 'big_add'
      ? 'transparent'
      : props.type === 'check'
      ? 'var(--main-blue)'
      : props.type === 'checking'
      ? '#C2D4FE'
      : props.type === 'add'
      ? '#DEE7FD'
      : props.type === 'disable_check' || props.type === 'disable_add'
      ? 'var(--type-gray-5)'
      : 'var(--main-blue)'};

  border: ${(props) =>
    props.type === 'big_add' ? '2px dashed var(--main-blue)' : 'none'};
  height: ${(props) =>
    props.type === 'add' || props.type === 'disable_add' ? '38px' : 'auto'};
`;
