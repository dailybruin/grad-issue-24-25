import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  News,
  Sports,
  Arts,
  Opinion,
  TheQuad,
  Multimedia,
  Prime,
  Thirty,
} from "./components/ArticleWindows";
import Bricks from "./images/background-bricks.png";
import ArticleGrid from "./components/ArticleGrid";
import Landing from "./components/Landing";
import Nav from "./components/Nav";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/grad-issue-24-25"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  return (
    data && (
      <div
        className="App"
        // style={{
        //   backgroundImage: `url(${Bricks})`,
        // }}
      >
        <Nav/>
        <Header />
        {/* <News articles={data.articles}/>
        <Sports articles={data.articles}/>
        <Arts articles={data.articles}/>
        <Opinion articles={data.articles}/>
        <TheQuad articles={data.articles}/>
        <Multimedia articles={data.articles}/>
        <Prime articles={data.articles}/>
        <Thirty articles={data.articles}/> */}
        <Landing/>
        <ArticleGrid props={data}/>
        <Footer />
      </div>
    )
  );
}

export default App;
