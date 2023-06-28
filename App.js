import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/homeStack";
import "react-native-gesture-handler";

export default function App() {
  return <Navigator />;
}
