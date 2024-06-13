import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import useSearch from "@/hooks/useSearch";

export default function Search() {
  const { searchTerm, updateSearchTerm } = useSearch();
  const cleanSearchTerm = () => {
    updateSearchTerm("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={16} color="black" />
        <TextInput
          value={searchTerm}
          onChangeText={updateSearchTerm}
          placeholder="Search for GIFs"
          style={styles.input}
        />
        <Ionicons
          onPress={cleanSearchTerm}
          name="close"
          size={16}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
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
    marginHorizontal: 10,
    width: "80%",
  },
});
