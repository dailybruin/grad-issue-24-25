import { useState } from "react";
import "../fonts/fonts.css";

const ArticleCard = ({
  image,
  article_url,
  article_text,
  author_first,
  author_last,
  isLarge = false,
  isMobile = false,
  isPlaceholder = false,
  placeholderColor = "#ccc",
  windowWidth = 1200,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Constants
  const outerWidth = 310  // Black background for each card
  const WINDOW_WIDTH = 1052;  // Width of window (breakpoint to start scaling card)

  if (isPlaceholder) {
    const baseInner = 260;
    const scale = Math.min(windowWidth / WINDOW_WIDTH, 1);

    return (
      <div
        style={{
          backgroundColor: "black",
          width: `${outerWidth * scale}px`,
          height: `${outerWidth * scale}px`,
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
    if (isMobile) {
      // attempt on mobile...
      const mobileWidth = Math.min(window.innerWidth - 40, 350);
      return {
        width: mobileWidth,
        height: mobileWidth,
        innerWidth: mobileWidth - 40,
        innerHeight: mobileWidth - 40,
        fontSize: 22,
        authorSize: 16,
      };
      // wrote this for prime
    } else if (isLarge) {
      const scale = Math.min(windowWidth / WINDOW_WIDTH, 1); // same base as others
      return {
        width: 900 * scale,
        height: 900 * scale,
        innerWidth: 850 * scale,
        innerHeight: 850 * scale,
        fontSize: 36 * scale,
        authorSize: 24 * scale,
      };
      // "regular" card on a laptop
    } else {
      const scale = Math.min(windowWidth / WINDOW_WIDTH, 1); // this scaling is to reduce the SIZE of the article cards as the window decreases
      return {
        width: outerWidth * scale,
        height: outerWidth * scale,
        innerWidth: 260 * scale,
        innerHeight: 260 * scale,
        fontSize: 27 * scale,
        authorSize: 18 * scale,
      };
    }
  };

  const dimensions = getCardDimensions();
  const TEXT_CHAR_LIMIT = isMobile ? 100 : isLarge ? 150 : 82;

  // Log of the hover text is over 82 characters
  if (!isPlaceholder && article_text && article_text.length > TEXT_CHAR_LIMIT) {
    console.error(
      "Over " +
        TEXT_CHAR_LIMIT +
        " char article text: length is " +
        article_text.length
    );
  }

  // this is similar to what we had before, just more dynamic now
  const cardStyle = {
    backgroundColor: "black",
    width: `${dimensions.width}px`,
    height: `${dimensions.height}px`,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
    color: "white",
    padding: "20px 15px 15px",
    textAlign: "center",
    fontFamily: "Joan, serif",
    fontSize: "18px",
  };

  const mobileAuthorStyle = {
    fontSize: "14px",
    marginTop: "8px",
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
          <img src={image} style={imageStyle} alt={article_text} />

          {/* desktop hover */}
          {!isMobile && !isPlaceholder && (
            <div style={textOverlayStyle}>
              {article_text}
              <br />
              <br />
              <div style={authorStyle}>
                By {author_first} {author_last}
              </div>
            </div>
          )}

          {/* no hover on mobile (change?) */}
          {isMobile && !isPlaceholder && (
            <div style={mobileTextStyle}>
              <div>{article_text}</div>
              <div style={mobileAuthorStyle}>
                By {author_first} {author_last}
              </div>
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
