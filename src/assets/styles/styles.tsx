import styled from 'styled-components';

// Container
const Container = styled.div<{ padding?: string; maxWidth?: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.maxWidth || 1000}px;
  padding: ${(props) => props.padding || '0px'};
`;

const Row = styled.div<{ lineHeight?: number }>`
  display: flex;
  // width: 100%;
  line-height: ${(props) => props.lineHeight || 44.99}px;
`;

// Text
const TextWrap = styled.div<{
  lineHeight?: number;
  padding?: string;
  align?: string;
}>`
  padding: ${(props) => props.padding || 0};
  line-height: ${(props) => props.lineHeight || 44.99}px;
  text-align: ${(props) => props.align || 'left'};
`;

const TextRow = styled.div<{ align?: string; lineHeight?: number }>`
  width: 100%;
  display: flex;
  text-align: ${(props) => props.align || 'left'};
  justify-content: ${(props) => props.align || 'inherit'};
  line-height: ${(props) => props.lineHeight || 44.99}px;
`;

//Img
const ImgContainer = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || '70%'};
  height: ${(props) => props.height || '70%'};
  display: flex;
  align-items: flex-end;
  justify-contents: center;
`;
const Img = styled.img<{ width?: string }>`
  width: ${(props) => props.width || '100%'};
`;

export { Container, ImgContainer, Img, TextWrap, TextRow, Row };
