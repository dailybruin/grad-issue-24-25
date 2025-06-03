import React, { useState } from "react";
import styled from "styled-components";

const DropdownButton = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  font-size: 20px;
  color: #ebd9b6;
  background-color: #a8894a;
  padding: 3px;
  z-index: 1000;
  border: 1px solid #a8894a;
  cursor: pointer;
`;

const CloseButton = styled.div`
  font-size: 20px;
  background-color: #a8894a;
  color: #ebd9b6;
  padding: 3px;
  cursor: pointer;
`;

// when open, prevent the flatpage from being visible, but only allow the navbar to be visible
const WhenOpen = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1100;
`;

// replace the header logo with just the same color
const HeaderReplacement = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ebd9b6;
  padding: 8px;
  border-bottom: 1px solid #a8894a;
`;

const NavItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1px;
`;

const NavItem = styled.div`
  padding: 0.5em 0.5em;
  margin: 1px 1px;
  color: #826324;
  text-decoration: none;
  align-content: center;
  background-color: #f1e7d3;
  border: 5px solid #ebd9b6;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: Josefin Sans;
  font-weight: 800;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;

  &:hover {
    background-color: #f1e7d3;
    border: 2px solid #826324;
    color: black;
    margin: 0px 0px;
  }
`;

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    "TITLE",
    "LETTER",
    "INTERACTIVE",
    "NEWS",
    "SPORTS",
    "ARTS",
    "OPINION",
    "QUAD",
    "MULTIMEDIA",
    "PRIME",
    "-30-",
    "ABOUT",
  ];

  const handleScroll = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* &#9776; = three rows of lines LOGO */}
      <DropdownButton onClick={() => setIsOpen(true)}>&#9776;</DropdownButton>

      {isOpen && (
        <WhenOpen>
          <>
            <HeaderReplacement>
              {/* &#10005; = the X button */}
              <CloseButton onClick={() => setIsOpen(false)}>
                &#10005;
              </CloseButton>
            </HeaderReplacement>
            <NavItemGrid>
              {sections.map((section, index) => {
                const id = section.toLowerCase().replace(/\s+/g, "");
                return (
                  <NavItem key={index} onClick={() => handleScroll(id)}>
                    {section}
                  </NavItem>
                );
              })}
            </NavItemGrid>
          </>
        </WhenOpen>
      )}
    </>
  );
};

export default MobileNav;
