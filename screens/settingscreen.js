import React from 'react'
import {View,Text,StyleSheet,TextInput, TouchableOpacity, Alert} from 'react-native'
import {Component} from 'react'
import db from '../config.js'
import firebase from 'firebase'
import Myheader from '../components/myheader'
export default class Settingscreen extends Component{
    constructor(){
        super();
        this.state=
        {emailid:'',
         password:'',
        firstname: '',
         lastname:'',
          address:'', mobno:'',
           docid:''}
   }
    getDetails=()=>{var email=firebase.auth().currentUser.email
    
    db.collection('user').where('emailid', '==', email).get().then(snapshot=>{
        snapshot.forEach(doc=>{
            var data=doc.data()
            this.setState({
                emailid:data.emailid, firstname:data.firstname, 
                lastname:data.lastname,address:data.address, mobno:data.mobno,
                docid:doc.id
            })
        })
    })
    }
    updateUserdetails=()=>{
        db.collection('user').doc(this.state.docid).update({
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        address:this.state.address,
        mobno:this.state.mobno
    })
Alert.alert("file updated successfully")}
componentDidMount(){
    this.getDetails();
}
    render(){
        return(
            <View>
                <Myheader title="settings" navigation={this.props.navigation}/>
        
                       <TextInput style={styles.formTextInput}placeholder={"firstname"}
                       maxLength={10}
                        onChangeText={(text)=>{this.setState({firstname:text})}}
                        value={this.state.firstname}/>
                        
                        <TextInput style={styles.formTextInput}
                        placeholder={"lastname"}
                        maxLength={10}
                        onChangeText={(text)=>{this.setState({lastname:text})}}
                        value={this.state.lastname}/>
                    
                    <TextInput style={styles.formTextInput}
                        placeholder={"mobno"}
                        maxLength={10}
                        keyboardType={'numeric'}
                        onChangeText={(text)=>{this.setState({mobno:text})}}
                        value={this.state.mobno}/>

<TextInput style={styles.formTextInput}
                        placeholder={"address"}
                        multiline={true}
                        onChangeText={(text)=>{this.setState({address:text})}}
                        value={this.state.address}/>
                    <TouchableOpacity style={styles.button} 
                    onPress={()=>{this.updateUserdetails()}}>
                        <Text>save option</Text></TouchableOpacity>
                       </View> 

        )
    }
}
const styles = StyleSheet.create(
    { container : { flex:1, alignItems: 'center', justifyContent: 'center' },
     formContainer:{ flex:1, width:'100%', alignItems: 'center' }, 
     formTextInput:{ width:"75%", height:35, alignSelf:'center',
      borderColor:'#ffab91', borderRadius:10, borderWidth:1, 
      marginTop:20, padding:10, }, button:{ width:"75%", height:50,
       justifyContent:'center', alignItems:'center', borderRadius:10,
        backgroundColor:"#ff5722", shadowColor: "#000",
         shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, 
         shadowRadius: 10.32, elevation: 16, marginTop:20 }, 
buttonText:{ fontSize:25, fontWeight:"bold", color:"#fff" } })