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
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  pointer-events: none;
`;

const MobileLanding = () => {
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

export default MobileLanding;