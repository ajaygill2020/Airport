import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "lightblue",
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 25,
    justifyContent: "center",
    alignContent: "center",
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
