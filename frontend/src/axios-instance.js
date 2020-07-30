import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.100.102.28/",
});

export default instance;
