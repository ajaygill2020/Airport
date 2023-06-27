import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Welcome to DTW Airport",
      headerStyle: {
        backgroundColor: "#dcd",
      },
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Reviews from Passengers",
      headerStyle: {
        backgroundColor: "#bba",
      },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "pink", height: 50 },
  },
});

export default createAppContainer(HomeStack);
