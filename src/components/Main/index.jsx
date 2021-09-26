import React, { useEffect, useState } from "react";

import api from "../../services/api";
import PostImg from "../PostImg";
import Title from "../Title";

import "./styles.css";

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
          {<Title title={album[post]?.title} />}
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
          {<PostImg url={album[post]?.url} />}
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
