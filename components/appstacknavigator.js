import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import BookDonatescreen from "../screens/bookdonationscreen";
import ReceiverDetail from "../screens/receiverdetailscreen";
export const Stacknavig = createStackNavigator(
  {
    bookdonatelist: {
      screen: BookDonatescreen,
      navigationOptions: {
        headerShown: false
      }
    },
    receiverdetails: {
      screen: ReceiverDetail,
      navigationOptions: false
    }
  },
  { initialRouteName: "bookdonatelist" }
);
