import fb from "../images/socials/fb.svg";
import insta from "../images/socials/insta.svg";
import twitter from "../images/socials/twitter.svg";
import tiktok from "../images/socials/tiktok.svg";
import email from "../images/socials/email.svg";

import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  background-color: #f1e7d3;
  height: auto;
  color: #8f6a20;
  padding: 60px 0 10px 0;
  text-align: center;

  h1 {
    margin: 0;
    font-family: "ITC Century", serif;
    font-size: 29px;
    font-weight: normal;
  }
`;

const Socials = styled.div`
  position: relative;
  margin-top: 20px;

  img {
    position: relative;
    margin: 0 10px;
    width: 24px;
    height: 24px;
    filter: brightness(0) saturate(100%) invert(44%) sepia(71%) saturate(394%)
      hue-rotate(2deg) brightness(94%) contrast(92%);
  }
  p {
    position: relative;
    margin: 20px 20px;
    font-size: 14px;
    font-weight: normal;
    color: #8f6a20;
    ${mediaQueries.mobile} {
      margin: 15px 20px;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <h1>DAILY BRUIN</h1>
      <Socials>
        <a
          href="https://www.instagram.com/dailybruin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/dailybruin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fb} alt="Facebook" />
        </a>
        <a
          href="https://www.twitter.com/dailybruin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://www.tiktok.com/@dailybruin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tiktok} alt="TikTok" />
        </a>
        <a href="http://eepurl.com/cFEiZX" target="_blank" rel="noreferrer">
          <img src={email} alt="Email" />
        </a>
        <p>
          Built with Suzy's ♥ in Kerckhoff 118 by Samantha Jiao, Narek
          Germirlian, and Evelyn Cho. Designed by Crystal Tompkins, Karina
          Aronson, Katie Azuma and Rachel Yokota, illustrated by Helen Juwon
          Park.
        </p>
      </Socials>
    </Container>
  );
};

export default Footer;
