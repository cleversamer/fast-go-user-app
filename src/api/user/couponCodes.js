import client from "../client";
import authStorage from "../../auth/storage";

export const getAllCouponCodes = async (page, limit) => {
  const expiryInMins = 0;
  const token = await authStorage.getToken();

  return await client.get(
    `/coupons/all?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: token,
      },
    },
    expiryInMins
  );
};

export const addCouponCode = async (code, discountPercentage) => {
  const token = await authStorage.getToken();

  return await client.post(
    "/coupons/add",
    {
      code,
      discountPercentage,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const deleteCouponCode = async (couponCodeId) => {
  const token = await authStorage.getToken();

  return await client.delete(`/coupons/${couponCodeId}/delete`, {
    headers: {
      Authorization: token,
    },
  });
};
