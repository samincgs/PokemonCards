import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";

export default function Card({ name, image, type, hp, moves, weakness }) {
  const typeDetails = (type) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "☘️" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

  const { borderColor, emoji } = typeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.labelContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>
      <Image
        source={image}
        accessibilityLabel={`${name} pokemon`}
        style={styles.image}
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.moveContainer}>
        <Text style={styles.movesTitle}>Moves:</Text>
        <Text style={styles.moves}>{moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weakness}>
          <Text style={styles.weaknessTitle}>Weak To: </Text>
          {weakness.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    padding: 20,
    margin: 20,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 9,
      },
    }),
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "auto",
    height: 200,
    marginBottom: 16,
    resizeMode: "contain",
  },
  typeContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    marginTop: 10,
    paddingHorizontal: 12,
    // borderColor: "red",
    borderWidth: 4,
    borderRadius: 20,
  },
  typeEmoji: {
    fontSize: 30,
    paddingRight: 9,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  moveContainer: {
    marginBottom: 24,
    alignItems: "center",
  },
  movesTitle: {
    fontSize: 24,
    textDecorationLine: "underline",
    fontWeight: "bold",
    paddingBottom: 12,
  },
  moves: {
    fontSize: 17,
  },
  weaknessContainer: {
    marginBottom: 8,
    alignItems: "center",
  },
  weakness: {
    fontSize: 15,
    fontWeight: "bold",
  },
  weaknessTitle: {
    fontSize: 17,
    color: "red",
  },
});
