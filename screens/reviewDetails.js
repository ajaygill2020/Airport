import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <ImageBackground
      source={require("../assets/dtw.jpeg")}
      style={globalStyles.container}
    >
      <Card style={style.cardText}>
        <Text style={style.flight}>
          Flight ** {navigation.getParam("flight")} **
        </Text>
        <Text></Text>
        <Text style={style.text}>
          Date ** {navigation.getParam("today")} **
        </Text>
        <Text style={style.text}>Terminal {navigation.getParam("body")}</Text>
        <Text style={style.text}>Departing {navigation.getParam("time")}</Text>
        <Text style={style.text}>
          Destination {navigation.getParam("destination")}
        </Text>
        <Text style={style.text}>
          Duration {navigation.getParam("duration")}
        </Text>
        <Text style={style.text}>Cost {navigation.getParam("price")}</Text>
        <Text> </Text>
        <Text> </Text>

        <View style={style.rating}>
          <Image
            source={images.rating[rating]}
            style={{
              height: 120,
              width: 305,
              alignSelf: "center",
            }}
          />
        </View>
      </Card>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  rating: {
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 20,
    marginBottom: 1,
    marginTop: 1,
    borderTopWidth: 10,
    borderTopColor: "lightgreen",
  },
  flight: {
    fontSize: 25,
    alignSelf: "center",
    backgroundColor: "lightpink",
    color: "black",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 19,
    paddingHorizontal: 5,
  },
});
