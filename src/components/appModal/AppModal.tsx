import React from "react";
import { useState } from "react";
import { stylesModal } from "./AppModalStyle";
import { View, Pressable, Text, StyleSheet, TextInput } from "react-native";
import AppTitle from "../../components/appTitle/AppTitle";
import AppTextInputModal from "../appTextInput/AppTextInputModal";
import AppButtonModal from "../appButton/AppButtonModal";

export function AppModal({ handleCreate, handleCancel, password, nomeApp, setNomeApp }) {

  return (
    <View style={stylesModal.modalView}>
        <AppTitle text="CADASTRO DE SENHA"></AppTitle>

        <Text>Nome do aplicativo</Text>
        <AppTextInputModal value={nomeApp} editable={true} onChangeText={setNomeApp}/>

        <Text>Senha gerada</Text>
        <AppTextInputModal value={password} editable={false}/>

        <AppButtonModal action={handleCreate} text="criar" />
        <AppButtonModal action={handleCancel} text="cancelar" />
    </View>
  );
}