import React, { useState, useEffect } from "react";

const Header = (props) => {
  return (
    <header>
      <h1>SEITSENPISTEPIRKKO</h1>
      <p>
        Muodosta sanoja annetuista kirjaimista siten, että sana käyttää
        vähintään kerran keskimmäistä kirjainta ja on pituudeltaan vähintään
        neljä kirjainta. Pitkistä kirjaimista saa enemmän pisteitä ja
        pangrammeista saa seitsemän extrapistettä. Pangrammi on sana, jossa on
        käytetty kaikkia annettuja kirjaimia.
      </p>
    </header>
  );
};

export default Header;
