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

const News = () => {
  const newsArticles = [
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 1",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 2",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 3",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 4",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 5",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 6",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 7",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 8",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 9",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 10",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 11",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 12",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 13",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 14",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 15",
      author_first: "John",
      author_last: "Doe",
    },
  ];

  return (
    <Window
      backgroundImage={newsBack}
      windowTitle="NEWS"
      articles={newsArticles}
    />
  );
};

const Sports = () => {
  const sportsArticles = [
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 1",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 2",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 3",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 4",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 5",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 6",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 7",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 8",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 9",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 10",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 11",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 12",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 13",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 14",
      author_first: "John",
      author_last: "Doe",
    },
    { isPlaceholder: true, placeholderColor: "#83AD83" },
  ];

  return (
    <Window
      backgroundImage={sportsBack}
      windowTitle="SPORTS"
      articles={sportsArticles}
    />
  );
};

const Arts = () => {
  const artsArticles = [
    { isPlaceholder: true, placeholderColor: "#C69394" },

    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 2",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 3",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 4",
      author_first: "John",
      author_last: "Doe",
    },
    { isPlaceholder: true, placeholderColor: "#83AD83" },

    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 6",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 7",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 8",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 9",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 10",
      author_first: "John",
      author_last: "Doe",
    },
    { isPlaceholder: true, placeholderColor: "#D0CD84" },

    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 12",
      author_first: "John",
      author_last: "Doe",
    },
  ];

  return (
    <Window
      backgroundImage={artsBack}
      windowTitle="ARTS"
      articles={artsArticles}
      incCardHeightBy={1}
    />
  );
};

const Opinion = () => {
  const opinionArticles = [
    {
      image: bubbles,
      article_url: "https://example.com",
      article_text: "Quad Article 1",
      author_first: "Jane",
      author_last: "Doe",
    },
    { isPlaceholder: true, placeholderColor: "#D0CD84" },

    {
      image: bubbles,
      article_url: "https://example.com",
      article_text: "Quad Article 2",
      author_first: "Jane",
      author_last: "Doe",
    },
    { isPlaceholder: true, placeholderColor: "#83AD83" },

    {
      image: bubbles,
      article_url: "https://example.com",
      article_text: "Opinion Article 4",
      author_first: "Jane",
      author_last: "Doe",
    },
    { isPlaceholder: true, placeholderColor: "#82A8C7" },
  ];

  return (
    <Window
      backgroundImage={opinionBack}
      windowTitle="OPINION"
      articles={opinionArticles}
      incCardHeightBy={4}
    />
  );
};

const TheQuad = () => {
  const quadArticles = [
    { isPlaceholder: true, placeholderColor: "#D0CD84" },
    {
      image: bubbles,
      article_url: "https://example.com",
      article_text: "Quad Article 2",
      author_first: "Jane",
      author_last: "Doe",
    },

    { isPlaceholder: true, placeholderColor: "#83AD83" },

    {
      image: bubbles,
      article_url: "https://example.com",
      article_text: "Quad Article 4",
      author_first: "Jane",
      author_last: "Doe",
    },
    { isPlaceholder: true, placeholderColor: "#C69394" },

    {
      image: bubbles,
      article_url: "https://example.com",
      article_text: "NULL",
      author_first: "Jane",
      author_last: "Doe",
    },
  ];

  return (
    <Window
      backgroundImage={quadBack}
      windowTitle="THE QUAD"
      articles={quadArticles}
      incCardHeightBy={5}
    />
  );
};

const Multimedia = () => {
  const multimediaArticles = [
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 1",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 2",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 3",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 4",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 5",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 6",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 7",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 8",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 9",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 10",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 11",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 12",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 13",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 14",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 15",
      author_first: "John",
      author_last: "Doe",
    },
  ];

  return (
    <Window
      backgroundImage={multimediaBack}
      windowTitle="MULTIMEDIA"
      articles={multimediaArticles}
    />
  );
};

const Prime = () => {
  const primeArticles = [
    {
      image: bubbles,
      article_url: "https://example.com",
      article_text: "Prime Article",
      author_first: "Prime",
      author_last: "Author",
    },
  ];

  return (
    <Window
      backgroundImage={primeBack}
      windowTitle="PRIME"
      articles={primeArticles}
      isLarge={true}
    />
  );
};

// this is not formatting well
const Thirty = () => {
  const thirtyArticles = [
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 1",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 2",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 3",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 4",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 5",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 6",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 7",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 8",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 9",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 10",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 11",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 12",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 13",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 14",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 15",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 16",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 17",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 18",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 19",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 20",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 21",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 22",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 23",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 24",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 25",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 26",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 27",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 28",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 29",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 30",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 31",
      author_first: "John",
      author_last: "Doe",
    },
    {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 32",
      author_first: "John",
      author_last: "Doe",
    },
        {
      image: bubbles,
      article_url: "https://youtube.com",
      article_text: "Article 33",
      author_first: "John",
      author_last: "Doe",
    },
  ];

  return (
    <Window
      backgroundImage={thirtyBack}
      windowTitle="THIRTY"
      articles={thirtyArticles}
    />
  );
};

export { News, Sports, Arts, Opinion, TheQuad, Multimedia, Prime, Thirty };
