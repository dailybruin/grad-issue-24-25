import { useState } from "react";
import "../fonts/fonts.css";
import {
  CARD_BACK_WIDTH,
  CARD_BACK_HEIGHT,
  WINDOW_WIDTH,
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
          backgroundColor: "black",
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
            borderRadius: "25px",
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
      const mobileScale = isMobile ? 0.8 : 1; // Add a mobile scaling factor
      return {
        width: (cardWidth * 3 - 30) * scale * mobileScale,
        height: (cardHeight * 3 - 30) * scale * mobileScale,
        innerWidth: (cardWidth * 3 - 50) * scale * mobileScale,
        innerHeight: (cardHeight * 3 - 50) * scale * mobileScale,
        fontSize: 36 * scale * mobileScale,
        authorSize: 24 * scale * mobileScale,
      };
      // "regular" card on a laptop
    } else {
      const scale = Math.min(windowWidth / shrinksAt, 1); // this scaling is to reduce the SIZE of the article cards as the window decreases
      return {
        width: cardWidth * scale,
        height: cardHeight * scale,
        innerWidth: (cardWidth - 50) * scale,
        innerHeight: (cardHeight - 50) * scale,
        fontSize: 27 * scale,
        authorSize: 18 * scale,
      };
    }
  };

  const dimensions = getCardDimensions();
  const TEXT_CHAR_LIMIT = isMobile ? 100 : isLarge ? 150 : 82;

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
    backgroundColor: "black",
    width: !isLarge ? `${dimensions.width}px` : `${dimensions.width + 8}px`, // More width for PRIME article, fills in side whitespace
    height: `${dimensions.height}px`,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: isLarge && "6px", // For large cards, shift left a bit, for some reason it's uncentered
  };

  const innerStyle = {
    width: `${dimensions.innerWidth}px`,
    height: `${dimensions.innerHeight}px`,
    borderRadius: "25px",
    overflow: "hidden",
    position: "relative",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: isHovered && !isMobile && !isPlaceholder ? "blur(10px)" : "blur(0)",
    transition: "filter 0.2s ease-in-out",
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

  // another mobile attempt... will just leave here for now
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
    fontSize: "11px",
  };

  const mobileAuthorStyle = {
    fontSize: "10px",
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

          {/* no hover on mobile (change?) */}
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
