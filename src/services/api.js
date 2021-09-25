import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/Everton-Afonso/db"
});

export default api;