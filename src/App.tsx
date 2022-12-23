import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/fonts.scss';
import styled from 'styled-components';
import { rem } from 'polished';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Home from './pages/Home';
import theme from './styles/theme';
import BlackFriday from './components/BlackFriday';
import Nav from './components/Nav';
import Components from './pages/Components';
import Sitemap from './pages/Sitemap';
import Workshop from './pages/Workshop';

import Story from './pages/Story';
import Comparison from './pages/Comparison';
import Vip from './pages/Vip';
import Footer from './components/Footer';
import Crypto from './pages/Crypto';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppWrap>
          <BlackFriday />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/vip" element={<Vip />} />
            <Route path="/story" element={<Story />} />
            <Route path="/comparison" element={<Comparison />} />
          </Routes>
          <Footer />
        </AppWrap>
      </ThemeProvider>
    </>
  );
}

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default App;
