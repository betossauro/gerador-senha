import { Pressable, Text } from "react-native";
import { styles } from "./AppButtonRedirectStyle";
import React from "react";
import { StackNavigationProp } from '@react-navigation/stack';

interface AppButtonProps {
  text: string;
  onPress?: () => void; 
  disabled: boolean;
  navigation?: any; 
  route?: string; 
}

export default function AppButtonSignin({ text, onPress, disabled }: AppButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.container, disabled ? styles.disabled : null]} disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
