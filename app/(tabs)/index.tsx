import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GifItem, Search } from "@/components";
import { useSearchGifs } from "@/hooks/useQuery";
import useSearch from "@/hooks/useSearch";

type ItemProps = {
  title: string;
  media_formats: { tinygif: { url: string } };
  content_description: string;
};

export default function HomeScreen() {
  const { searchTerm } = useSearch();
  const { data, isLoading, isError, error } = useSearchGifs(searchTerm);

  const renderItem = ({ item }: { item: ItemProps }) => {
    return (
      <GifItem
        gifUrl={item.media_formats.tinygif.url}
        title={item.title}
        subtitle={item.content_description}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search />
      {isError || isLoading ? (
        <View style={styles.center}>
          {isError && <Text>Error: {error.message}</Text>}
          {isLoading && <ActivityIndicator size={"large"} color="#000" />}
        </View>
      ) : (
        <FlatList
          data={data.results || []}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
