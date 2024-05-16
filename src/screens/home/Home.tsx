import * as Clipboard from "expo-clipboard";
import { View, Modal } from "react-native";
import { styles } from "./HomeStyle";
import AppTitle from "../../components/appTitle/AppTitle";
import AppImage from "../../components/appImage/AppImage";
import AppTextInput from "../../components/appTextInput/AppTextInput";
import AppButton from "../../components/appButton/AppButton";
import AppLink from "../../components/appLink/AppLink";

const image = require("../../../assets/pass.png");

import {
  generatePassword,
  savePassword,
} from "../../services/password/passwordService";
import { useState } from "react";
import React from "react";
import { AppModal } from "../../components/appModal/AppModal";
import { stylesModal } from "../../components/appModal/AppModalStyle";
import HistoryData from "../history/HistoryData";
import { storeData } from '../../utils/localStorage';

export default function Home({ route, navigation }) {
  const { userId } = route.params;
  const [password, setPassword] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);
  const [nomeApp, setNomeApp] = useState("");

  const handlePassword = async () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
    await savePassword(newPassword);
  };

  const copyPassword = async () => {
    await Clipboard.setStringAsync(password);
  };

  const saveNewPassword = () => {
    setVisibleModal(true);
  };

  const handleCreate = async () => {
    await HistoryData.addEntry(nomeApp, password, userId);
    storeData({password: password, nomeApp: nomeApp});
    alert("Senha salva!");
    setVisibleModal(false);
  };


  return (
    <View style={styles.container}>
      <View>
        <AppTitle text="gerador de senha" />
      </View>

      <View>
        <AppImage image={image} />
      </View>

      <Modal 
        visible={visibleModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisibleModal(false)}
      >
        <View style={stylesModal.background}>
          <AppModal
            password={password}
            nomeApp={nomeApp}
            setNomeApp={setNomeApp}
            handleCreate={handleCreate}
            handleCancel={() => setVisibleModal(false)}
          ></AppModal>
        </View>
      </Modal>
      <View style={styles.buttons}>
        <AppTextInput
          value={password}
          editable={false}
          placeholder="GERE SUA SENHA"
        />
        <AppButton action={handlePassword} text="gerar" />
        <AppButton action={saveNewPassword} text="salvar" />
        <AppButton action={copyPassword} text="copiar" />
        <AppLink 
          navigation={navigation} 
          route="History" 
          onPress={() => navigation.navigate('HistoryScreen', { userId })}
          text="Ver Senhas" 
        />
      </View>
    </View>
  );
}
