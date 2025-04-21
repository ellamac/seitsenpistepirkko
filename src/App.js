import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
const App = (props) => {
  const [gameLayout, setGameLayout] = useState(
    () => JSON.parse(localStorage.getItem('gameLayout')) || 'ladybug'
  );

  useEffect(() => {
    localStorage.setItem('gameLayout', JSON.stringify(gameLayout));
  }, [gameLayout]);

  return (
    <article className={`app layout-${gameLayout}`}>
      <Header />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Main gameLayout={gameLayout} setGameLayout={setGameLayout} />
      </ErrorBoundary>
      <Footer />
    </article>
  );
};

export default App;
