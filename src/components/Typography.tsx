import styled from 'styled-components';

interface typo {
  text?: string;
  size?: string;
  color?: string;
  style?: React.CSSProperties | undefined;
}

const TypoGraphy = ({ text, size, color, style }: typo) => {
  return (
    <Container size={size} color={color} style={style}>
      {text}
    </Container>
  );
};

export default TypoGraphy;

const Container = styled.div<{ size?: string; color?: string }>`
  font-size: ${(props) =>
    props.size === 'h1'
      ? 'var(--fs-h1)'
      : props.size === 'h2'
      ? 'var(--fs-h2)'
      : props.size === 'h3'
      ? 'var(--fs-h3)'
      : props.size === 't1'
      ? 'var(--fs-t1)'
      : props.size === 't2'
      ? 'var(--fs-t2)'
      : props.size === 't3'
      ? 'var(--fs-t3)'
      : props.size === 'b1'
      ? 'var(--fs-b1)'
      : props.size === 'b2'
      ? 'var(--fs-b2)'
      : props.size === 'b3'
      ? 'var(--fs-b3)'
      : props.size === 'b4'
      ? 'var(--fs-b4)'
      : props.size === 'small'
      ? 'var(--fs-small)'
      : props.size === 'input'
      ? 'var(--fs-input)'
      : props.size};

  font-weight: ${(props) =>
    props.size === 'h1'
      ? 'var(--fw-h1)'
      : props.size === 'h2'
      ? 'var(--fw-h2)'
      : props.size === 'h3'
      ? 'var(--fw-h3)'
      : props.size === 't1'
      ? 'var(--fw-t1)'
      : props.size === 't2'
      ? 'var(--fw-t2)'
      : props.size === 't3'
      ? 'var(--fw-t3)'
      : props.size === 'b1'
      ? 'var(--fw-b1)'
      : props.size === 'b2'
      ? 'var(--fw-b2)'
      : props.size === 'b3'
      ? 'var(--fw-b3)'
      : props.size === 'b4'
      ? 'var(--fw-b4)'
      : props.size === 'small'
      ? 'var(--fw-small)'
      : props.size === 'input'
      ? 'var(--fw-input)'
      : 500};

  color: ${(props) => props.color || 'var(--type-black)'};
`;
