import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={16} color="black" />
        <TextInput placeholder="Search for GIFs" style={styles.input} />
        <Ionicons name="close" size={16} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
  },
});
