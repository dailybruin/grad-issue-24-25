import styled from "styled-components";

import { ReactComponent as DBLogo } from "../images/DailyBruinLogo.svg";

const DBHeader = styled("div")`
  z-index: 2001;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #ebd9b6;
  width: 100%;
  padding: 0.2em 0;
  font-family: "ITC Century";
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 19.2px;
  color: #826324;
`;

const StyledLogo = styled(DBLogo)`
  fill: #826324;
`;

const Header = () => {
  return (
    <DBHeader>
      {/* Daily Bruin */}
      <a href="https://dailybruin.com">
        <StyledLogo />
      </a>
    </DBHeader>
  );
};

export default Header;
