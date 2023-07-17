import React, { useState, useEffect } from "react";
import createLetters from "./helpers/createLetters";
import Hive from "./components/Hive";
import isPangram from "./helpers/pangram";
import Header from "./components/Header";
import Main from "./components/Main";
const App = (props) => {
  return (
    <article className="app">
      <Header />
      <Main />
    </article>
  );
};

export default App;
