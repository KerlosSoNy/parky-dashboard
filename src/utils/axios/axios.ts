import axios, { InternalAxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

// if (!inLocalhost()) {
//   axiosInstance.defaults.withXSRFToken = true;
//   axiosInstance.defaults.withCredentials = true;
// }

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if(localStorage.getItem("token") && localStorage.getItem("token") !== null){
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  } 
  config.headers['Accept-Language'] = document.documentElement.lang;
  config.headers['Content-Type'] = 'application/json';
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response.status === 401 &&
      error.response.data.message == "You are not authenticated"
    ) {
      window.localStorage.clear();
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
