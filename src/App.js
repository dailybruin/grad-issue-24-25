import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from "./components/ArticleCard";
import bubble_img from "./images/bubbles.png"

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/grad-issue-24-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <ArticleCard
        image={bubble_img}
        article_url="https://www.youtube.com/watch?v=0cHtUNmdq_c"
        article_text="Headline Goes Here! Here are some more words until we reach the 82 character limit"
        author_first="John"
        author_last="Doe"
      />
      <Footer/>
    </div>
  );
}

export default App;
