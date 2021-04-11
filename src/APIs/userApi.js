import axios from "axios";

const Axios = axios.create({
  baseURL: "https://5f52d4f27c47c30016e30a68.mockapi.io/tuur/",
});

// Add a request interceptor
Axios.interceptors.request.use(
  // Do something before request is sent
  function (config) {
    return config;
  },
  // Do something with request error
  function (error) {
    return Promise.reject(error);
  }
);

export default Axios;
