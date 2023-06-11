import client from "../client";

export const join = async (
  firstName,
  lastName,
  email,
  phoneICC,
  phoneNSN,
  role,
  gender,
  lang,
  deviceToken,
  referralCode,
  socketId
) => {
  return await client.post("/auth/join/regular", {
    firstName,
    lastName,
    email,
    phoneICC,
    phoneNSN,
    role,
    gender,
    lang,
    deviceToken,
    referralCode,
    socketId,
  });
};
