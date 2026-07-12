import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [gamelayout, setgamelayout] = useState(
    () => JSON.parse(localStorage.getItem('gamelayout')) || 'ladybug',
  );

  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light',
  );

  useEffect(() => {
    localStorage.setItem('gamelayout', JSON.stringify(gamelayout));
  }, [gamelayout]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <article className={`app layout-${gamelayout}`}>
      <Header theme={theme} setTheme={setTheme} />

      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Main gamelayout={gamelayout} setgamelayout={setgamelayout} />
      </ErrorBoundary>

      <Footer />
    </article>
  );
};

export default App;
