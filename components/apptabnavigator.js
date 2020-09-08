import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BookRequestscreen from "../screens/bookrequestscreen";
import BookDonatescreen from "../screens/bookdonationscreen";
import { Stacknavig } from "./appstacknavigator";
export const AppTabNavigator = createBottomTabNavigator({
  donatebook: {
    screen: Stacknavig,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/request-list.png")}
          style={{ width: 50, height: 50 }}
        />
      ),
      tabBarLabel: "donate books"
    }
  },
  bookrequest: {
    screen: BookRequestscreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/request-book.png")}
          style={{ width: 50, height: 50 }}
        />
      ),
      tabBarLabel: "book request"
    }
  }
});
