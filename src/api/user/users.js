import client from "../client";
import authStorage from "../../auth/storage";

export const authenticate = async (lang) => {
  const token = await authStorage.getToken();
  if (!token) {
    throw new Error("");
  }

  return await client.get(`/users/authenticate?lang=${lang}`, {
    headers: {
      Authorization: token,
    },
  });
};
