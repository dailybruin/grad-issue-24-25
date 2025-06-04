import Window from "./Window";

import newsBack from "../images/desktop/news.png";
import newsBackMobile from "../images/mobile/newsMobile.png";

import artsBack from "../images/desktop/arts.png";
import artsBackMobile from "../images/mobile/artsMobile.png";

import sportsBack from "../images/desktop/sports.png";
import sportsBackMobile from "../images/mobile/sportsMobile.png";

import opinionBack from "../images/desktop/opinion.png";
import opinionBackMobile from "../images/mobile/opinionMobile.png";

import quadBack from "../images/desktop/thequad.png";
import quadBackMobile from "../images/mobile/thequadMobile.png";

import multimediaBack from "../images/desktop/multimedia.png";
import multimediaBackMobile from "../images/mobile/multimediaMobile.png";

import primeBack from "../images/desktop/prime.png";
import primeBackMobile from "../images/mobile/primeMobile.png";

import thirtyBack from "../images/desktop/30.png";
import thirtyBackMobile from "../images/mobile/30Mobile.png";

import { insertPlaceholders } from "../utils/utilities.js";

const News = ({ articles }) => {
  console.log(articles);
  // 15 news articles

  // temporarily hard coding to match 15 articles sizes for TESTING purposes
  const temp15articles = [...articles];
  
  while (temp15articles.length < 15) {
    temp15articles.push(...articles); 
  }
  const temp15articles2 = temp15articles.slice(0, 15);

  // FIXME: REMOVE PLACEHOLDER??? CHECK FIGMA
  const updatedArticlesMobile = insertPlaceholders(temp15articles2, [14], [
    "#82A8C7"
  ]);

  return (
    <Window
      id="news"
      backgroundImage={newsBack}
      backgroundImageMobile={newsBackMobile}
      windowTitle="NEWS"
      articles={temp15articles2}  // FIXME: later fix this
      articlesMobile={updatedArticlesMobile}  // FIXME: later fix this
      shrinksAt={1051}
    />
  );
};

const Sports = ({ articles }) => {
  // 14 news articles
  const insertIndex = [14];

  // FIXME: later fix this
  // temporarily hard coding to match 14 articles sizes for TESTING purposes
  const temp15articles = [...articles];
  
  while (temp15articles.length < 14) {
    temp15articles.push(...articles); 
  }
  const temp15articles2 = temp15articles.slice(0, 14);

  const updatedArticles = insertPlaceholders(temp15articles2, insertIndex, [
    "#83AD83"
  ]);

  return (
    <Window
      id="sports"
      backgroundImage={sportsBack}
      backgroundImageMobile={sportsBackMobile}
      windowTitle="SPORTS"
      articles={updatedArticles}
      articlesMobile={temp15articles2}  // No placeholders // FIXME: later fix this
      shrinksAt={1053}
    />
  );
};

const Arts = ( { articles }) => {
  // ten art articles
  articles = articles.slice(0, 9);
  const insertIndex = [0, 3, 8];
  const insertIndexMobile = [5]

  const updatedArticles = insertPlaceholders(articles, insertIndex, [
    "#C69394",
    "#83AD83",
    "#D0CD84"
  ]);

  const updatedArticlesMobile = insertPlaceholders(articles, insertIndexMobile, [
    "#82A8C7"
  ]);

  return (
    <Window
      id="arts"
      backgroundImage={artsBack}
      backgroundImageMobile={artsBackMobile}
      windowTitle="ARTS"
      articles={updatedArticles}
      articlesMobile={updatedArticlesMobile}
      incCardHeightBy={1}
    />
  );
};

const Opinion = ( { articles }) => {
  // three opinion articles 
  articles = articles.slice(0, 3);
  const insertIndex = [1,2,4];
  const insertIndexMobile = [1]

  const updatedArticles = insertPlaceholders(articles, insertIndex, [
    "#D0CD84",
    "#83AD83",
    "#82A8C7"
  ]);

  const updatedArticlesMobile = insertPlaceholders(articles, insertIndexMobile, [
    "#D0CD84"
  ]);

  return (
    <Window
      id="opinion"
      backgroundImage={opinionBack}
      backgroundImageMobile={opinionBackMobile}
      windowTitle="OPINION"
      articles={updatedArticles}
      articlesMobile={updatedArticlesMobile}
      incCardHeightBy={4}
      shrinksAt={1051}
    />
  );
};

const TheQuad = ({ articles }) => {
  // three quad articles 
  articles = articles.slice(0, 3);
  const insertIndex = [0,1,2];
  const insertIndexMobile = [2]

  const updatedArticles = insertPlaceholders(articles, insertIndex, [
    "#D0CD84",
    "#83AD83",
    "#C69394"
  ]);

  const updatedArticlesMobile = insertPlaceholders(articles, insertIndexMobile, [
    "#C69394"
  ]);

  return (
    <Window
      id="quad"
      backgroundImage={quadBack}
      backgroundImageMobile={quadBackMobile}
      windowTitle="THE QUAD"
      articles={updatedArticles}
      articlesMobile={updatedArticlesMobile}
      incCardHeightBy={5}
    />
  );
};

const Multimedia = ({ articles }) => {
  // 15 multimedia articles 

  // temporarily hard coding to match 15 articles sizes for TESTING purposes
  const temp15articles = [...articles];
  
  while (temp15articles.length < 15) {
    temp15articles.push(...articles); 
  }
  const temp15articles2 = temp15articles.slice(0, 15);
  const temp16articles = temp15articles.slice(0, 16);

  return (
    <Window
      id="multimedia"
      backgroundImage={multimediaBack}
      backgroundImageMobile={multimediaBackMobile}
      windowTitle="MULTIMEDIA"
      articles={temp15articles2} // FIXME: later fix this
      articlesMobile={temp16articles} // FIXME: later fix this (16 on mobile)
    />
  );
};

const Prime = ({ articles }) => {
  // only one prime article
  articles = articles.slice(0, 1);

  return (
    <Window
      id="prime"
      backgroundImage={primeBack}
      backgroundImageMobile={primeBackMobile}
      windowTitle="PRIME"
      articles={articles}
      articlesMobile={articles}
      isLarge={true}
    />
  );
};

const Thirty = ({ articles }) => {
  // 33 thirty articles 

  // temporarily hard coding to match 32 articles sizes for TESTING purposes
  const temp33articles = [...articles];
  
  while (temp33articles.length < 32) {
    temp33articles.push(...articles); 
  }
  const temp33articles2 = temp33articles.slice(0, 32);
  const updatedArticles = insertPlaceholders(temp33articles2, [33], [
    "#C69394"
  ]);

  const updatedArticlesMobile = insertPlaceholders(temp33articles2, [30,33], [
    "#82A8C7",
    "#C69394"
  ]);

  return (
    <Window
      id="-30-"
      backgroundImage={thirtyBack}
      backgroundImageMobile={thirtyBackMobile}
      windowTitle="THIRTY"
      articles={updatedArticles} // FIXME: later fix this
      articlesMobile={updatedArticlesMobile}  // FIXME: later fix this
      shrinksAt={1064}
      incCardHeightBy={3}
    />
  );
};

export { News, Sports, Arts, Opinion, TheQuad, Multimedia, Prime, Thirty };
