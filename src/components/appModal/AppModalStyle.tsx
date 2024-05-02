import { StyleSheet } from "react-native";

export const stylesModal = StyleSheet.create({
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 45,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    background: {
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
  });