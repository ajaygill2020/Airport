import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  const todayDate = new Date().getDate();
  const todayMonth = new Date().getMonth();
  const todayYear = new Date().getFullYear();
  const today = todayMonth + "-" + todayDate + "-" + todayYear;

  const [reviews, setReviews] = useState([
    {
      title: "DL 1075 -- 8:10am",
      flight: "DL 1075",
      rating: 1, // Delta
      body: "** MCNAMARA **",
      time: "** 8:10am EST **",
      destination: "**  ORD  **",
      duration: "**  0h 43m  **",
      price: "**  $102.00  **",
      today: today,
      key: "1",
    },
    {
      title: "UA 6265 -- 8:48am",
      flight: "UA 6265",
      rating: 2, // United
      body: "** EVANS **",
      time: "** 8:48am EST **",
      destination: "**  JFK  **",
      duration: "**  1h 58m  **",
      price: "**  $179.00  **",
      today: today,
      key: "2",
    },
    {
      title: "AS 474 -- 9:15am",
      flight: "AS 474",
      rating: 3, // Alaska
      body: "** EVANS **",
      time: "** 9:15am EST **",
      destination: "**  SEA  **",
      duration: "**  4h 57m  **",
      price: "**  $179.00  **",
      today: today,
      key: "3",
    },
    {
      title: "NK 402 -- 9:55am",
      flight: "NK 402",
      rating: 4, // Spirit
      body: "** EVANS **",
      time: "** 9:55am EST **",
      destination: "**  LAX  **",
      duration: "**  4h 54M  **",
      price: "**  $89.00  **",
      today: today,
      key: "4",
    },
    {
      title: "AA 1106 -- 11:05am",
      flight: "AA 1106",
      rating: 5, // American
      body: "** EVANS **",
      time: "** 11:05 EST **",
      destination: "**  DFW  **",
      duration: "**  2h 53m  **",
      price: "**  $279.00  **",
      today: today,
      key: "5",
    },
    {
      title: "DL 1248 -- 12:11pm",
      flight: "DL 1248",
      rating: 1, // Delta
      body: "** MCNAMARA **",
      time: "** 12:11pm EST **",
      destination: "**  MIA  **",
      duration: "**  3h 24m  **",
      price: "**  $102.00  **",
      today: today,
      key: "6",
    },
    {
      title: "AC 7569 -- 12:29pm",
      flight: "AC 7569",
      rating: 6, // Canada
      body: "** EVANS **",
      time: "** 12:29pm EST **",
      destination: "**  YYZ  **",
      duration: "**  1h 15m  **",
      price: "**  $169.00  **",
      today: today,
      key: "7",
    },
    {
      title: "AF 378 -- 2:09pm",
      flight: "AF 378",
      rating: 7, // France
      body: "** MCNAMARA **",
      time: "** 2:09pm **",
      destination: "**  CDG  **",
      duration: "**  7h 48m  **",
      price: "**  $1099.00  **",
      today: today,
      key: "8",
    },
    {
      title: "DL 2586 -- 2:17pm",
      flight: "DL 2586",
      rating: 1, // Delta
      body: "** MCNAMARA **",
      time: "** 2:17pm EST **",
      destination: "**  ATL  **",
      duration: "**  1h 59m  **",
      price: "**  $227.00  **",
      today: today,
      key: "9",
    },
    {
      title: "UA 1587 -- 3:32pm",
      flight: "UA 1587",
      rating: 2, // United
      body: "** EVANS **",
      time: "** 3:32pm EST **",
      destination: "**  EWR  **",
      duration: "**  1h 46m  **",
      price: "**  $217.00  **",
      today: today,
      key: "10",
    },
    {
      title: "NK 244 -- 6:18pm",
      flight: "NK 244",
      rating: 4, // Spirit
      body: "** EVANS **",
      time: "** 6:18pm EST **",
      destination: "**  MYR  **",
      duration: "**  1h 53m **",
      price: "**  $119.00  **",
      today: today,
      key: "11",
    },
    {
      title: "DL 1089 -- 7:07pm",
      flight: "DL 1089",
      rating: 1, // Delta
      body: "** MCNAMARA **",
      time: "** 7:07pm EST **",
      destination: "**  ORD  **",
      duration: "**  0h 49m  **",
      price: "**  $102.00  **",
      today: today,
      key: "12",
    },
    {
      title: "UA 7781 -- 7:47pm",
      flight: "UA 7781",
      rating: 2, // United
      body: "** EVANS **",
      time: "** 7:47pm EST **",
      destination: "**  JFK  **",
      duration: "**  1h 48m  **",
      price: "**  $179.00  **",
      today: today,
      key: "13",
    },
    {
      title: "AS 841 -- 8:30pm",
      flight: "AS 841",
      rating: 3, // Alaska
      body: "** EVANS **",
      time: "** 8:30pm EST **",
      destination: "**  SEA  **",
      duration: "**  4h 55m  **",
      price: "**  $156.00  **",
      today: today,
      key: "14",
    },
    {
      title: "NK 531 -- 8:35pm",
      flight: "NK 531",
      rating: 4, // Spirit
      body: "** EVANS **",
      time: "** 8:35pm EST **",
      destination: "**  LAX  **",
      duration: "**  4h 44M  **",
      price: "**  $89.00  **",
      today: today,
      key: "15",
    },
    {
      title: "AA 3952 -- 9:48pm",
      flight: "AA 3952",
      rating: 5, // American
      body: "** EVANS **",
      time: "** 9:48pm EST **",
      destination: "**  DFW  **",
      duration: "**  3h 03m  **",
      price: "**  $279.00  **",
      today: today,
      key: "16",
    },
    {
      title: "DL 4478 -- 10:00pm",
      flight: "DL 4478",
      rating: 1, // Delta
      body: "** MCNAMARA **",
      time: "** 10:00pm EST **",
      destination: "**  MIA  **",
      duration: "**  3h 19m  **",
      price: "**  $102.00  **",
      today: today,
      key: "17",
    },
    {
      title: "AC 1194 -- 11:45pm",
      flight: "AC 1194",
      rating: 6, // Canada
      body: "** EVANS **",
      time: "** 11:45pm EST **",
      destination: "**  YYZ  **",
      duration: "**  1h 28m  **",
      price: "**  $159.00  **",
      today: today,
      key: "18",
    },
  ]);

  return (
    <ImageBackground
      source={require("../assets/dtw.jpeg")}
      style={globalStyles.container}
    >
      <Modal visible={modalOpen} animationType="slide">
        <ImageBackground
          source={require("../assets/dtw.jpeg")}
          style={globalStyles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name="close"
                size={24}
                style={{ ...styles.modalToggle, ...styles.modalClose }}
                onPress={() => setModalOpen(false)}
              />
              <ReviewForm />
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 10,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  modalClose: {
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 10,
  },
  modalContent: {
    flex: 1,
  },
});
