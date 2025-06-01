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
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  pointer-events: none;
`;

const Landing = () => {
  return (
    <Container>
      <BackgroundVideo
        src={LandingVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </Container>
  );
};

export default Landing;
