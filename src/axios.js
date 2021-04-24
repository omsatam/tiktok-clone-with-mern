import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend17.herokuapp.com/",
});

export default instance;
