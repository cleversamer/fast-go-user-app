import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_PREFIX = "fastgo_cache_";

const store = (key, value, expiryInMins = 0) => {
  try {
    const item = {
      value,
      expiryDate: Date.now() + expiryInMins * 60 * 1000,
    };

    AsyncStorage.setItem(CACHE_PREFIX + key, JSON.stringify(item));
  } catch (err) {}
};

const get = (key) => {
  try {
    const value = AsyncStorage.getItem(CACHE_PREFIX + key);
    const item = JSON.parse(value);

    if (!item) {
      return null;
    }

    if (isExpired(item)) {
      AsyncStorage.removeItem(CACHE_PREFIX + key);
      return null;
    }

    return item.value;
  } catch (err) {
    return null;
  }
};

const isExpired = (item) => {
  try {
    return Date.now() > item.expiryDate;
  } catch (err) {
    return true;
  }
};

// eslint-disable-next-line
export default {
  store,
  get,
};
