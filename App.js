import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
  Text,
} from "react-native";
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
        <View style={styles.titleContainer}>
          <Image
            source={require("./assets/pokeball.png")}
            style={styles.pokeball}
          />
          <Text style={styles.title}>Pokemon Cards</Text>
        </View>
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
  title: {
    marginTop: 16,
    fontSize: 36,
    // textDecorationLine: "underline",
    fontWeight: "bold",
    paddingHorizontal: 5,
    textAlign: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  pokeball: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
});
