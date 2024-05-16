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

export const checkAuth = async (navigation: any) => {
  const token = await getLocalStorageItem('token');
  if (!token) {
    navigation.navigate('Signin');
  }
};

export const signoutUser = async (navigation: any) => {
  await removeLocalStorageItem('token');
  navigation.navigate('Signin');
};

export const storeData = async (value: {password: string, nomeApp: string}) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    console.log(e);
  }
}

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e);
  }
}
