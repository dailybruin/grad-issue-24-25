import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  align-content: center;
  background-color: #EBD9B6;
  border: 5px solid #EBD9B6;
  padding: 5px 0;
  padding-top: 24px;
  white-space: nowrap; 
`;

const Section = styled("a")`
  min-width: 0;
  padding: 0.5em 1.5em;
  margin: 1px 1px;
  color: #826324;
  text-decoration: none;
  align-content: center;
  background-color: #F1E7D3;
  border: 1px solid #EBD9B6;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: Josefin Sans;
  font-weight: 400;
  font-size: 17px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 13px;
  }

  @media (max-width: 900px) {
    margin-top: 5px;
    font-size: 9px;
  }

  @media (max-width: 600px) {
    font-size: 8px;
  }

  &:hover {
    background-color: #F1E7D3;
    border: 2px solid #826324;
    color: black;
    margin: 0px 0px;
  }
`;

const Nav = () => {
  const sections = [
    "TITLE", "LETTER", "INTERACTIVE", "NEWS", "SPORTS", "ARTS", 
    "OPINION", "QUAD", "MULTIMEDIA", "PRIME", "-30-", "ABOUT"
  ];

  const handleScroll = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      {sections.map((section, index) => {
        const sectionId = section.toLowerCase().replace(/\s+/g, ""); // Generate ID by removing spaces

        return (
          <Section
            key={index}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(sectionId);
            }}
          >
            {section}
          </Section>
        );
      })}
    </Container>
  );
};

export default Nav;
