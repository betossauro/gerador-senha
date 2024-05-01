import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../../utils/localStorage";

export const generatePassword = () => {
  let password = "";
  let charcters = "as*e232@#$!SxAd@#";
  let passwordLength = 8;

  for (let i = 0; i < passwordLength; i++) {
    password += charcters.charAt(Math.floor(Math.random() * charcters.length));
  }

  return password;
};

export const savePassword = async (newPassword: string) => {
  try {
    const passwordList: string[] = await getPasswordList();

    const newList = [...passwordList, newPassword];

    await setLocalStorageItem("passwords", JSON.stringify(newList));
  } catch (error) {
    console.log(error);
  }
};

export const getPasswordList = async (): Promise<string[]> => {
  const passwords = await getLocalStorageItem("passwords");
  const list = JSON.parse(passwords || "[]") as string[];

  return list;
};

export const removePasswordList = async () => {
  await removeLocalStorageItem("passwords");
};
