import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Loginscreen from "./screens/loginscreen";
import { AppTabNavigator } from "./components/apptabnavigator";
import { AppDrawernavigator } from "./components/appDrawerNavigator";

export default function App() {
  return <Appcontainer />;
}
const switchNavigator = createSwitchNavigator({
  Loginscreen: { screen: Loginscreen },
  Drawer: { screen: AppDrawernavigator }
});
const Appcontainer = createAppContainer(switchNavigator);
