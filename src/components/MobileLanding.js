import React from "react";
import styled from "styled-components";
import LandingVideo from "../images/landing.mp4";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding-top: 0px;
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
  font-size: 8px;
  padding: 2px 2px;
  background-color: #d9d9d9;
  max-width: 300px;
`;

const MobileLanding = () => {
  return (
    <Container>
      <BackgroundVideo src={LandingVideo} autoPlay loop muted playsInline />
      <Credits>
        Photos by Daily Bruin staff. Design by Katie Azuma/Daily Bruin.
        Animation by Helen Juwon Park/Illustrations director.
      </Credits>
    </Container>
  );
};

export default MobileLanding;
