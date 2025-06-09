import React from "react";
import styled from "styled-components";
import LandingVideo from "../images/landing.mp4";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding-top: 32px;
  position: relative;
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  pointer-events: none;
`;

const Credits = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  text-align: left;
  color: #333333;
  font-family: "Joan", serif;
  font-size: 10px;
  padding: 3px 3px;
  background-color: #d9d9d9;
  max-width: 400px;

  @media (max-width: 1200px) {
    font-size: 9px;
    padding: 2px 2px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
    padding: 2px 2px;
    max-width: 300px;
  }
`;

const Landing = () => {
  return (
    <Container>
      <BackgroundVideo src={LandingVideo} autoPlay loop muted playsInline />
      <Credits>
        Animation by Kaylen Ho/Daily Bruin staff, Helen Juwon Park/Illustrations
        director. Video by Max Davis-Housefield/Daily Bruin senior staff. Photos
        by Daily Bruin staff.
      </Credits>
    </Container>
  );
};

export default Landing;
