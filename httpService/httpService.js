import fetch from "isomorphic-unfetch";

const POST_CALL_CONFIG = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

const makeCall = async (url, options) => {
  return fetch(url, options).then(res => res.json());
};

const httpService = {
  get: async (url, options = {}) => {
    return makeCall(url, { ...options, method: "GET" });
  },
  post: async (url, options = {}) => {
    return makeCall(url, {
      ...options,
      ...POST_CALL_CONFIG
    });
  }
};

export default httpService;
