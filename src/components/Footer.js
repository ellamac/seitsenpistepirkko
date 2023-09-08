import React, { useState, useEffect } from 'react';

const Footer = (props) => {
  console.log('foot');

  return (
    <footer className='mainFooter'>
      <p>
        {' '}
        Alkuperänen:{' '}
        <a
          href='https://www.nytimes.com/puzzles/spelling-bee'
          target='_blank'
          rel='noreferrer'
        >
          nytimes.com/puzzles/spelling-bee
        </a>
      </p>
    </footer>
  );
};

export default Footer;
