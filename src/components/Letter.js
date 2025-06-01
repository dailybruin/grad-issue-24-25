// src/components/LetterFromEditors.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WINDOW_WIDTH } from "./constants.js";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const LetterBox = styled.div`
  background-color: #f7edd5;
  border: none;
  width: '70%';
  max-width: 900px;
  text-align: left;
  font-family: "Joan", serif;
  position: relative;
  box-sizing: border-box;
  border-radius: 0;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  padding-bottom: 20px;

  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.12), 0 0 0 10px #f1e7d3,
    0 12px 24px rgba(168, 137, 74, 0.8);

  @media (min-width: 200px) and (max-width: 600px) {
    // width: 70%;
    width: 90%;
  }
  
  @media (min-width: 600px) and (max-width: 800px) {
    // width: 70%;
    width: 90%;
  }

  @media (min-width: 800px) {
    // width: 70%;
    width: 90%;
  }

`;

const LetterTitle = styled.h2`
  text-align: center;
  font-size: ${(props) => Math.max(props.$scale * 36, 24)}px;
  margin-bottom: ${(props) => Math.max(props.$scale * 2, 10)}px;
  color: #8b6b4a;
  font-weight: normal;
  font-family: "Joan", serif;
  padding: 0 10px;
`;

const LetterSubtitle = styled.h3`
  text-align: center;
  font-size: ${(props) => Math.max(props.$scale * 24, 18)}px;
  margin-bottom: ${(props) => Math.max(props.$scale * 16, 10)}px;
  color: #8b6b4a;
  font-weight: normal;
  font-family: "Joan", serif;
  padding: 0 10px;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  margin-bottom: ${(props) => Math.max(props.$scale * 10, 8)}px;
  color: #8b6b4a;
  font-size: ${(props) => Math.max(props.$scale * 16, 14)}px;
  font-family: "Joan", serif;
  overflow-wrap: break-word;
  hyphens: auto;
  padding: 0 10px;
`;

const Signature = styled.div`
  margin-top: ${(props) => Math.max(props.$scale * 16, 10)}px;
  line-height: 1.5;
  color: #8b6b4a;
  font-size: ${(props) => Math.max(props.$scale * 16, 14)}px;
  font-family: "Joan", serif;
  padding: 0 10px;
`;

const Name = styled.span`
  display: block;
  margin-top: ${(props) => props.$scale * 2}px;
  font-size: ${(props) => Math.max(props.$scale * 16, 14)}px;
`;

const Letter = ({ id }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = Math.min(windowWidth / WINDOW_WIDTH, 1);

  return (
    <Container id={id}>
      <LetterBox>
        <LetterTitle $scale={scale}>LETTER</LetterTitle>
        <LetterSubtitle $scale={scale}>FROM THE EDITORS</LetterSubtitle>

        <Paragraph $scale={scale}>Dear readers,</Paragraph>

        <Paragraph $scale={scale}>
          This is a letter from the editors. This is a letter from the editors.
          This is a letter from the editors. This is a letter from the editors.
          This is a letter from the editors. This is a letter from the editors.
        </Paragraph>

        <Paragraph $scale={scale}>
          This is a letter from the editors. This is a letter from the editors.
          This is a letter from the editors. This is a letter from the editors.
          This is a letter from the editors. This is a letter from the editors.
        </Paragraph>

        <Paragraph $scale={scale}>
          This is a letter from the editors. This is a letter from the editors.
          This is a letter from the editors. This is a letter from the editors.
          This is a letter from the editors. This is a letter from the editors.
        </Paragraph>

        <Paragraph $scale={scale}>
          This is a letter from the editors. This is a letter from the editors.
          This is a letter from the editors. This is a letter from the editors.
          This is a letter from the editors. This is a letter from the editors.
        </Paragraph>

        <Signature $scale={scale}>
          Signoff,
          <Name $scale={scale}>NAME</Name>
          <Name $scale={scale}>NAME</Name>
          <Name $scale={scale}>NAME</Name>
        </Signature>
      </LetterBox>
    </Container>
  );
};

export default Letter;