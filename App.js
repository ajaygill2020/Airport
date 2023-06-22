import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  View,
  Alert,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/appTodo";

export default function App() {
  // Initial log statement
  console.log("APSG -- app executed.");

  // Constants
  const [airDTW] = useState("DTW  AIRPORT");

  const [checkList, setCheckList] = useState([
    { text: "Get boarding pass by checking at kiosk", key: "1" },
    { text: "Check in your baggage", key: "2" },
    { text: "Get into line for security checkpoint", key: "3" },
    { text: "Go to assigned gate in terminal", key: "4" },
  ]);

  const todoPressHandler = (key) => {
    setCheckList((previousTodos) => {
      return previousTodos.filter((checkList) => checkList.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setCheckList((previousTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...previousTodos,
        ];
      });
    } else {
      Alert.alert("Your new checklist task must be at least 4 characters long");
    }
  };

  const [flightsDepart] = useState([
    { name: "1010", key: "1" },
    { name: "1025", key: "2" },
    { name: "1050", key: "3" },
    { name: "1075", key: "4" },
    { name: "2010", key: "5" },
    { name: "2025", key: "6" },
    { name: "2050", key: "7" },
    { name: "2075", key: "8" },
    { name: "3010", key: "9" },
    { name: "3025", key: "10" },
    { name: "3050", key: "11" },
    { name: "3075", key: "12" },
    { name: "4010", key: "13" },
    { name: "4025", key: "14" },
    { name: "4050", key: "15" },
    { name: "4075", key: "16" },
  ]);
  const myFlightNum = () => {
    console.log("Adding four digit flight number");
  };
  const myName = () => {
    console.log("Adding name input");
  };
  const pressOption = () => {
    console.log("Clicked on an option");
  };
  const pressHandler = (item) => {
    console.log(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>WELCOME TO {airDTW}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="OPTION 1:  CHECK-IN  FLIGHT" onPress={pressOption} />
        <Button title="OPTION 2:  CHECK-IN  BAGGAGE" onPress={pressOption} />
        <Button
          title="OPTION 3:  GET  IN  LINE  FOR  SECURITY"
          onPress={pressOption}
        />
        <Button
          title="OPTION 4:  VIEW  FLIGHT  INFORMATION"
          onPress={pressOption}
        />
        <Button title="OPTION 5:  HELP" onPress={pressOption} />
      </View>
      <View>
        <Text>ENTER FULL NAME : </Text>
        <TextInput
          style={styles.input}
          placeholder="e.g.  John  Doe "
          onChangeText={() => myName()}
        />

        <Text>ENTER FOUR DIGIT FLIGHT NUMBER : </Text>
        <TextInput
          style={styles.input}
          placeholder=" 5010 "
          keyboardType="numeric"
          onChangeText={() => myFlightNum()}
        />
      </View>
      <FlatList
        data={flightsDepart}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={checkList}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "white",
    padding: 15,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "green",
    padding: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 10,
    padding: 30,
    backgroundColor: "white",
    fontSize: 50,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

// we are important components like stylesheet, text, view
// App is a function component and we are returning text b/c we imported it
// we are returning a jsx expression and inside view we have text component

// EXPO NOTES
// Press CMD + D = opens up developer page in Xcode
