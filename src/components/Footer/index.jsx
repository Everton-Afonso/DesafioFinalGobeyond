import React from "react";

import "./styles.css";

function Cards() {
  return (
    <footer className="footer">
      <section className="footer-container">
        <section className="footer-contacts">
          <div className="footer-logo">
            <img src="assets/logofooter.svg" alt="logo Corebiz do footer" />
            <p>direitos reservados. corebiz 2021</p>
          </div>

          <div className="contacts">
            <a
              href="https://www.facebook.com/everton.otavio.395"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/facebook-f.svg" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/everton_afonso/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/instagram.svg" alt="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/everton-otavio-b5b035191/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="assets/linkedin-in.svg" alt="linkedin-in" />
            </a>
          </div>
        </section>

        <section className="footer-menu">
          <nav className="footer-links">
            <ul>
              <li>
                <a
                  href="https://www.corebiz.ag/pt/about/"
                  target="_blank"
                  rel="noreferrer"
                >
                  a corebiz
                </a>
              </li>
              <li>
                <a
                  href="https://www.corebiz.ag/pt/#framework-title"
                  target="_blank"
                  rel="noreferrer"
                >
                  serviços
                </a>
              </li>
              <li>
                <a
                  href="https://www.corebiz.ag/pt/cases/"
                  target="_blank"
                  rel="noreferrer"
                >
                  cases
                </a>
              </li>
              <li>
                <a
                  href="https://www.corebiz.ag/pt/contato/"
                  target="_blank"
                  rel="noreferrer"
                >
                  contato
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </footer>
  );
}

export default Cards;
