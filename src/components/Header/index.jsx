import React, { useState } from "react";

import "./styles.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="container-header">
      <img src="assets/logo.svg" alt="Logo Corebiz" />

      <nav className="container-links">
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
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

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          <img
            src={isMobile ? "assets/times.svg": "assets/bars.svg"}
            alt="icons menu"
          />
        </button>
      </nav>
    </header>
  );
}

export default Header;
