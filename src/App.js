import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
const App = (props) => {
  const [gamelayout, setgamelayout] = useState(
    () => JSON.parse(localStorage.getItem('gamelayout')) || 'ladybug'
  );

  useEffect(() => {
    localStorage.setItem('gamelayout', JSON.stringify(gamelayout));
  }, [gamelayout]);

  return (
    <article className={`app layout-${gamelayout}`}>
      <Header />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Main gamelayout={gamelayout} setgamelayout={setgamelayout} />
      </ErrorBoundary>
      <Footer />
    </article>
  );
};

export default App;
