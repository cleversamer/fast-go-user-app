import client from "../client";
import authStorage from "../../auth/storage";

export const checkPaymentCard = async (cardCode) => {
  const token = await authStorage.getToken();

  return await client.post(
    "/cards/payment/check",
    { cardCode },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
