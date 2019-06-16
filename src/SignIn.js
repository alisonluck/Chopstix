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
    ScrollView

  } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Separator from './vertical-separator';
import Icon from 'react-native-vector-icons/Ionicons';
export default class SignIn extends Component<Props> {

  state = {
    text: '',
    password: ''
  }
  static navigationOptions = ({ navigation }) => ({
        headerLeft: <TouchableOpacity onPress={()=> {navigation.goBack()}}><Icon name="ios-arrow-back" size={25} color="red" style={{paddingLeft: 10}}/></TouchableOpacity>,
        headerTitle: `Sign In`,
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
      <View style={{flex:1,alignItems:'center',backgroundColor:'white',justifyContent:'flex-start',marginTop:20}}>
        <View style={styles.container}>
            <View style={{height:50,borderBottomWidth:0.7,borderBottomColor:'gray',width:'90%',alignItems:'center'}}>
               <TextInput
                  style={styles.txtInput}
                  placeholder="Email Address"
                  placeholderTextColor="gray"
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  maxLength={30}
                />
            </View>
            <View style={{height:50,borderBottomWidth:0.5,borderBottomColor:'gray',width:'90%',alignItems:'center'}}>
            
              <TextInput
                style={styles.txtInput}
                placeholder="********:"
                placeholderTextColor="gray"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}
                maxLength={30}
              />
            </View>
             <View style={styles.singButtonContainer}>
                <TouchableHighlight onPress={()=> this.props.navigation.navigate('RestaurantDetails', {
                    restName:this.props.navigation.state.params.restName,
                   
                  })} style={styles.singButton}>
                  <Text style={styles.signButton}>Sign in</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.botoneraCont}>
                <TouchableHighlight onPress={()=> Actions.createAccount()} style={styles.button}>
                  <Text style={styles.txtButton}>Create Account</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=> Actions.forgotPassword()} style={styles.buttonForgot}>
                  <Text style={styles.txtButton}>Forgot Password</Text>
                </TouchableHighlight>
            </View>
           
           
        </View>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
//    height: '85%',
    backgroundColor: '#fbfbfb',
    justifyContent:'flex-start',
    alignItems:'center',
    borderRadius:10,
    borderColor:'gray',
    borderWidth:1,
    paddingTop:10,
    paddingBottom:10,
    marginTop:40
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
    marginRight: 10,
    borderColor:'red',
    borderWidth:1
  },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 18,
    color: 'red',
    borderColor:'red'
  },
  signButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 27,
    color: 'white',
    borderColor:'red'
  },
  buttonForgot:{
    width: '45%',
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    marginLeft: 10,    
    borderColor:'red',
    borderWidth:1
  },
  singButtonContainer: {
    marginTop:15,
    width: '100%',
    alignItems: 'center',
  },
  singButton:{
    width: '90%',
    height: 75,
    backgroundColor: "#c52323",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  txtInput:{
    fontSize: 22,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: '#c4c4c7',
    backgroundColor: '#fbfbfb',
    borderRadius: 8,
    width: '100%',
    height: 40,
    borderColor: 'red',
    marginTop:5,
    padding: 6,
  
  }
});
