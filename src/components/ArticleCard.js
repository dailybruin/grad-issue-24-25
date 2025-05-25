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
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (isPlaceholder) {
    return (
      <div
        style={{
          backgroundColor: "black",
          width: "305px",
          height: "310px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: placeholderColor,
            width: "260px",
            height: "260px",
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
      return {
        width: 900,
        height: 900,
        innerWidth: 850,
        innerHeight: 850,
        fontSize: 36,
        authorSize: 24,
      };
    } else {
      return {
        width: 305,
        height: 310,
        innerWidth: 260,
        innerHeight: 260,
        fontSize: 27,
        authorSize: 18,
      };
    }
  };

  const dimensions = getCardDimensions();
  const TEXT_CHAR_LIMIT = isMobile ? 100 : isLarge ? 150 : 82;

  if (!isPlaceholder && article_text && article_text.length > TEXT_CHAR_LIMIT) {
    console.error(
      "Over " +
        TEXT_CHAR_LIMIT +
        " char article text: length is " +
        article_text.length
    );
  }

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
    filter: isHovered && !isMobile && !isPlaceholder ? "blur(10px)" : "blur(0)", // Added !isPlaceholder check
    transition: "filter 0.2s ease-in-out",
  };

  const textOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "92%",
    height: "90%",
    display: isHovered && !isMobile && !isPlaceholder ? "block" : "none", // Added !isPlaceholder check
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
        onMouseEnter={() => !isMobile && !isPlaceholder && setIsHovered(true)} // Added !isPlaceholder check
        onMouseLeave={() => !isMobile && !isPlaceholder && setIsHovered(false)} // Added !isPlaceholder check
      >
        <a
          href={article_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img src={image} style={imageStyle} alt={article_text} />

          {/* desktop hover */}
          {!isMobile &&
            !isPlaceholder && ( // Added !isPlaceholder check
              <div style={textOverlayStyle}>
                {article_text}
                <br />
                <br />
                <div style={authorStyle}>
                  By {author_first} {author_last}
                </div>
              </div>
            )}

          {/* no-hover on mobile */}
          {isMobile &&
            !isPlaceholder && ( // Added !isPlaceholder check
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
