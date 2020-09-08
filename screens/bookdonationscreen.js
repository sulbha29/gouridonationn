import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import db from "../config";
import firebase from 'firebase'
import Myheader from "../components/myheader";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

export default class BookDonatescreen extends Component {
  constructor() {
    super();
    this.state = { 
      
      emailid:firebase.auth().currentUser.email,
      requestedbooklist: [] };
    this.requestref = null;
  }
  getrequestedbooklist = () => {
    this.requestref = db.collection("requestbooks").onSnapshot(snapshot => {
      var booklist = snapshot.docs.map(document => document.data());
      this.setState({
        requestedbooklist: booklist
      });
    });
  };
  componentDidMount() {
    this.getrequestedbooklist();
  }
  componentWillUnmount() {
    this.requestref();
  }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.bookname}
        subtitle={item.reasontorequest}
        titleStyle={{ color: "yellow", fontWeight: "bold" }}
        rightElement={
          <TouchableOpacity
           style={styles.button}
           onPress={()=>{
             this.props.navigation.navigate("ReceiverDetail",{"details":item})
           }}>
  
            <Text>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Myheader title="donate books" />
        <View style={{ flex: 1 }}>
          {this.state.requestedbooklist.length == 0 ? (
            <View style={styles.subContainer}>
              <Text>list of all requested books</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedbooklist}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 }
  }
});
