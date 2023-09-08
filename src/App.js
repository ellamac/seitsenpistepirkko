import React, { useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
const App = (props) => {
  return (
    <article className='app'>
      <Header />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Main />
      </ErrorBoundary>
      <Footer />
    </article>
  );
};

export default App;
