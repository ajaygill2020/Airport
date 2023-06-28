import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View style={style.rating}>
          <Text>Flight Rating: </Text>
          <Image
            source={images.rating[rating]}
            style={{
              height: 45,
              width: 215,
            }}
          />
        </View>
        {/* <Text>{navigation.getParam("rating")}</Text> */}
      </Card>
    </View>
  );
}

const style = StyleSheet.create({
  rating: {
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 10,
    borderTopColor: "lightgreen",
  },
});
