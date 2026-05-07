import axios from "axios";

const API = axios.create({
  baseURL: "https://web-production-94224.up.railway.app",
});

export default API;
