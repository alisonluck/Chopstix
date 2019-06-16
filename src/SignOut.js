import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    SafeAreaView,
    View,
    TouchableHighlight,
    TextInput,
    Platform,
    TouchableOpacity,
    ScrollView,

  } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Separator from './vertical-separator';
import Icon from 'react-native-vector-icons/Ionicons';
export default class SignOut extends Component<Props> {

  state = {
    text: '',
    password: ''
  }
  static navigationOptions = ({ navigation }) => ({
        headerLeft: <TouchableOpacity onPress={()=> {navigation.goBack()}}><Icon name="ios-arrow-back" size={25} color="red" style={{paddingLeft: 10}}/></TouchableOpacity>,
        headerTitle: `Account`,
        headerTitleStyle: {
              fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
             color: "#ca2545",
              fontWeight:'normal',
              fontSize: 27,
              flex: 1,
              textAlign: 'center',
              marginLeft:-20,
          }
    });
  render() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.container}>
          <Text style={styles.header}>Hello,Max!</Text>
          <View style={styles.sub_container}>
             
              <TouchableHighlight onPress={()=> this.props.navigation.goBack()} style={{borderBottomWidth:1,marginTop:10,borderRadius:10,padding:6,width:'95%',borderBottomColor:'lightgray',alignItems:'flex-start',justifyContent:'center',backgroundColor:'#fbfbfb'}}>
                <Text style={styles.normalButton}>Personal Information</Text>
              </TouchableHighlight>
              
              <TouchableHighlight onPress={()=> this.props.navigation.goBack()} style={{borderBottomWidth:1,marginTop:10,borderRadius:10,padding:6,width:'95%',borderBottomColor:'lightgray',alignItems:'flex-start',justifyContent:'center',backgroundColor:'#fbfbfb'}}>
                <Text style={styles.normalButton}>Past Orders</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=> this.props.navigation.goBack()} style={{borderBottomWidth:1,marginTop:10,borderRadius:10,padding:6,width:'95%',borderBottomColor:'lightgray',alignItems:'flex-start',justifyContent:'center',backgroundColor:'#fbfbfb'}}>
                <Text style={styles.normalButton}>Payment Methods</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=> this.props.navigation.goBack()} style={{borderBottomWidth:1,marginTop:10,borderRadius:10,padding:6,width:'95%',borderBottomColor:'lightgray',alignItems:'flex-start',justifyContent:'center',backgroundColor:'#fbfbfb'}}>
                <Text style={styles.normalButton}>Saved Addresses</Text>
              </TouchableHighlight>
              
               <TouchableHighlight onPress={()=> this.props.navigation.goBack()} style={{borderBottomWidth:1,marginTop:10,borderRadius:10,padding:6,width:'95%',borderBottomColor:'lightgray',alignItems:'flex-start',justifyContent:'center',backgroundColor:'#fbfbfb'}}>
                <Text style={styles.normalButton}>Customer Support</Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=> this.props.navigation.goBack()} style={{borderBottomWidth:1,marginTop:10,borderRadius:10,padding:6,width:'95%',borderBottomColor:'lightgray',alignItems:'flex-start',justifyContent:'center',backgroundColor:'#fbfbfb'}}>
                <Text style={styles.normalButton}>Notification Settings</Text>
              </TouchableHighlight>
             
            </View>
             <View style={styles.singButtonContainer}>
                <TouchableHighlight onPress={()=> this.props.navigation.goBack()} style={styles.singButton}>
                  <Text style={styles.signButton}>Sign Out</Text>
                </TouchableHighlight>
            </View>
           
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    height: '90%',
    backgroundColor: 'white',
    justifyContent:'flex-start',
    alignItems:'center',
   
  },
  sub_container: {
    flex:1,
    width: '90%',
    height:'86%',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: '#fbfbfb',
    borderRadius:10,
    marginTop:-10,
    borderColor:'gray',
    borderWidth:1   
  },
  header:{
    width:'100%',
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    height:50,
    color:'#ca2545',
    fontSize:22,
    textAlign:'center',
    marginTop:15,
  },
  botoneraCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop:10,
    paddingLeft: 10,
    paddingRight: 10,
    
  },
  button: {
    width: '45%',
    height: 55,
    backgroundColor: "white",
    borderColor:'red',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    borderColor:'red',
    borderWidth:1
  },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 20,
    color: 'red',
    borderColor:'red'
  },
  signButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 27,
    color: 'red',
    borderColor:'red'
  },
  normalButton: {
    
    fontSize: 20,
   
    color:'#949498',
    borderColor:'gray',
    padding: 6,
    borderRadius:10
  },
  buttonForgot:{
    width: '45%',
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    marginLeft: 5,    
    borderColor:'red',
    borderWidth:1
  },
  singButtonContainer: {
   flex: 1, 
    marginTop:15,
    width: '100%',
    alignItems: 'center',
  },
  singButton:{
    width: '90%',
    height: 55,
    backgroundColor: "white",
    borderWidth:1,
    borderRadius: 8,
    borderColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  txtInput:{
    fontSize: 19,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: '#c52323',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    height: 50,
    borderColor: 'red',
    marginTop:5,
    padding: 6,
  }
});
