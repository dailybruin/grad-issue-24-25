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
  width: "70%";
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

const StyledLink = styled.a`
  color: #8b6b4a;
  text-decoration: underline;
  font-family: "Joan", serif;

  &:hover {
    text-decoration: none;
  }
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
          The word “unprecedented” loses its meaning more and more each year.
        </Paragraph>
        <Paragraph $scale={scale}>
          Our graduating class came of age during an unprecedented pandemic,{" "}
          <StyledLink
            href="https://dailybruin.com/2022/01/07/ucla-extends-online-instruction-until-jan-28-amid-rising-covid-19-cases"
            target="_blank"
            rel="noopener noreferrer"
          >
            learning from home
          </StyledLink>{" "}
          or in isolation. Their second year was interrupted by the{" "}
          <StyledLink
            href="https://dailybruin.com/2022/11/14/uc-academic-workers-walk-out-in-largest-us-strike-since-2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            largest academic strike
          </StyledLink>{" "}
          in higher education history, losing discussion sections for weeks and
          having final exams cancelled. Last year, hundreds of students formed
          the{" "}
          <StyledLink
            href="https://dailybruin.com/tag/sjp-encampment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Palestine solidarity encampment
          </StyledLink>
          , walking out of their classes and being attacked with{" "}
          <StyledLink
            href="https://dailybruin.com/2024/05/01/pro-israel-counter-protesters-attempt-to-storm-encampment-sparking-violence"
            target="_blank"
            rel="noopener noreferrer"
          >
            unprecedented violence
          </StyledLink>
          . Just this January, the university again{" "}
          <StyledLink
            href="https://dailybruin.com/2025/01/08/ucla-cancels-in-person-classes-amid-los-angeles-fires"
            rel="noopener noreferrer"
          >
            cancelled classes
          </StyledLink>{" "}
          and subsequently{" "}
          <StyledLink
            href="https://dailybruin.com/2025/01/11/ucla-extends-remote-instruction-through-friday-as-evacuation-zones-near-campus"
            rel="noopener noreferrer"
          >
            moved to remote instruction
          </StyledLink>{" "}
          in response to some of the most destructive fires in California
          history.
        </Paragraph>
        <Paragraph $scale={scale}>
          The students graduating this year will not have had it easy.
        </Paragraph>
        <Paragraph $scale={scale}>
          The Daily Bruin has showcased our community’s response to adversity.
          We have covered the pain that Bruins have felt. We have also covered
          the beauty. The pandemic sparked innovation that{" "}
          <StyledLink
            href="https://prime.dailybruin.com/englishlearning"
            rel="noopener noreferrer"
          >
            broke barriers to learning
          </StyledLink>
          . Striking workers set up a{" "}
          <StyledLink
            href="https://dailybruin.com/2023/05/21/kitchen-committee-provides-free-meals-for-uaw-strikers"
            rel="noopener noreferrer"
          >
            Bunche Hall community kitchen
          </StyledLink>{" "}
          to provide free meals. People reacted to January’s fires by{" "}
          <StyledLink
            href="https://dailybruin.com/2025/01/08/westwood-recreation-center-provides-shelter-essential-resources-amid-la-fires"
            rel="noopener noreferrer"
          >
            donating supplies to evacuees
          </StyledLink>
          ,{" "}
          <StyledLink
            href="https://dailybruin.com/2025/02/11/theatre-palisades-continues-legacy-of-community-creativity-after-la-county-fires"
            rel="noopener noreferrer"
          >
            preserving their community theater{" "}
          </StyledLink>
          and{" "}
          <StyledLink
            href="https://dailybruin.com/2025/03/15/prime-after-the-fire"
            rel="noopener noreferrer"
          >
            supporting their communities
          </StyledLink>
          . UCLA women’s basketball{" "}
          <StyledLink
            href="https://dailybruin.com/2025/01/15/ucla-womens-basketball-roars-to-best-ever-season-start-with-win-over-penn-state"
            rel="noopener noreferrer"
          >
            dedicated
          </StyledLink>{" "}
          a performance marking their season start to January’s firefighters.
        </Paragraph>
        <Paragraph $scale={scale}>
          So it only seemed appropriate that we focus this year’s Graduation
          Issue on forging growth out of the ashes.
        </Paragraph>
        <Paragraph $scale={scale}>
          We are living in uncertain times. The Trump administration has
          targeted international and undocumented students. The federal
          government has cancelled research grants. The university will face
          significant funding cuts. Students have expressed fear, anxiety and
          despair about what lies ahead.
        </Paragraph>
        <Paragraph $scale={scale}>
          Even though we’re staring down the barrel of another unprecedented
          year, we will continue to fulfill our mission. The Daily Bruin will
          keep telling our community’s stories. We will spotlight beauty. We
          will keep those in power accountable. We will give a voice to people
          who don’t have one. We will fight for diversity and inclusion. We will
          make the seniors who have sacrificed to keep our paper going proud of
          us.
        </Paragraph>
        <Paragraph $scale={scale}>
          We’re confident that out of the flames of unprecedented destruction,
          our students will bring beauty to the world – it's what we’ve been
          taught to do. And through it all, our writers, coders, reporters,
          presenters, photojournalists, editors, artists and videographers will
          keep telling those stories.
        </Paragraph>
        <Signature $scale={scale}>
          Yours faithfully,
          <Name $scale={scale}>Dylan Winward | Editor in chief</Name>
          <Name $scale={scale}>Shiv Patel | Managing editor</Name>
          <Name $scale={scale}>Zimo Li | Digital managing editor</Name>
        </Signature>
      </LetterBox>
    </Container>
  );
};

export default Letter;
