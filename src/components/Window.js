import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

const Window = ({
  backgroundImage,
  windowTitle = "MULTIMEDIA",
  articles = [],
  articlesPerRow = null,
  topOffset = 350,
  isLarge = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768); // lowk confused in mobile
    };

    handleResize(); // maybe we have to resize?
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    position: "relative",
    display: "block",
    width: "fit-content",
    margin: isMobile ? "30px auto" : "50px auto", // space between each window
  };

  const imageStyle = {
    display: "block",
    width: "auto",
    maxWidth: "100%",
    height: "auto",
  };

  // *sob* more mobile attempt
  const overlayContainer = {
    position: "absolute",
    top: isMobile ? `${Math.max(150, topOffset * 0.4)}px` : `${topOffset}px`,
    left: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: isMobile ? "0 10px" : "0",
  };

  const flexOverlayRow = {
    display: "flex",
    justifyContent: "center",
    gap: isMobile ? "10px" : "0px",
    marginBottom: isMobile ? "10px" : "0px",
    flexWrap: isMobile ? "wrap" : "nowrap",
  };

  let finalArticlesPerRow;
  if (isMobile) {
    // mobile: 2 columns per row
    finalArticlesPerRow = 2;
  } else if (articlesPerRow !== null) {
    finalArticlesPerRow = articlesPerRow;
  } else {
    // desktop: 3 columns per row
    finalArticlesPerRow = 3;
  }

  // arrange the article cards together into a grid
  const rows = [];
  for (let i = 0; i < articles.length; i += finalArticlesPerRow) {
    rows.push(articles.slice(i, i + finalArticlesPerRow));
  }

  return (
    <div style={containerStyle}>
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
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Window;
