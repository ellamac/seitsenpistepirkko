import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
const App = (props) => {
  useEffect(() => {
    console.log("APP");
  });
  return (
    <article className="app">
      <Header />
      <Main />
      <Footer />
    </article>
  );
};

export default App;
