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

        <section className="footer-countries">
          <div>
            <h3>.Brasil</h3>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
            <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
          </div>

          <div>
            <h3>.Argentina</h3>
            <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
          </div>

          <div>
            <h3>.México</h3>
            <p>
              Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo,
              11520 Ciudad de México, CDMX
            </p>
          </div>

          <div>
            <h3>.Chile</h3>
            <p>Roberto del Río 1137, Providencia.</p>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Cards;
