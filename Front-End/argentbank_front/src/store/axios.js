import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

// instance.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;

export default instance