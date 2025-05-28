import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import bubbles from "../images/bubbles.png";
import {
  CARD_BACK_HEIGHT,
  CARD_BACK_WIDTH,
  WINDOW_WIDTH,
} from "./constants.js";

const Window = ({
  id, 
  backgroundImage,
  backgroundImageMobile,
  windowTitle = "MULTIMEDIA",
  articles = [],
  articlesMobile = [],
  articlesPerRow = null,
  incCardHeightBy = 0, // Used to fill out inside the window by barely changing card height
  isLarge = false,
  shrinksAt = WINDOW_WIDTH,
}) => {
  const topOffset = 350;

  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // idk if there is a better way to do it but this is how I thought of doing mobile... we can't simply use size of window
      // because that would interfere with the laptop resizing logic
      setIsMobile(
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
      setWindowWidth(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // calculate how much we should scale it by depending on what our window width is
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  const scale = isMac
    ? Math.min(windowWidth / shrinksAt, 1)
    : Math.min(windowWidth / (shrinksAt + 30), 1);
  const scaledTopOffset = topOffset * scale;

  // this is what we had before, except everything is more dynamic now
  const containerStyle = {
    position: "relative",
    display: "block",
    width: "fit-content",
    margin: isMobile ? "30px auto" : "50px auto",
  };

  // The window itself
  const imageStyle = {
    display: "block",
    width: "auto",
    maxWidth: "100%",
    height: "auto",
    position: "relative",
    zIndex: !isLarge ? 3 : 1, // Window should be above cards, except PRIME (color spills into frame)
    pointerEvents: "none", // Allows pointer events to go through the window (which is on top of the cards)
  };

  // The article cards (all windows)
  const overlayContainer = {
    position: "absolute",
    top: `${scaledTopOffset}px`,
    left: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
    zIndex: 2, // Cards are below window
  };

  const flexOverlayRow = {
    display: "flex",
    justifyContent: "center",
    gap: "0px",
    marginBottom: "0px",
  };

  // determining how many articles in a row
  let finalArticlesPerRow;
  if (isMobile) {
    finalArticlesPerRow = 2;
  } else {
    finalArticlesPerRow = 3;
  }

  // arrange all the articles into the rows
  const rows = [];
  const targetArticles = isMobile ? articlesMobile : articles;
  for (let i = 0; i < targetArticles.length; i += finalArticlesPerRow) {
    rows.push(targetArticles.slice(i, i + finalArticlesPerRow));
  }
  return (
    <div id={id} style={{ marginBottom: "160px" }}>
      {" "}
      <div style={containerStyle}>
        <div style={{ position: "relative", width: "fit-content" }}>
          <img
            src={isMobile ? backgroundImageMobile : backgroundImage}
            alt={`${windowTitle} Window`}
            style={imageStyle}
          />
          <div style={overlayContainer}>
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} style={flexOverlayRow}>
                {row.map((article, cardIndex) => (
                  <ArticleCard
                    key={`${rowIndex}-${cardIndex}`}
                    image={bubbles}
                    article_url={article.article_url}
                    article_title={article.article_title}
                    author_byline={article.article_byline}
                    isLarge={isLarge && !isMobile}
                    isMobile={isMobile}
                    isPlaceholder={article.isPlaceholder}
                    placeholderColor={article.placeholderColor}
                    windowWidth={windowWidth}
                    cardWidth={CARD_BACK_WIDTH}
                    cardHeight={CARD_BACK_HEIGHT + incCardHeightBy}
                    shrinksAt={shrinksAt}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;
