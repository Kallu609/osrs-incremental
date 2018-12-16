import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import woffFont from '../assets/RuneScape-UF.woff';
import woff2Font from '../assets/RuneScape-UF.woff2';
import Content from '../components/Content';
import SkillsList from '../components/SkillsList';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'RuneScape UF';
    src: url(${woff2Font}) format('woff2'),
         url(${woffFont}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #eaeaea; 
  }

  ::-webkit-scrollbar-thumb {
    background: #707070; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  body {
    margin: 0;
    font-family: 'RuneScape UF';
  }
`;

export default function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentXP, setCurrentXP] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (isPaused) {
        console.log('is paused');
        return;
      }

      setCurrentXP(currentXP + 1);
    }, 1000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Content currentXP={currentXP} />
      <SkillsList />
    </>
  );
}
