import { TextInput } from "react-native";
import { styles } from "./AppTextInputModalStyle";
import React from "react";

interface AppTextInputProps {
  value?: string;
  placeholder?: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
}

export default function AppTextInput({
  placeholder,
  value,
  editable = true,
  onChangeText
}: AppTextInputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      editable={editable}
      placeholderTextColor="white"
      style={styles.input}
      onChangeText={onChangeText}
    />
  );
}
