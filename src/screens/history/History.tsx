import { View, Text } from "react-native";
import { styles } from "./HistoryStyle";
import AppButton from "../../components/appButton/AppButton";
import AppTitle from "../../components/appTitle/AppTitle";
import AppListItem from "../../components/appList/appListItem/AppListItem";

import {
  getPasswordList,
  removePasswordList,
} from "../../services/password/passwordService";
import { useEffect, useState } from "react";
import React from "react";

export default function History() {
  const [passwords, setPasswords] = useState<string[]>([]);

  const handlePasswordList = async () => {
    const result = await getPasswordList();
    setPasswords(result || []);
  };

  const handleRemovePasswordList = async () => {
    await removePasswordList();
    setPasswords([]);
  };

  useEffect(() => {
    handlePasswordList();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <AppTitle text="histórico de senhas" />
      </View>

      <View>
        {!passwords.length && <Text>Não foram encontradas senhas</Text>}
        {passwords.map((el, idx) => {
          return <AppListItem text={el} key={idx} />;
        })}
      </View>

      <View>
        <AppButton action={handleRemovePasswordList} text="limpar" />
      </View>
    </View>
  );
}
