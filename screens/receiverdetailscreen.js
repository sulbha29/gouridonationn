import React,{Component} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import { Icon,Card } from 'react-native-elements';
export default class ReceiverDetail extends Component{
    constructor(props){
        super(props);
        this.state={emailid:firebase.auth().currentUser.email,
        receiverid:this.props.navigation.getParam('details')['emailid'],
        requestid:this.props.navigation.getParam('details')['requestid'],
        bookname:this.props.navigation.getParam('details')['bookname'],
        reasontorequest:this.props.navigation.getParam('details')['reasontorequest'],
        receivername:'',
        receivercontact:'',
        receiveraddress:'',
        receiverrequestdocumentid:''
        }
    }
    getreceiverdet(){
        db.collection('user').where('emailid','==',this.state.receiverid).get().then(Snapshot=>{
            Snapshot.forEach(doc=>{this.setState({receivername:doc.data().firstname,
            receivercontact:doc.data().mobno,
        receiveraddress:doc.data().address
    })
})
        })
        db.collection('requestbooks').where('requestid','==',this.state.requestid).get()
        .then(snapshot=>{
          snapshot.forEach(doc => {
            this.setState({receiverrequestdocumentid:doc.id})
         })
      })}
    
    updatebookstate=()=>{
        db.collection('alldonations').add({
            bookname:this.state.bookname,
            requestid:this.state.requestid,
            requestedby:this.state.receivername,
            donorid:this.state.emailid,
            requeststatus:"bookdonorinterested"
        })
    }
    componentDidMount(){
        this.getreceiverdet();
      }
      render(){
        return(
          <View style={styles.container}>
            <View style={{flex:0.1}}>
              <Header
                leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                centerComponent={{ text:"Donate Books", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
                backgroundColor = "#eaf8fe"
              />
            </View>
            <View>
             <Card
             title={"Book Information"}
             titleStyle= {{fontSize : 20}}
           >
        
            <Card >
            <Text style={{fontWeight:'bold'}}>Name : {this.state.bookname}</Text>
          </Card>
          <Card>
            <Text style={{fontWeight:'bold'}}>Reason : {this.state.reasontorequest}</Text>
          </Card>
    </Card>
      </View>
      <View style={{flex:0.3}}>
        <Card
          title={"Reciever Information"}
          titleStyle= {{fontSize : 20}}
          >
          <Card>
            <Text style={{fontWeight:'bold'}}>Name: {this.state.receivername}</Text>
          </Card>
          <Card>
            <Text style={{fontWeight:'bold'}}>Contact: {this.state.receivercontact}</Text>
          </Card>
          <Card>
            <Text style={{fontWeight:'bold'}}>Address: {this.state.receiveraddress}</Text>
          </Card>
        </Card>
      </View>
      <View style={styles.buttonContainer}>
        {
          this.state.receiverid !== this.state.emailid
          ?(
            <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                  this.updatebookstate()
                  this.props.navigation.navigate('mydonations')
                }}>
              <Text>I want to Donate</Text>
            </TouchableOpacity>
          )
          : null
        }
      </View>
      
</View>
        )
    

    }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    buttonContainer : {
      flex:0.3,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:200,
      height:50,
      justifyContent:'center',
      alignItems : 'center',
      borderRadius: 10,
      backgroundColor: 'orange',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       },
      elevation : 16
    }
  })