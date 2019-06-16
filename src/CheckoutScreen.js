import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Platform,
    FlatList,
    StyleSheet,
    Text,
    Dimensions,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
import { TabView, TabBar, SceneMap ,TabViewAnimated} from 'react-native-tab-view';

import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBar, Card, List } from 'react-native-elements';
//import { getMenu } from '../utils/api';
import RestaurantItem from './RestaurantItem';
import { connect } from 'react-redux';
import DishCardMenu from './DishCardMenu';
import Separator from './vertical-separator';
import Empty from './empty';

export default class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RestaurantList: [],
      Menu: [],
      errData: null,
    };
  }

  componentDidMount(){
    /*
    let restID = 1; //this.props.navigation.state.params.restID
    getMenu(restID)
    .then(data => this.setState({ Menu: data }))
    .catch(err => this.setState({ errData: "Someting Wrong, please Check your Internet conection" }))
    //console.warn("Restaurant ID Selected: " + this.props.navigation.state.params.restID)
  */
  const numbers = [1,2];
    const data = numbers.map((number) => ({
      itemMenuId: 'aaa',
      itemMenuName: 'Tomato',
      itemMenuPrice: '+1.99$',

    }));
    this.setState({ Menu: data });
  }


  keyExtractor = item => item.itemMenuId.toString()
  renderEmtpy = () => <Empty text={this.state.errData} />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return (
	      <DishCardMenu
	        {...item}
	      />
    )
  }

  

  static navigationOptions = ({ navigation }) => ({
      headerLeft: <TouchableOpacity onPress={()=> {navigation.goBack()}}><Icon name="ios-arrow-back" size={25} color="red" style={{paddingLeft: 10}}/></TouchableOpacity>,
      headerTitle: `Checkout`,
      headerTitleStyle: {
            fontFamily: Platform.select({
              ios: 'Aristotelica Text',
              android:'aristotelica',
            }),
            color: "#ff2d55",
            fontWeight:'normal',
            fontSize: 27,
            flex: 1,
            textAlign: 'center',
            marginLeft:-25,
        }
  });

  render() {
    
    return (
      <ScrollView style={{backgroundColor:'white',flex:1,}}>
      <View style={styles.rootcontainer}>
         <Image
            style={{marginTop:-20}}
            source={require('./images/dialog1.png')}
          />
        <View style={styles.subrootcontainer}>
          <View style={styles.container}>            
            <View style={styles.foodNameContainer}>
              <Text style={styles.addressItem}>Name</Text>          
            </View>
            <View style={styles.foodNameContainer}>
              <Text style={styles.distance}>Last Name</Text>
            </View>
          </View>
          <View style={styles.container}>
            
            <View style={styles.priceContainer}>
              <TextInput
                style={styles.txtInput}
                placeholder="Name..."
                placeholderTextColor="#8e8e93"
              />          
            </View>
            <View style={styles.priceContainer}>
              <TextInput
                style={styles.txtInput}
                placeholder="Last Name..."
                placeholderTextColor="#8e8e93"
              />  
            </View>
          </View>

          <View style={styles.container}>            
            <View style={styles.foodNameContainer}>
              <Text style={styles.addressItem}>Email</Text>          
            </View>
            <View style={styles.foodNameContainer}>
              <Text style={styles.distance}></Text>
            </View>
          </View>

          <View style={styles.container}>            
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.txtInput}
                placeholder="Email..."
                placeholderTextColor="#8e8e93"
              />          
            </View>
          </View>

          <View style={styles.container}>            
            <View style={styles.foodNameContainer}>
              <Text style={styles.addressItem}>Phone Number</Text>          
            </View>
            <View style={styles.foodNameContainer}>
              <Text style={styles.addressItem}></Text>          
            </View>
          </View>
          <View style={styles.container}>            
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.txtInput1}
                placeholder="Phone Number..."
                placeholderTextColor="#8e8e93"
              />          
            </View>
          </View>
          <View style={styles.container_btn}>
            <View style={styles.emailContainer}>
              <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Payment')}>            
                <Text style={styles.txtButton}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
       
     
      </View>
     </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  rootcontainer:{
       flex:2,
       alignItems:'center',
       justifyContent:'space-between',
       borderRadius:8,
       marginTop:40,
    //   height:'60%',
       backgroundColor:'white',
      
  },
  subrootcontainer:{
       flex:1,
  //     height:'92%',
        width:'93%',
       alignItems:'center',
       borderRadius:8,
      
       marginTop:60,
       borderColor:'gray',
       borderWidth:1,
       paddingLeft:16,
       paddingRight:5,
       paddingBottom:20,
      backgroundColor: '#fbfbfb',
      marginBottom:10,
  },
 container: {
//   flex:1,
    width:'97%',
    flexDirection: 'row',
   justifyContent:'center',
   borderBottomColor:'red',

  },
  container_btn: {
//   flex:1,
    width:'95%',
    flexDirection: 'row',
   justifyContent:'center',
   borderBottomColor:'red',
   marginTop:20,
   paddingBottom:30,

  },
  foodNameContainer:{
    width: '50%',
    height: 25,
    marginTop:5,
    justifyContent: 'center',
    alignItems:'flex-start',
    marginTop:10,
  },
   emailContainer:{
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems:'flex-start',
	
  },
  txtInput:{
    fontSize: 18,
    color: '#8e8e93',
    width:'95%',
	height:50,
    borderRadius:8,
    backgroundColor:'#ededee',
    paddingLeft:20,
  },
  txtInput1:{
      fontSize: 18,
    color: '#8e8e93',
    width:'65%',
	height:50,
    borderRadius:8,
    backgroundColor:'#ededee',
    paddingLeft:20,
  },
  button: {
    width:'95%',
    height: 65,
    backgroundColor: "red",
    borderRadius: 8,    
    justifyContent: 'center',
    marginTop: 25,
    alignItems:'center',
    marginBottom: 10,
  },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 26,
    color: 'white',
    textAlign:'center',
   
  },
  priceContainer:{
    justifyContent: 'center',
    width: '50%',
    height: 50,
    textAlign:'center'
  },
  addressItem:{
    fontSize: 18,
    color: '#8e8e93',
    textDecorationLine:'underline',
  },
  distance:{
    fontSize: 18,
    color: '#8e8e93',
    textDecorationLine:'underline',
  },
  btnBContainer:{
 
    justifyContent: "flex-start",
   
    alignItems:'stretch',
    height: 55,
  
  },
})