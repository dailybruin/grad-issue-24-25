import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleGrid from "./components/ArticleGrid";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Mosaic from "./components/mosaic";

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
        <Nav />
        <Header />
        <Landing />
        <Mosaic />
        <ArticleGrid props={data} />
        <Footer />
      </div>
    )
  );
}

export default App;
