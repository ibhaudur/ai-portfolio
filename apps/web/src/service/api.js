import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3001/api/v1`,
});
api.interceptors.request.use(
  function (config) {
    // const token = Store.getState().auth.token;
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }

    return config;
  },
  function (error) {
    console.log("service", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.error("An error occurred", error);
    // Example: Redirect on unauthorized
    if (error.response && error.response.status === 401) {
      // Redirect code for Next.js
      if (typeof window !== "undefined") {
        // window.location.href = "/login";
        // Store.dispatch(logOut());
        // Store.dispatch(clearProfile());
      }
    }

    return Promise.reject(error);
  }
);

export default api;

// get_api
