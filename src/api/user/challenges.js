import client from "../client";
import authStorage from "../../auth/storage";

export const getAllChallenges = async () => {
  const expiryInMins = 0;
  const token = await authStorage.getToken();

  return await client.get(
    "/challenges/all",
    {
      headers: {
        Authorization: token,
      },
    },
    expiryInMins
  );
};

export const addChallenge = async (
  tripTarget,
  referralTarget,
  reward,
  role
) => {
  const token = await authStorage.getToken();

  return await client.post(
    "/challenges/add",
    {
      tripTarget,
      referralTarget,
      reward,
      role,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const deleteChallenge = async (challengeId) => {
  const token = await authStorage.getToken();

  return await client.delete(`/challenges/${challengeId}/delete`, {
    headers: {
      Authorization: token,
    },
  });
};
