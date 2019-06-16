import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    SafeAreaView,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
    Platform,
    Picker,
    ScrollView,
    Image
  } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import Separator from './vertical-separator';
import { Dropdown } from 'react-native-material-dropdown';
export default class Payment extends Component<Props> {

  state = {
    text: '',
    password: '',
    paykind:'cash'
  }
  static navigationOptions = ({ navigation }) => ({
        headerLeft: <TouchableOpacity onPress={()=> {navigation.goBack()}}><Icon name="ios-arrow-back" size={25} color="red" style={{paddingLeft: 10}}/></TouchableOpacity>,
        headerTitle: `Checkout`,
        headerTitleStyle: {
              fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
              color: "#ca2545",
              fontWeight: "normal",
              fontSize: 27,
              flex: 1,
              textAlign: 'center',
              marginLeft:-25,
          }
    });
  render() {
    let view;
    if(this.state.paykind == 'Card'){
      view=<View style={styles.payCardKind}>
              <Text style={{fontSize:22,height:27,textDecorationLine:'underline',marginTop:20}}>Card Number</Text>
              <TextInput
                  style={styles.txtInput}
                  placeholder="Card Number"
                  placeholderTextColor="gray"
                 
                  maxLength={40}
                />
              <Text style={{fontSize:22,height:27,textDecorationLine:'underline'}}>MM/YY</Text>
              <TextInput
                  style={styles.txtInput_mm}
                  placeholder="MM/YY..."
                  placeholderTextColor="gray"
                 
                  maxLength={40}
                />
               <View style={styles.cvv_zipcode}>  
                  <View style={styles.cvv}>         
                      <Text style={{fontSize:22,height:27,textDecorationLine:'underline'}}>CVV</Text>
                  </View>
                  <View style={styles.zipcode}>
                      <Text style={{fontSize:22,height:27,}}>Zipcode</Text>
                  </View>
              </View>

              <View style={styles.cvv_zipcode}>  
                  <View style={styles.cvv}>         
                      <TextInput
                        style={styles.txtInput}
                        placeholder="CVV..."
                        placeholderTextColor="gray"
                        
                        maxLength={40}
                      />
                  </View>
                  <View style={styles.zipcode}>
                      <TextInput
                          style={styles.txtInput}
                          placeholder="Zipcode..."
                          placeholderTextColor="gray"
                          maxLength={40}
                        />
                  </View>
              </View>
            </View>;
    }
    return (
          <ScrollView style={{backgroundColor:'white'}}>
            <View style={{backgroundColor: '#fbfbfb',flex:1,justifyContent:'flex-start',padding:10,alignItems:'center'}}>
               <Image
            
                    source={require('./images/dialog2.png')}
                  />
                <View style={styles.container}>
                  <View style={{marginTop:10, width:'60%',height:40,paddingBottom:10,borderBottomWidth:1,borderBottomColor:'gray'}}>
                    <Text style={styles.header}>Payment Information</Text>
                  </View>
                  <View style={styles.paykind}>           
                   <Text style={{fontSize:22,fontFamily: Platform.select({
                      ios: 'Aristotelica Text',
                      android:'aristotelica',
                    }),marginTop:10,color:'gray'}}>Pay witha</Text>
                    

                    <Picker
                      selectedValue={this.state.paykind}
                      style={{ width: 60,borderBottomWidth:1,borderBottomWidth:1}}
			itemStyle={{color:'gray',height:40,}}
                      onValueChange={(itemValue, itemIndex) => this.setState({paykind: itemValue})}
                       mode="dialog"
                      >
                      <Picker.Item label="Cash" value="Cash"/>
                      <Picker.Item  label="Card" value="Card"/>
                    </Picker>
                     <Icon name="md-arrow-dropdown" size={25} color="gray" style={{paddingLeft: 10}}/>
                  </View>
                  {view}
                  <View style={styles.singButtonContainer}>
                        <TouchableHighlight onPress={()=> this.props.navigation.navigate('ReviewOrder')} style={styles.singButton}>
                          <Text style={styles.signButton}>Review Order</Text>
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
   marginLeft:10,
    width: '95%',
    flex:1,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    alignItems:'center',
 
    marginTop:55,
    borderRadius:8,
    borderWidth:1,
    borderColor:'lightgray',
    padding:10,
 //   borderColor:'red'
  },

  header:{
    width:'100%',
    height:40,
    color:'gray',
    fontSize:22,
    textAlign:'center',
    paddingBottom:10,
 //   textDecorationLine:'underline',
 //   borderBottomWidth:0.3,

  },
  paykind:{
      width:'100%',
      height:50,
      fontSize:22,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     marginTop:10
  },
  cvv_zipcode:{
      width:'90%',
      height:40,
      fontSize:22,
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center'
  },
  cvv:{
      width:'40%',
      height:40,
      fontSize:22,
     flexDirection:'row',
     justifyContent:'flex-start',
     alignItems:'center'
  },
   zipcode:{
      width:'60%',
      height:40,
      fontSize:22,
     flexDirection:'row',
     justifyContent:'flex-start',
     alignItems:'center'
  },
  payCardKind:{
    width:'100%',
    marginLeft:10,
    alignItems:'flex-start'

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
    backgroundColor: "#c52323",
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
    marginLeft: 5,    
    borderColor:'red',
    borderWidth:1
  },
  singButtonContainer: {
   flex:1,
    marginTop:15,
    width: '100%',
    alignItems: 'center',
    paddingBottom:10,
  },
  singButton:{
    width: '100%',
    height: 65,
    backgroundColor: "red",
    borderWidth:1,
    borderRadius: 8,
    borderColor:'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  txtInput:{
    fontSize: 22,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: '#c52323',
    backgroundColor: '#ededee',
    borderRadius: 8,
    width: '95%',
    height: 50,
    borderColor: 'red',
    marginTop:5,
   paddingLeft:20,
  },
  txtInput_mm:{
    fontSize: 22,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: '#c52323',
    backgroundColor: '#ededee',
    borderRadius: 8,
    width: '55%',
    height: 50,
    borderColor: 'red',
    marginTop:5,
   paddingLeft:20,
  }
});
