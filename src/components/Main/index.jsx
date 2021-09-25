import React, { useEffect, useState, createContext } from "react";

import api from "../../services/api";

import "./styles.css";

export const userContext = createContext();

function Main() {
  const [album, setAlbum] = useState([]);
  const [post, setPost] = useState(0);

  useEffect(() => {
    api
      .get("Everton-Afonso/db/album")
      .then((response) => setAlbum(response.data))
      .catch((error) => {
        alert(`Ops! ocorreu um erro: ${error}`);
      });
  }, []);

  return (
    <main className="main-conteiner">
      <section className="main-content">
        <section className="main-text">
          <h2>{album[post]?.title}</h2>
          <a
            href="https://www.corebiz.ag/pt/"
            target="_blank"
            rel="noreferrer"
            alt="veja mais"
          >
            veja mais
            <img src="assets/arrow.svg" alt="veja mais" />
          </a>
        </section>

        <section className="model">
          <div>
            <img src={album[post]?.url} alt="imagens do model" />
          </div>
        </section>

        <section className="model-mini">
          <div>
            <userContext.Provider value={[album, setAlbum]}>
              {album.map((itens, index) => (
                <img
                  key={index}
                  onClick={() => setPost(index)}
                  src={itens.thumbnailUrl}
                  alt="imagens do mini model"
                />
              ))}
            </userContext.Provider>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Main;
