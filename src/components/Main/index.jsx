import React, { useEffect, useState } from "react";

// import api from "../../services/api";

import "./styles.css";

function Main() {
  // const [album, setAlbum] = useState([]);
  const [album1, setAlbum1] = useState([]);
  const [post, setPost] = useState(0);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Everton-Afonso/db/album")
      .then((res) => res.json())
      .then((res) => setAlbum1(res))
      .catch((error) => {
        alert(`Ops! ocorreu um erro: ${error}`);
      });
  }, []);

  return (
    <main className="main-conteiner">
      <section className="main-content">
        <section className="main-text">
          <h1>{album1[post]?.title}</h1>
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

        <section className="model-mini">
          <div>
            {album1.map((itens, index) => (
              <img
                key={index}
                onClick={() => setPost(itens.id)}
                src={itens.thumbnailUrl}
                alt="imagens do mini model"
              />
            ))}
          </div>
        </section>

        <section className="model">
          <div>
            <img src={album1[post]?.url} alt="imagens do model" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Main;
