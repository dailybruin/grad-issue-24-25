// src/components/LetterFromEditors.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WINDOW_WIDTH } from "./constants.js";
import desktopBackground from "../images/desktop/bricks.png";
import mobileBackground from "../images/mobile/bricksMobile.png";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  background-image: url(${(props) =>
    props.$isMobile ? mobileBackground : desktopBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    width: 89%;
  }
`;

const LetterBox = styled.div`
  background-color: #f7edd5;
  // border: 1px solid #8b6b4a;
  border: none;
  padding: ${(props) => Math.max(props.$scale * 20, 10)}px;
  width: 100%;
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

  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.12), 0 0 0 10px #f1e7d3,
    0 12px 24px rgba(168, 137, 74, 0.8);

  @media (max-width: 600px) {
    width: 70%;
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

const Letter = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = Math.min(windowWidth / WINDOW_WIDTH, 1);

  return (
    <Container $isMobile={isMobile}>
      <LetterBox $scale={scale}>
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
