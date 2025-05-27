import Window from "./Window";
import newsBack from "../images/news.png";
import artsBack from "../images/arts.png";
import sportsBack from "../images/sports.png";
import opinionBack from "../images/opinion.png";
import quadBack from "../images/thequad.png";
import multimediaBack from "../images/multimedia.png";
import primeBack from "../images/prime.png";
import thirtyBack from "../images/30.png";
import bubbles from "../images/bubbles.png";

const News = ({ articles }) => {
  // 15 news articles

  // temporarily hard coding to match 15 articles sizes for TESTING purposes
  const temp15articles = [...articles];
  
  while (temp15articles.length < 15) {
    temp15articles.push(...articles); 
  }
  const temp15articles2 = temp15articles.slice(0, 15);

  return (
    <Window
      id="news"
      backgroundImage={newsBack}
      windowTitle="NEWS"
      articles={temp15articles2} // FIXME: later fix this
      shrinksAt={1051}
    />
  );
};

const Sports = ({ articles }) => {
  // 14 news articles
  const insertIndex = 14;

  // FIXME: later fix this
  // temporarily hard coding to match 14 articles sizes for TESTING purposes
  const temp15articles = [...articles];
  
  while (temp15articles.length < 14) {
    temp15articles.push(...articles); 
  }
  const temp15articles2 = temp15articles.slice(0, 14);

  const updatedArticles = [
    ...temp15articles2.slice(0, insertIndex),
    { isPlaceholder: true, placeholderColor: "#83AD83" }
  ];

  return (
    <Window
      id="sports"
      backgroundImage={sportsBack}
      windowTitle="SPORTS"
      articles={updatedArticles}
      shrinksAt={1053}
    />
  );
};

const Arts = ( { articles }) => {
  // ten art articles
  articles = articles.slice(0, 9);
  const insertIndex = [0, 5, 11];

  const updatedArticles = [
    { isPlaceholder: true, placeholderColor: "#C69394" },
    ...articles.slice(0, insertIndex[1]),
    { isPlaceholder: true, placeholderColor: "#83AD83" }, 
    ...articles.slice(insertIndex[1], insertIndex[2]),
    { isPlaceholder: true, placeholderColor: "#D0CD84" },
    ...articles.slice(insertIndex[2])
  ];

  return (
    <Window
      id="arts"
      backgroundImage={artsBack}
      windowTitle="ARTS"
      articles={updatedArticles}
      incCardHeightBy={1}
    />
  );
};

const Opinion = ( { articles }) => {
  // three opinion articles 
  articles = articles.slice(0, 3);
  const insertIndex = [1, 2, 4];

  const updatedArticles = [
    ...articles.slice(0, insertIndex[0]),
    { isPlaceholder: true, placeholderColor: "#D0CD84" }, 
    ...articles.slice(insertIndex[0], insertIndex[1]),
    { isPlaceholder: true, placeholderColor: "#83AD83" },
    ...articles.slice(insertIndex[1], insertIndex[2]),
    { isPlaceholder: true, placeholderColor: "#82A8C7" },
    ...articles.slice(insertIndex[2])
  ];

  return (
    <Window
      id="opinion"
      backgroundImage={opinionBack}
      windowTitle="OPINION"
      articles={updatedArticles}
      incCardHeightBy={4}
      shrinksAt={1051}
    />
  );
};

const TheQuad = ({ articles }) => {
  // three quad articles 
  articles = articles.slice(0, 3);
  const insertIndex = [0, 1, 2];

  const updatedArticles = [
    { isPlaceholder: true, placeholderColor: "#D0CD84" },
    ...articles.slice(0, insertIndex[1]),
    { isPlaceholder: true, placeholderColor: "#83AD83" }, 
    ...articles.slice(insertIndex[1], insertIndex[2]),
    { isPlaceholder: true, placeholderColor: "#C69394" },
    ...articles.slice(insertIndex[2])
  ];

  return (
    <Window
      id="quad"
      backgroundImage={quadBack}
      windowTitle="THE QUAD"
      articles={updatedArticles}
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

  return (
    <Window
      id="multimedia"
      backgroundImage={multimediaBack}
      windowTitle="MULTIMEDIA"
      articles={temp15articles2} // FIXME: later fix this
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
      windowTitle="PRIME"
      articles={articles}
      isLarge={true}
    />
  );
};

// this is not formatting well
const Thirty = ({ articles }) => {
  // 30 thirty articles 

  // temporarily hard coding to match 33 articles sizes for TESTING purposes
  const temp15articles = [...articles];
  
  while (temp15articles.length < 33) {
    temp15articles.push(...articles); 
  }
  const temp15articles2 = temp15articles.slice(0, 33);

  return (
    <Window
      id="thirty"
      backgroundImage={thirtyBack}
      windowTitle="THIRTY"
      articles={temp15articles2} // FIXME: later fix this
      is30={true}
      shrinksAt={1064}
    />
  );
};

export { News, Sports, Arts, Opinion, TheQuad, Multimedia, Prime, Thirty };
