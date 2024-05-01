import * as Clipboard from "expo-clipboard";
import { View } from "react-native";
import { styles } from "./HomeStyle";

const image = require("../../../assets/pass.png");

import AppTitle from "../../components/appTitle/AppTitle";
import AppImage from "../../components/appImage/AppImage";
import AppTextInput from "../../components/appTextInput/AppTextInput";
import AppButton from "../../components/appButton/AppButton";
import AppLink from "../../components/appLink/AppLink";

import {
  generatePassword,
  savePassword,
} from "../../services/password/passwordService";
import { useState } from "react";
import React from "react";

export default function Home({ navigation }) {
  const [password, setPassword] = useState("");

  const handlePassword = async () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
    await savePassword(newPassword);
  };

  const copyPassword = async () => {
    await Clipboard.setStringAsync(password);
  };

  return (
    <View style={styles.container}>
      <View>
        <AppTitle text="gerador de senha" />
      </View>

      <View>
        <AppImage image={image} />
      </View>

      <View style={styles.buttons}>
        <AppTextInput
          value={password}
          editable={false}
          placeholder="GERE SUA SENHA"
        />
        <AppButton action={handlePassword} text="gerar" />
        <AppButton action={copyPassword} text="copiar" />
        <AppLink navigation={navigation} route="History" text="Ver Senhas" />
      </View>
    </View>
  );
}
