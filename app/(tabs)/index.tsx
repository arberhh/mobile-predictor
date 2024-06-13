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

type ItemProps = {
  title: string;
  media_formats: { tinygif: { url: string } };
  content_description: string;
};

export default function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState<string>("cats");
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

  // Conditional rendering for loading and error states
  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={"large"} color="#000" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.center}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Search />
      <FlatList
        data={data.results}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 100,
    alignItems: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
