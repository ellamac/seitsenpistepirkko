import React, { useState, useEffect } from "react";

const Modal = ({ hidden, toggleVisibility, content }) => {
  useEffect(() => {
    console.log("MODAL");
  });
  return (
    <section className={hidden ? "modal hidden" : "modal visible"}>
      <main>
        {content}
        <button type="button" onClick={toggleVisibility}>
          sulje
        </button>
      </main>
    </section>
  );
};

export default Modal;
