import Window from "./Window";
import multimediaBack from "../images/multimedia.png";
import primeBack from "../images/prime.png";
import quadBack from "../images/thequad.png";
import bubbles from "../images/bubbles.png";

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
      topOffset={350}
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
      topOffset={350}
      isLarge={true}
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
      topOffset={350}
    />
  );
};

export { Multimedia, Prime, TheQuad };
