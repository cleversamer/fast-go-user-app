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

export const chargePaymentCard = async (cardCode) => {
  const token = await authStorage.getToken();

  return await client.post(
    "/cards/payment/charge",
    { cardCode },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const getAllPaymentCards = async (page, limit) => {
  const token = await authStorage.getToken();

  return await client.get(`/cards/payment/all?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: token,
    },
  });
};

export const deletePaymentCard = async (paymentCardId) => {
  const token = await authStorage.getToken();

  return await client.delete(`/cards/payment/${paymentCardId}/delete`, {
    headers: {
      Authorization: token,
    },
  });
};

export const addPaymentCard = async (cardCode, balance) => {
  const token = await authStorage.getToken();

  return await client.post(
    "/cards/payment/add",
    { cardCode, balance },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const autoAddPaymentCards = async (balance, count) => {
  const token = await authStorage.getToken();

  return await client.post(
    "/cards/payment/auto-add",
    { balance, count },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
