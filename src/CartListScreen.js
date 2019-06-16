import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Platform,
    FlatList,
    StyleSheet,
    Text,
} from 'react-native';

import {
    Container,
    Header,
    Item,
    Input,
    Card,
    CardItem
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBar, List } from 'react-native-elements';
import Separator from './vertical-separator';
import Empty from './empty';
import { getRest } from '../utils/api';
import CartItem from './CartItem';
 import Tabs from'./Tab.js';
import { connect } from 'react-redux';

export default class CartListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [],
      errData: null
    };
  }

  componentDidMount(){
    /*
    getRest()
    .then(data => this.setState({ restaurantList: data }))
    .catch(err => this.setState({ errData: "Someting Wrong, Please Check your Internet conection" }))
*/
 

const numbers = [1, 2, 3];
    const data = numbers.map((number) => ({
      restaurantID: number,
      name: 'Strupwaffle Tortilla',
      option: 'optinal description',
      price: '$17.95',
    }));
    this.setState({ orderList: data });

  }

  keyExtractor = item => item.restaurantID.toString()
  renderEmtpy = () => <Empty text={this.state.errData} />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return (
      
      <CartItem
        {...item}
      />
     
    )
  }


  static navigationOptions =({ navigation })=>({
      headerLeft: <TouchableOpacity onPress={()=> {navigation.goBack()}}><Icon name="ios-arrow-back" size={25} color="red" style={{paddingLeft: 10}}/></TouchableOpacity>,
      headerTitle: "Cart",
      headerTitleStyle: {
            fontFamily: Platform.select({
              ios: 'Aristotelica Text',
              android:'aristotelica',
            }),
            color: "#ff2d55",
            fontWeight:'normal',
            fontSize: 25,
            flex: 1,
            textAlign: 'center',
            marginLeft:-20
        },
     
  });

  render() {
    
    return (
      
        <View style={styles.container_all}>
         
         <View style={{height:40,borderBottomColor: 'black',borderBottomWidth: 0.3,width:'100%',alignItems:'center',justifyContent:'flex-start'}}>
            <Text style={styles.resName}>Average Portuguese</Text>
         </View>
          <View style={styles.container}>        
               
 
	<View style={styles.containerList}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.orderList}
                ListEmptyComponent={this.renderEmtpy}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItem}
                extraData={this.state}
              />
              <View style={styles.btnBContainer} >
                <TouchableOpacity style={styles.button}>
                
                  <Text style={styles.txtButton}>Add more items....</Text>
                </TouchableOpacity>
              </View>
              
             </View>

            <View style={{height:90,justifyContent:'flex-start', borderRadius:10,borderWidth:1,borderColor:'gray',marginTop:20, backgroundColor: '#fbfbfb',marginRight:15}}>
                <View style={styles.resultContainer} >
                    <View style={styles.totalContainer_l}>
                      <Text style={styles.totalItem}>Total Items</Text>          
                    </View>
                    <View style={styles.totalContainer_r}>
                      <Text style={styles.priceItem}>3</Text>          
                    </View>             
                </View>
                 <View style={styles.resultContainer} >
                    <View style={styles.totalContainer_l}>
                      <Text style={styles.totalItem}>Subtotal</Text>          
                    </View>
                    <View style={styles.totalContainer_r}>
                      <Text style={styles.priceItem}>$53.85</Text>          
                    </View>             
                </View>
              </View>

             <View style={styles.btnBContainer1} >
              <TouchableOpacity style={styles.button1} onPress={()=> this.props.navigation.navigate('Checkout')
              }>
                <Text style={styles.txtButton}>Proceed to Checkout</Text>
              </TouchableOpacity>
            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_all:{
    flex:1,
   alignItems:'center',
   backgroundColor:'white'
  },
  container:{
    flex:1,
    width:'90%',
    justifyContent:'space-between',
    backgroundColor:'white',
    marginTop:40,
    marginLeft:20,
  },
  containerList:{
    
    width:'95%',
     backgroundColor: '#fbfbfb',
    justifyContent:'flex-start',
    borderRadius:10,
    marginTop: 8,
   
    marginBottom: 5,
   
    borderRadius:10,
    borderColor:'gray',
    borderWidth:0.4,
  },

  resName:{
    fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
    height:30,
//   marginTop:10,
   color:'red',
	fontWeight:'100',
   alignItems:'center',
   fontSize:20,
   marginTop:15,
   justifyContent:'center',

  },
  totalContainer_l:{
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems:'flex-start',
    
  },
  totalContainer_r:{
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems:'flex-end',
    
  },
  priceItem:{
    fontSize: 20,
    color: '#8e8e93',
    marginRight:20,
   
  },
  totalItem:{
    fontSize: 20,
    color: '#8e8e93',
    marginLeft:20,
   
  },

   resultContainer:{
//    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
   
    alignItems: 'center',
   height:45
  }, 
  btnBContainer:{
//    flex: 1,
    justifyContent: "center",
  
    alignItems: 'center',
    height: 65
  }, 
  btnBContainer1:{
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: 'white',
    alignItems: 'center',
    height: 60,
    marginRight:10,
  },
  button1: {
    width: "100%",
    height: 60,
    backgroundColor: "red",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  button: {
    width: "95%",
    height: 55,
    backgroundColor: "red",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 27,
    color: 'white',
  },
})