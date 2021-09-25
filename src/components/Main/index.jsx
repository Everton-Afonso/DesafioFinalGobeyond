import React from "react";

import "./styles.css";

function Main() {
  return (
    <main className="main-conteiner">
      <section className="main-content">
        <section className="main-text">
          <div>
            <h1>Hello, I am Smith</h1>

            <a
              href="https://www.corebiz.ag/pt/"
              target="_blank"
              rel="noreferrer"
              alt="veja mais"
            >
              veja mais
              <img src="assets/arrow.svg" alt="veja mais" />
            </a>
          </div>

          <section className="model-mini">
            <div>
              <img src="assets/banner.jpg" alt="teste" />
            </div>
          </section>
        </section>

        <section className="model">
          <div>
            <img src="assets/banner.jpg" alt="teste" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Main;
