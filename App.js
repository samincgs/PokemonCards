import { StyleSheet, ScrollView, SafeAreaView, Platform } from "react-native";
import Card from "./components/Card.js";

import {
  charmanderData,
  pikachuData,
  squirtleData,
  bulbasaurData,
} from "./data.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card {...charmanderData} />
        <Card {...squirtleData} />
        <Card {...bulbasaurData} />
        <Card {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    ...Platform.select({
      android: {
        paddingTop: 25,
      },
    }),
  },
});
