const ArticleCard = () => {
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
    backgroundColor: '#C69394',
    width: '260px',
    height: '260px',
    borderRadius: '25px',
  };

  return (
    <div style={cardStyle}>
      <div style={innerStyle}>
      <div style={{marginTop: '50%'}}>
        Image here! On hover, show text.
      </div>
        
      </div>
    </div>
  );
};

export default ArticleCard;
