import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

function Main() {
  const [album, setAlbum] = useState([]);
  const [post, setPost] = useState(0);

  useEffect(() => {
    api
      .get("album")
      .then((response) => setAlbum(response.data))
      .catch((error) => {
        alert(`Ops! ocorreu um erro: ${error}`);
      });
  }, []);

  return (
    <main className="main-conteiner">
      <section className="main-content">
        

        <section className="model-mini">
          <div>
            {album.map((itens, index) => (
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
            <img src={album[post]?.url} alt="imagens do model" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Main;
