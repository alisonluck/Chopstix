import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Platform,
    FlatList,
    StyleSheet,
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
import RestaurantItem from './RestaurantItem';
import Tabs from'./Tab.js';
import { connect } from 'react-redux';

export default class RestaurantListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: [],
      errData: null
    };
  }

  componentDidMount(){
    /*
    getRest()
    .then(data => this.setState({ restaurantList: data }))
    .catch(err => this.setState({ errData: "Someting Wrong, Please Check your Internet conection" }))
*/
  const numbers = [1, 2, 3, 4, 5,6,7];
    const data = numbers.map((number) => ({
      restaurantID: number,
      restaurantName: 'Average Portuguese',
      address_street: '185 ferry st,Ironbound',
      address_city: 'NJ07102',
      restaurantDistance: '0.5mi',
      restaurantsDeliveryTime: '15-20min',
      
    }));
    this.setState({ restaurantList: data });

  }



  keyExtractor = item => item.restaurantID.toString()
  renderEmtpy = () => <Empty text={this.state.errData} />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn', {
        restName: `${item.restaurantName}`,
        restID: `${item.restaurantID}`
      })
      }>
      <RestaurantItem
        {...item}
      />
      </TouchableOpacity>
    )
  }


  static navigationOptions =  ({ navigation, screenProps }) => ({
   
      headerLeft: <TouchableOpacity onPress={()=> {navigation.navigate('SignOut',{
       navigation:navigation
        })}}><Icon name="ios-contact" size={25} color="#ff2d55" style={{paddingLeft: 10}}/></TouchableOpacity>,
      title: "Pickup near 10000",
      headerTitleStyle: {
            fontFamily: Platform.select({
              ios: 'Aristotelica Text',
              android:'aristotelica',
            }),
            color: "#ff2d55",
            fontSize: 22,
            fontWeight:'normal',
            flex: 1,
            textAlign: 'center'
        },
      headerRight: <Icon name="ios-cart-outline" size={25} color="#ff2d55" style={{paddingRight: 10}}/>

  });

  render() {
    
    return (
      <View>        
            <View>
              <SearchBar
                round
                lightTheme
                inputStyle={{backgroundColor: '#ededee'}}
                searchIcon={{ size: 15 }}
                placeholder='Search Menu' />
            </View>
            <List containerStyle={styles.containerList}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.restaurantList}
                ListEmptyComponent={this.renderEmtpy}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItem}
                extraData={this.state}
              />
            </List>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerList:{
    backgroundColor:'white', 
    borderRadius:8,
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    borderTopColor: 'transparent',
  }
})