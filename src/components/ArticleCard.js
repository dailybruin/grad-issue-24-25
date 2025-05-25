import { useState } from 'react';
import '../fonts/fonts.css';

const ArticleCard = ({ image, article_url, article_text, author_first, author_last }) => {
  const [isHovered, setIsHovered] = useState(false);
  const TEXT_CHAR_LIMIT = 82

  if (article_text.length > TEXT_CHAR_LIMIT) {
    console.error("Over " + TEXT_CHAR_LIMIT + " char article text: length is " + article_text.length);
  }

  const cardStyle = {
    backgroundColor: 'black',
    width: '305px',
    height: '310px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const innerStyle = {
    width: '260px',
    height: '260px',
    borderRadius: '25px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: isHovered ? 'blur(10px)' : 'blur(0)',
    transition: 'filter 0.2s ease-in-out',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '92%',
    height: '90%',
    display: isHovered ? 'block' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4%',
    paddingTop: '7%',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Joan, serif',
    fontSize: '27px',
  };

  const authorStyle = {
    fontSize: '18px'
  }

  return (
    
      <div style={cardStyle}>
        <div style={innerStyle} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={article_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <img src={image} style={imageStyle} />

                <div style={textOverlayStyle}>
                  {article_text}
                  <br/>
                  <br/>
                  <div style={authorStyle}>
                    By {author_first} {author_last}
                  </div>
                </div>
            </a>
        </div>
      </div>
    
  );
};

export default ArticleCard;
