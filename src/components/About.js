import React from 'react';
import styled from 'styled-components';
import AboutImage from '../images/About.png';

const Container = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;

  @media (max-width: 600px) {
    img {
      width: 90git % !important;
    }
  }
`;

const About = ({ id }) => {
  return (
    // <div style={{ width: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '20%'}}>
    <Container id={id}>
      <img
        src={AboutImage}
        alt="About"
        style={{
          width: '73%',
          height: 'auto',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </Container>
    // </div>
  );
};

export default About;