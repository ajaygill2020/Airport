import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Excellent flight!",
      rating: 5,
      body: "Would recommend again",
      key: "1",
    },
    {
      title: "Very bad flight!!",
      rating: 1,
      body: "Terrible service...",
      key: "2",
    },
    { title: "Good, but can be better", rating: 3, body: "N/A", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}> {item.title} </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
