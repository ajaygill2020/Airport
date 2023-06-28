import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  const openMenu = () => {
    // navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/dtw-sign.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>DTW Airport Flights</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "teal",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
});
