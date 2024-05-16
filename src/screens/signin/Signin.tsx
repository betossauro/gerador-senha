import { View, Text, Button, Alert } from "react-native";
import { styles } from "./SigninStyle";

import AppTitle from "../../components/appTitle/AppTitle";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import AppLink from "../../components/appLink/AppLink";

import React, { useState } from "react";
import AppTextFormPassword from "../../components/appTextForm/AppTextFormPassword";
import AppButtonSignin from "../../components/appButtonSignin/AppButtonRedirect";
import { setLocalStorageItem } from "../../utils/localStorage";
import axios from 'axios';

export default function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:3000/api/signin', {
        email,
        password,
      });
      const { userId } = response.data;
      navigation.navigate('Home', { userId });
    } catch (error) {
      Alert.alert('Erro', 'E-mail ou senha incorretos');
    }
  };

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
        onPress={() => handleSignin(email, password)}
        disabled={isButtonDisabled}
      />
      </View>
      <View style={styles.buttons}>
      </View>
    </View>
  );
}
