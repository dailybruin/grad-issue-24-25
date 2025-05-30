import React from "react";
import styled from "styled-components";
import GradIssuesLanding from "../images/landing.gif"; // TODO: update landing

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  padding-top: 32px;
`;

const Background = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block; 
`;


const Landing = () => {
  return (
    <Container>
      <Background src={GradIssuesLanding} alt="Grad Issues Landing" />
    </Container>
  );
};

export default Landing;