import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Home</Text>
      <Text style={styles.boxTwo}>Flights</Text>
      <Text style={styles.boxThree}>Help</Text>
      <Text style={styles.boxFour}>Exit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#dde",
  },
  boxOne: {
    padding: 30,
    backgroundColor: "gold",
  },
  boxTwo: {
    padding: 30,
    backgroundColor: "violet",
  },
  boxThree: {
    padding: 30,
    backgroundColor: "skyblue",
  },
  boxFour: {
    padding: 30,
    backgroundColor: "pink",
  },
});
