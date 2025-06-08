import styled from 'styled-components'
import { useEffect, useState } from 'react';
import desktopBackground from '../images/desktop/bricks.png'
import mobileBackground from '../images/mobile/bricksMobile.png'
import { Arts, Multimedia, News, Opinion, Prime, Sports, TheQuad, Thirty } from './ArticleWindows.js';
import About from './About.js';
import Letter from './Letter.js';
import Mosaic from './mosaic.js';


const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: transparent;
  padding-top: 10%;
  color: #f0e8ce;
  background-image: url(${(props) =>
    props.$isMobile ? mobileBackground : desktopBackground});
  background-repeat:no-repeat;
  background-position: center bottom;
  background-attachment: scroll;
  background-size: cover;

  // @supports (-webkit-touch-callout: none) {
  //   background-image: none;
  // }
`;

const ArticleGrid = ({ props }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <GridContainer $isMobile={isMobile}>
      {/* <Articles>
            {articles.map((article) => {
                return <ArticleCard props={article} />;
             })}
            </Articles> */}
            <div id="letter">
                <Letter />
            </div>
            <div id="interactive">
              <Mosaic/>
            </div>
            <News articles={props.news_articles}/>
            <Sports articles={props.sports_articles}/>
            <Arts articles={props.arts_articles}/>
            <Opinion articles={props.opinion_articles}/>
            <TheQuad articles={props.quad_articles}/>
            <Multimedia articles={props.multimedia_articles}/>
            <Prime articles={props.prime_articles}/>
            <Thirty articles={props.thirty_articles}/>
             <div id="about">
                <About />
            </div>
        </GridContainer>
    )
  }

export default ArticleGrid;
