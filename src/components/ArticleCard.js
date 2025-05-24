import React, { useState } from 'react';

const ArticleCard = ({ image, article_url, article_text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: 'black',
    width: '300px',
    height: '300px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
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
    width: '100%',
    height: '96%',
    display: isHovered ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingTop: '2%',
    paddingBottom: '2%',
    textAlign: 'center',
    fontSize: '14px',
  };

  return (
    
      <div style={cardStyle}>
        <div style={innerStyle} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={article_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <img src={image} style={imageStyle} />
                <div style={textOverlayStyle}>{article_text}</div>
            </a>
        </div>
      </div>
    
  );
};

export default ArticleCard;
