import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mosaic from "./components/mosaic";
import {
  News,
  Sports,
  Arts,
  Opinion,
  TheQuad,
  Multimedia,
  Prime,
  Thirty,
} from "./components/ArticleWindows";
// import Bricks from "./images/desktop/bricks.png";
import desktopBackground from "./images/desktop/bricks.png";
import mobileBackground from "./images/mobile/bricksMobile.png";
import ArticleGrid from "./components/ArticleGrid";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Letter from "./components/Letter";
import About from "./components/About";
import MobileNav from "./components/MobileNav";
import MobileHeader from "./components/MobileHeader";
import MobileLanding from "./components/MobileLanding";

function App() {
  const [data, setData] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || (window.innerWidth < 700)
        // OR if it is smaller desktop screen, just change to mobile header with mobile dropdown navbar
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/grad-issue-24-25"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    data && (
      <div
        className="App"
        // style={{
        //   backgroundImage: `url(${props => props.$isMobile ? mobileBackground : desktopBackground})`,
        //   backgroundRepeat: "repeat-y",
        //   backgroundPosition: "right bottom",
        // }}
      >
        {isMobile ? (
          <>
          <MobileHeader style={{marginBottom: 0}}/>
          <MobileLanding/>
          </>
        ) : (
          <>
            <Nav />
            <Header />
            <Landing/>
          </>
        )}
        <ArticleGrid props={data} />
        <Footer />
      </div>
    )
  );
}

export default App;
