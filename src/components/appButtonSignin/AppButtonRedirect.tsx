import { Pressable, Text } from "react-native";
import { styles } from "./AppButtonRedirectStyle";
import React from "react";

interface AppButtonProps {
  text: string;
  route: string;
  navigation: any;
}

export default function AppButtonSignin({ text, route, navigation }: AppButtonProps) {
  return (
    <Pressable onPress={() => navigation.navigate(route)} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}