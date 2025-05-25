import ArticleCard from './ArticleCard';
import multimediaBack from '../images/multimedia.png';
import bubbles from '../images/bubbles.png';

const Multimedia = () => {
    const containerStyle = {
        position: 'relative',
        display: 'inline-block',
    };

    const imageStyle = {
        display: 'block',
        width: '100%',
        height: 'auto',
    };

    const flexOverlayRow = {
        display: 'flex',
        justifyContent: 'center',
        gap: '0px',  // spacing between columns
        marginBottom: '0px',  // spacing between rows
    };

    const overlayContainer = {
        position: 'absolute',
        top: '350px', // how far down it sits on the window background
        left: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };


  return (
    <div style={containerStyle}>
      <img src={multimediaBack} alt="Multimedia Window" style={imageStyle} />
      <div style={overlayContainer}>
        
        <div style={flexOverlayRow}>
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 1"
                author_first="John"
                author_last="Doe"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 2"
                author_first="Jane"
                author_last="Smith"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 3"
                author_first="Jane"
                author_last="Smith"
            />
        </div>
        <div style={flexOverlayRow}>
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 4"
                author_first="John"
                author_last="Doe"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 5"
                author_first="Jane"
                author_last="Smith"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 6"
                author_first="Jane"
                author_last="Smith"
            />
        </div>
         <div style={flexOverlayRow}>
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 7"
                author_first="John"
                author_last="Doe"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 8"
                author_first="Jane"
                author_last="Smith"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 9"
                author_first="Jane"
                author_last="Smith"
            />
        </div>
         <div style={flexOverlayRow}>
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 10"
                author_first="John"
                author_last="Doe"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 11"
                author_first="Jane"
                author_last="Smith"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 12"
                author_first="Jane"
                author_last="Smith"
            />
        </div>
        <div style={flexOverlayRow}>
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 13"
                author_first="John"
                author_last="Doe"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 2"
                author_first="Jane"
                author_last="Smith"
            />
            <ArticleCard
                image={bubbles}
                article_url="https://youtube.com"
                article_text="Article 3"
                author_first="Jane"
                author_last="Smith"
            />
        </div>
      </div>
    </div>
  );
};

export default Multimedia;
