import { Pressable, Text } from "react-native";
import { styles } from "./AppButtonRedirectStyle";
import React from "react";
import { StackNavigationProp } from '@react-navigation/stack';

interface AppButtonProps {
  text: string;
  route: string;
  navigation: StackNavigationProp<any, any>;
  disabled: boolean;
}

export default function AppButtonSignin({ text, route, navigation, disabled }: AppButtonProps) {
  return (
    <Pressable onPress={() => navigation.navigate(route)} style={[styles.container, disabled ? styles.disabled : null]} disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}