import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AboutImage from "../images/About.png";
import AboutMobileImage from "../images/mobile/about-mobile.png";

const Container = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;

  @media (max-width: 600px) {
    padding-bottom: 4%;
  }
`;

const StyledImage = styled.img`
  width: 73%;
  height: auto;
  object-fit: cover;
  display: block;

  @media (max-width: 600px) {
    width: 70%;
  }
`;

const About = ({ id }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container id={id}>
      <StyledImage src={isMobile ? AboutMobileImage : AboutImage} alt="About" />
    </Container>
  );
};

export default About;
