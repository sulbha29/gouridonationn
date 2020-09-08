import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./apptabnavigator";
import CustomSidebar from "./customsidebar";
import Settingscreen from "../screens/settingscreen";
import Mydonationscreen from "../screens/mydonationscreen";
export const AppDrawernavigator = createDrawerNavigator(
  {
    home: {
      screen: AppTabNavigator
    },
    mydonations: {
      screen: Mydonationscreen
    },
    settings: {
      screen: Settingscreen
    }
  },
  {
    contentComponent: CustomSidebar
  },
  {
    initialRouteName: "home"
  }
);
