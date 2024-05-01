import { Image, ImageSourcePropType } from "react-native";
import { styles } from "./AppImageStyle";
import React from "react";

interface AppImageProps {
  image: ImageSourcePropType;
}

export default function AppImage({ image }: AppImageProps) {
  return <Image style={styles.image} source={image} />;
}
