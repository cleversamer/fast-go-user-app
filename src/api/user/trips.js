import client from "../client";
import authStorage from "../../auth/storage";

export const getMyPassengerTrips = async (page, limit) => {
  const expiryInMins = 1;
  const token = await authStorage.getToken();

  return await client.get(
    `/trips/passenger/my?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: token,
      },
    },
    expiryInMins
  );
};
