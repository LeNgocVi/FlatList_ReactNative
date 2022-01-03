import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlatLists from "./FlatList";
export default function App() {
  return (
    <View style={styles.container}>
      <FlatLists />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
