import styled from 'styled-components';
import Section1 from './section/Section1';
import Section2 from './section/Section2';
import Section3 from './section/Section3';
import Footer from './section/Footer';
import Section4 from './section/Section4';

import { useEffect } from 'react';
import Header from '../../components/Header';

const Main = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Container>
      <Header />
      <div style={{ marginTop: '50px' }}></div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </Container>
  );
};
export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
