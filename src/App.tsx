import Main from './pages/Main/Main';
import MyStock from './pages/Mystock/MyStock';
import Lab from './pages/Lab/Lab';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './assets/styles/Globalstyles';
import StockDiagnosis from './pages/Mystock/StockDiagnosis ';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientID: string = process.env.REACT_APP_CLIENT_ID as string;

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <BrowserRouter>
            <GoogleOAuthProvider clientId={clientID}>
              {/* <Header />
              <div style={{ marginTop: '50px' }}></div> */}
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/stock" element={<MyStock />} />
                <Route path="/lab" element={<Lab />} />
                <Route path="/diagnosis" element={<StockDiagnosis />} />
              </Routes>
            </GoogleOAuthProvider>
          </BrowserRouter>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
