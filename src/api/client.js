import axios from "axios";
import cache from "../utils/cache";

// export const serverURL = "https://monkeyroadcar.app";
export const serverURL = "http://192.168.1.235:4000";

const api = axios.create({
  baseURL: serverURL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const get = api.get;
api.get = async (url, axiosConfig, expiryInMins = 0) => {
  const value = cache.get(url);
  if (value) {
    return { ok: true, data: value };
  }

  const response = await get(url, axiosConfig);

  cache.store(url, response.data, expiryInMins || 0);
  return response;
};

export default api;
