import * as SecureStore from "expo-secure-store";

const tokenKey = "authentication-token-00934";
const onboardingKey = "onboarding-00934";

export const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(tokenKey, token);
  } catch (err) {}
};

export const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(tokenKey);
  } catch (err) {}
};

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(tokenKey);
  } catch (err) {}
};

export const checkOnboardingShown = async () => {
  try {
    return await SecureStore.getItemAsync(onboardingKey);
  } catch (err) {}
};

export const markOnboardingShown = async () => {
  try {
    await SecureStore.setItemAsync(onboardingKey, "true");
  } catch (err) {}
};

export default {
  getToken,
  removeToken,
  storeToken,
  checkOnboardingShown,
  markOnboardingShown,
};
