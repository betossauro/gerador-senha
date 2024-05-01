import { Pressable, Text } from "react-native";
import { styles } from "./AppButtonStyle";
import React from "react";

interface AppButtonProps {
  text: string;
  action?: () => void;
}

export default function AppButton({ text, action }: AppButtonProps) {
  return (
    <Pressable onPress={action} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
