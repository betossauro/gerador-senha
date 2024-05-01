import { Text } from "react-native";
import { styles } from "./AppLinkStyle";
import React from "react";

interface AppLinkProps {
  text: string;
  route: string;
  navigation: any;
}

export default function AppLink({ text, route, navigation }: AppLinkProps) {
  const changeRoute = () => {
    navigation.navigate(route);
  };

  return (
    <Text onPress={changeRoute} style={styles.link}>
      {text}
    </Text>
  );
}
