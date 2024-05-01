import AsyncStorage from "@react-native-async-storage/async-storage";

export const setLocalStorageItem = async (item: string, payload: any) => {
  const result = await AsyncStorage.setItem(item, payload);
  return result;
};

export const getLocalStorageItem = async (item: string) => {
  const result = await AsyncStorage.getItem(item);
  return result;
};

export const removeLocalStorageItem = async (item: string) => {
  const result = await AsyncStorage.removeItem(item);
  return result;
};
