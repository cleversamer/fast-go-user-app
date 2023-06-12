import cache from "../utils/cache";

const tokenKey = "authentication-token-00934";
const onboardingKey = "onboarding-00934";

export const storeToken = async (token) => {
  try {
    const bearerToken = `Bearer ${token}`;
    await cache.store(tokenKey, bearerToken, Number.MAX_SAFE_INTEGER);
  } catch (err) {}
};

export const getToken = async () => {
  try {
    return await cache.get(tokenKey);
  } catch (err) {}
};

export const removeToken = async () => {
  try {
    await cache.remove(tokenKey);
  } catch (err) {}
};

export const getOnboardingShown = async () => {
  try {
    return await cache.get(onboardingKey);
  } catch (err) {}
};

export const markOnboardingShown = async () => {
  try {
    await cache.store(
      onboardingKey,
      { isShown: true },
      Number.MAX_SAFE_INTEGER
    );
  } catch (err) {}
};

export default {
  getToken,
  removeToken,
  storeToken,
  getOnboardingShown,
  markOnboardingShown,
};
