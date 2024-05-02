import { View, Text, Button } from "react-native";
import { styles } from "./SigninStyle";

import AppTitle from "../../components/appTitle/AppTitle";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import AppLink from "../../components/appLink/AppLink";

import React, { useState } from "react";
import AppTextFormPassword from "../../components/appTextForm/AppTextFormPassword";
import AppButtonSignin from "../../components/appButtonSignin/AppButtonRedirect";

export default function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isButtonDisabled = !email || !password;

  return (
    <View style={styles.container}>
      <View>
        <AppTitle text="sign in" />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          value={email} onChangeText={setEmail} placeholder="nome@email.com"
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Senha</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextFormPassword
          value={password}  onChangeText={setPassword} placeholder="Digite sua senha"
        />
      <AppLink navigation={navigation} route="Signup" text="Não possui conta? Crie agora." />
      <AppButtonSignin
        text="Entrar"
        navigation={navigation}
        route="Home"
        disabled={isButtonDisabled}
      />
      </View>
      <View style={styles.buttons}>
      </View>
    </View>
  );
}
