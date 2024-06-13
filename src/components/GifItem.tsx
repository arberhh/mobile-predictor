import React from "react";
import { ImageBackground, StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { ThemedText } from "./ThemedText";

type GifItemProps = {
  gifUrl: string;
  title: string;
  subtitle: string;
};

export const GifItem: React.FC<GifItemProps> = ({
  gifUrl,
  title,
  subtitle,
}) => {
  const { width, height } = useWindowDimensions();
  return (
    <Image
      source={{ uri: gifUrl }}
      style={[styles.gifImage, { width: width - 15, height: height / 3 }]}
    >
      <ThemedText type="subtitle">{subtitle}</ThemedText>
    </Image>
  );
};

const styles = StyleSheet.create({
  gifItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gifImage: {
    justifyContent: "flex-end",
    paddingBottom: 10,
    paddingLeft: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
});
