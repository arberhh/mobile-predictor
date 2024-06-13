import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";

type GifItemProps = {
  gifUrl: string;
};

export function GifItem({ gifUrl }: GifItemProps) {
  const { width, height } = useWindowDimensions();
  return (
    <Image
      source={{ uri: gifUrl }}
      style={[styles.gifImage, { width: width - 15, height: height / 3 }]}
    />
  );
}

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
