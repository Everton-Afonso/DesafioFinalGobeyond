import React from "react";
import ReactDOMServer from 'react-dom/server';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./global.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

ReactDOMServer.renderToString(<App />);

export default App;
