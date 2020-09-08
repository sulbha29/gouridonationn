import React, { Component } from "react";
import { Header } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
const Myheader = props => {
  return (
    <Header
      centerComponent={{
        text: props.title,
        style: {
          color: "red",
          fontSize: 20,
          fontWeight: "bold"
        }
      }}
      backgroundColor="black"
    />
  );
};
export default Myheader;
