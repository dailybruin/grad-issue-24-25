import { useState } from "react";
import "../fonts/fonts.css";
import {
  CARD_BACK_WIDTH,
  CARD_BACK_HEIGHT,
  WINDOW_WIDTH,
  CARD_BORDER_ROUND_PX,
} from "./constants.js";

const ArticleCard = ({
  image, // hard coded bubbles image based on figma
  article_url,
  article_title, // should be getting article title
  author_byline,
  isLarge = false,
  isMobile = false,
  isPlaceholder = false,
  placeholderColor = "#ccc",
  windowWidth = 1200,
  cardWidth = CARD_BACK_WIDTH,
  cardHeight = CARD_BACK_HEIGHT,
  shrinksAt = WINDOW_WIDTH,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  if (isPlaceholder) {
    const baseInner = cardWidth - 50;
    // Use the same scaling logic as regular cards
    const scale = Math.min(windowWidth / shrinksAt, 1);

    return (
      <div
        style={{
          backgroundColor: !isMobile ? "black" : "transparent",
          width: `${cardWidth * scale}px`,
          height: `${cardHeight * scale}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: placeholderColor,
            width: `${baseInner * scale}px`,
            height: `${baseInner * scale}px`,
            borderRadius: `${isMobile ? CARD_BORDER_ROUND_PX-12 : CARD_BORDER_ROUND_PX}px`,
          }}
        />
      </div>
    );
  }

  // sizing based on screen size
  const getCardDimensions = () => {
    // for Prime article card ("large" card)
    if (isLarge) {
      const scale = Math.min(windowWidth / shrinksAt, 1); // same base as others
      const mobileScale = isMobile ? 0.7 : 1; // Add a mobile scaling factor
      return {
        width: (cardWidth * 3 - 10) * scale * mobileScale,
        height: (cardHeight * 3 - 5) * scale * mobileScale,
        innerWidth: (cardWidth * 3 - 80) * scale * mobileScale,
        innerHeight: (cardHeight * 3 - 80) * scale * mobileScale,
        fontSize: 28 * scale * mobileScale,
        authorSize: 18 * scale * mobileScale,
      };
      // "regular" card on a laptop
    } else {
      const scale = Math.min(windowWidth / shrinksAt, 1); // this scaling is to reduce the SIZE of the article cards as the window decreases
      return {
        width: cardWidth * scale,
        height: cardHeight * scale,
        innerWidth: (cardWidth - 50) * scale,
        innerHeight: (cardHeight - 50) * scale,
        fontSize: 22 * scale, // Increased from 18
        authorSize: 14 * scale, // Increased from 12
      };
    }
  };

  const dimensions = getCardDimensions();

  // Commenting this out for now, it's cluttering the console
  /*
  // Log of the hover text is over TEXT_CHAR_LIMIT characters
  if (!isPlaceholder && article_title && article_title.length > TEXT_CHAR_LIMIT) {
    console.error(
      "Over " +
        TEXT_CHAR_LIMIT +
        " char article text: length is " +
        article_title.length
    );
  }
    */

  // this is similar to what we had before, just more dynamic now
  const cardStyle = {
    backgroundColor: isMobile ? "transparent" : "black",
    width:
      !isLarge || isMobile
        ? `${dimensions.width}px`
        : `${dimensions.width + 8}px`,
    height: `${dimensions.height}px`,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    position: "relative",
    zIndex: isMobile ? 2 : "auto",
  };

  const innerStyle = {
    width: `${dimensions.innerWidth}px`,
    height: `${dimensions.innerHeight}px`,
    borderRadius: `${isMobile ? CARD_BORDER_ROUND_PX-12 : CARD_BORDER_ROUND_PX}px`,
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
    backgroundColor: isMobile ? "transparent" : "inherit",
    margin: "0 auto",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: isHovered && !isMobile && !isPlaceholder ? "blur(10px)" : "blur(0)",
    transition: "filter 0.2s ease-in-out",
    display: "block", // Prevent image spacing issues
  };

  const textOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "92%",
    height: "90%",
    display: isHovered && !isMobile && !isPlaceholder ? "block" : "none",
    alignItems: "center",
    justifyContent: "center",
    padding: "4%",
    paddingTop: "7%",
    color: "white",
    textAlign: "center",
    fontFamily: "Joan, serif",
    fontSize: `${dimensions.fontSize}px`,
  };

  const authorStyle = {
    fontSize: `${dimensions.authorSize}px`,
  };

  const mobileTextStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
    color: "white",
    padding: "20px 3px 5px",
    textAlign: "center",
    fontFamily: "Joan, serif",
    fontSize: "9px",
  };

  const mobileAuthorStyle = {
    fontSize: "7px",
    marginTop: "6px",
  };

  return (
    <div style={cardStyle}>
      <div
        style={innerStyle}
        onMouseEnter={() => !isMobile && !isPlaceholder && setIsHovered(true)} // this is to make sure that there is no blur
        onMouseLeave={() => !isMobile && !isPlaceholder && setIsHovered(false)} // or hovering effect for place holders (might need to change for mobile?)
      >
        <a
          href={article_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img src={image} style={imageStyle} alt={article_title} />

          {/* desktop hover */}
          {!isMobile && !isPlaceholder && (
            <div style={textOverlayStyle}>
              {article_title}
              <br />
              <br />
              <div style={authorStyle}>By {author_byline}</div>
            </div>
          )}

          {/* no hover on mobile */}
          {isMobile && !isPlaceholder && (
            <div style={mobileTextStyle}>
              <div>{article_title}</div>
              <div style={mobileAuthorStyle}>By {author_byline}</div>
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
