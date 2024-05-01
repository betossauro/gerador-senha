import { View, Text, Button } from "react-native";
import { styles } from "./SignupStyle";

import AppTitle from "../../components/appTitle/AppTitle";
import AppTextForm from "../../components/appTextForm/AppTextForm";
import AppLink from "../../components/appLink/AppLink";

import AppTextFormPassword from "../../components/appTextForm/AppTextFormPassword";
import AppButtonSignin from "../../components/appButtonSignin/AppButtonRedirect";
import React from "react";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <AppTitle text="sign up" />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Nome</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          placeholder="Digite seu nome"
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextForm
          placeholder="nome@email.com"
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Senha</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextFormPassword
          placeholder="Digite sua senha"
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Confirme Senha</Text>
      </View>
      <View style={styles.buttons}>
        <AppTextFormPassword
          placeholder="Confirme sua senha"
        />
      </View>
        <AppButtonSignin text="Registrar" navigation={navigation} route="Signin" ></AppButtonSignin>
      <View style={styles.buttons}>
      </View>
    </View>
  );
}
