import React from "react";
import { stylesModal } from "./AppModalStyle";
import { View, Text } from "react-native";
import AppTextInputModal from "../appTextInput/AppTextInputModal";
import AppButtonModal from "../appButton/AppButtonModal";
import AppTitleModal from "../appTitle/AppTitleModal";

export function AppModal({ handleCreate, handleCancel, password, nomeApp, setNomeApp }) {

  return (
    <View style={stylesModal.modalView}>
        <AppTitleModal text="CADASTRO DE SENHA"></AppTitleModal>

        <Text>Nome do aplicativo</Text>
        <AppTextInputModal value={nomeApp} editable={true} onChangeText={setNomeApp}/>

        <Text>Senha gerada</Text>
        <AppTextInputModal value={password} editable={false}/>

        <AppButtonModal action={handleCreate} text="criar" />
        <AppButtonModal action={handleCancel} text="cancelar" />
    </View>
  );
}