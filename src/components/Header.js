import React, { useState, useEffect } from "react";

const Header = (props) => {
  return (
    <header>
      <h1>SEITSENPISTEPIRKKO</h1>
      <p>
        Muodosta sanoja annetuista kirjaimista siten, että sana käyttää
        vähintään kerran keskimmäistä kirjainta ja on pituudeltaan vähintään
        neljä kirjainta.
      </p>
    </header>
  );
};

export default Header;
