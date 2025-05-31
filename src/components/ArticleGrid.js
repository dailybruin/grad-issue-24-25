import styled from 'styled-components'
import { useEffect, useState } from 'react';
import desktopBackground from '../images/desktop/bricks.png'
import mobileBackground from '../images/mobile/bricksMobile.png'
import { Arts, Multimedia, News, Opinion, Prime, Sports, TheQuad, Thirty } from './ArticleWindows.js';
import About from './About.js';


const GridContainer = styled.div`
  height: 100%;
  color: #f0e8ce;
  text-align: center;
  padding-top: 10%;
  position: relative;
  background-image: url(${(props) =>
    props.$isMobile ? mobileBackground : desktopBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
            <News articles={props.articles}/>
            <Sports articles={props.articles}/>
            <Arts articles={props.articles}/>
            <Opinion articles={props.articles}/>
            <TheQuad articles={props.articles}/>
            <Multimedia articles={props.articles}/>
            <Prime articles={props.articles}/>
            <Thirty articles={props.articles}/>
            <About/>
        </GridContainer>
    )
  }

export default ArticleGrid;
