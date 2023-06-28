import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "About DTW Airport",
      headerStyle: {
        backgroundColor: "#dcd",
      },
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "pink", height: 50 },
  },
});

export default createAppContainer(AboutStack);
