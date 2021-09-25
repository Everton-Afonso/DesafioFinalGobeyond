import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

function Main() {
  const [album, setAlbum] = useState([]);
  const [post, setPost] = useState(0);
  const userGitHub = "Everton-Afonso/db/album";

  useEffect(() => {
    api
      .get(`${userGitHub}`)
      .then((response) => setAlbum(response.data))
      .catch((error) => {
        alert(`Ops! ocorreu um erro: ${error}`);
      });
  }, []);

  return (
    <main className="main-conteiner">
      <section className="main-content">
        <section
          className={`title-main ${
            album[post]?.id === post ? "active" : "inactive"
          }`}
        >
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
            <img
              className={`button-main ${
                album[post]?.id === post ? "active" : "inactive"
              }`}
              src={album[post]?.url}
              alt={album[post]?.title}
            />
          </div>
        </section>

        <section className="model-mini">
          <div>
            {album.map((itens, index) => (
              <img
                key={index}
                onClick={() => setPost(index)}
                src={itens.thumbnailUrl}
                alt="imagens do mini model"
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Main;
