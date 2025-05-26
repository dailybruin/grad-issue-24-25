import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { WINDOW_WIDTH } from "./constants.js";

const Window = ({
  backgroundImage,
  windowTitle = "MULTIMEDIA",
  articles = [],
  articlesPerRow = null,
  topOffset = 350,
  isLarge = false,
}) => {
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
  const scale = Math.min(windowWidth / WINDOW_WIDTH, 1);
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
    zIndex: 2,  // Window should be above cards
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
    padding: isMobile ? "0 10px" : "0",
    zIndex: 1,  // Cards are below window
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
  for (let i = 0; i < articles.length; i += finalArticlesPerRow) {
    rows.push(articles.slice(i, i + finalArticlesPerRow));
  }
  return (
    <div style={{ marginBottom: "160px" }}>
      {" "}
      <div style={containerStyle}>
        <div style={{ position: "relative", width: "fit-content" }}>
          <img
            src={backgroundImage}
            alt={`${windowTitle} Window`}
            style={imageStyle}
          />
          <div style={overlayContainer}>
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} style={flexOverlayRow}>
                {row.map((article, cardIndex) => (
                  <ArticleCard
                    key={`${rowIndex}-${cardIndex}`}
                    image={article.image}
                    article_url={article.article_url}
                    article_text={article.article_text}
                    author_first={article.author_first}
                    author_last={article.author_last}
                    isLarge={isLarge && !isMobile}
                    isMobile={isMobile}
                    isPlaceholder={article.isPlaceholder}
                    placeholderColor={article.placeholderColor}
                    windowWidth={windowWidth}
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
