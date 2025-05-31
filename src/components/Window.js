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
  incCardHeightBy = 0,
  isLarge = false,
  shrinksAt = WINDOW_WIDTH,
}) => {
  const topOffset = 350;

  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
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

  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
  const scale = isMac
    ? Math.min(windowWidth / shrinksAt, 1)
    : Math.min(windowWidth / (shrinksAt + 30), 1);

  const containerStyle = {
    position: "relative",
    display: "block",
    width: "100%",
    maxWidth: "100vw",
    overflowX: "hidden",
    margin: isMobile ? "30px auto" : "50px auto",
  };

  const backgroundStyle = {
    backgroundImage: `url(${
      isMobile ? backgroundImageMobile : backgroundImage
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    paddingTop: isMobile
      ? `${topOffset * scale * 0.65}px`
      : `${topOffset * scale}px`,
    paddingBottom: isMobile ? "18px" : "65px",
    position: "relative",
    zIndex: 3,
    width: "100%",
  };

  const overlayContainer = {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0px",
    zIndex: 2,
  };

  const flexOverlayRow = {
    display: "flex",
    justifyContent: "center",
    gap: "0px",
    marginBottom: "0px",
  };

  let finalArticlesPerRow = isMobile ? 2 : 3;
  const targetArticles = isMobile ? articlesMobile : articles;

  const rows = [];
  for (let i = 0; i < targetArticles.length; i += finalArticlesPerRow) {
    rows.push(targetArticles.slice(i, i + finalArticlesPerRow));
  }

  let cardHeight = !isMobile
    ? CARD_BACK_HEIGHT + incCardHeightBy
    : CARD_BACK_HEIGHT + incCardHeightBy + 10;

  return (
    <div id={id} style={{ marginBottom: "160px" }}>
      <div style={containerStyle}>
        <div style={backgroundStyle}>
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
                    isLarge={isLarge}
                    isMobile={isMobile}
                    isPlaceholder={article.isPlaceholder}
                    placeholderColor={article.placeholderColor}
                    windowWidth={windowWidth}
                    cardWidth={CARD_BACK_WIDTH}
                    cardHeight={cardHeight}
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
