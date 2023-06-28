import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#ffffe0",
  },
  titleText: {
    fontSize: 25,
    color: "black",
    alignSelf: "flex-end",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 4,
    borderColor: "midnightblue",
    padding: 16,
    fontSize: 12,
    borderRadius: 3,
  },
});

export const images = {
  rating: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
    6: require("../assets/rating-6.png"),
    7: require("../assets/rating-7.png"),
  },
};
