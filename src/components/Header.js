import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const Header = (props) => {
  const [showModal, setShowModal] = useState(true);

  const toggleVisibility = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <header className='mainHeader'>
      <section className='headerText'>
        <h1>SEITSENPISTEPIRKKO</h1>
        <button type='button' onClick={toggleVisibility}>
          säännöt
        </button>
      </section>
      <Modal
        hidden={showModal}
        toggleVisibility={toggleVisibility}
        content={
          <section>
            <h2>Säännöt</h2>
            <p>
              Muodosta sanoja annetuista kirjaimista siten, että sana käyttää
              vähintään kerran keskimmäistä kirjainta ja on pituudeltaan
              vähintään neljä kirjainta.
            </p>
            <p>
              Pitkistä kirjaimista saa enemmän pisteitä ja pangrammeista saa
              seitsemän extrapistettä. Pangrammi on sana, jossa on käytetty
              kaikkia annettuja kirjaimia.
            </p>
            <p>Pistejako on seuraava:</p>
            <p>Neljä kirjainta = 1 piste,</p>
            <p>Viisi kirjainta = 2 pistettä,</p>
            <p>Kuusi kirjainta = 3 pistettä, jne ...</p>
            <p>Pangrammi = + 7 pistettä.</p>

            <p>
              Jos annetut kirjaimet on y k p l t a ö, joista y on leppiksen
              keskellä, hyväksyttyjä sanoja on esimerkiksi kyky (1p), löyly (2p)
              ja palkkatyö (13p). Hylättyjä sanoja voisi olla esimerkiksi kyy
              (liian lyhyt) ja takka (ei y-kirjainta).
            </p>
          </section>
        }
      />
    </header>
  );
};

export default Header;
