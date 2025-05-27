import React from "react";
import styled from "styled-components";
import GradIssuesLanding from "../images/bubbles.png"; // temporary landing

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Background = styled.img`
  width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: contain;
`;

const Landing = () => {
  return (
    <Container>
      <Background src={GradIssuesLanding} alt="Grad Issues Landing" />
    </Container>
  );
};

export default Landing;