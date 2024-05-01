import { Text } from "react-native";
import { styles } from "./AppListItemStyle";
import React from "react";

interface AppListItemProps {
  text: string;
}

export default function AppListItem({ text }: AppListItemProps) {
  return <Text style={styles.item}>{text}</Text>;
}
