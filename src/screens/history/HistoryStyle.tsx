import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  passwords: {
    flex: 1,
    flexDirection: "row",
    gap: 80,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderWidth: 2, 
    borderColor: '#000', 
    borderRadius: 16, 
    marginBottom: 16
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    height: 32,
    width: 100
  },
  textPassword: {
    fontSize: 16,
    height: 20,
    width: 100
  },
});
