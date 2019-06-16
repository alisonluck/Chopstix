import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView
 } from 'react-native';
 import { Actions } from 'react-native-router-flux';
 import { StackNavigator } from 'react-navigation';
 import RestaurantListScreen from './RestaurantListScreen';
// import RestDetailsScreen from './RestDetailsScreen';
 import RestaurantItem from './RestaurantItem';
 import RestaurantDetailList from './RestDetailsScreen';
import DishDetailsScreen from './DishDetails';
import CartListScreen from './CartListScreen';
import CheckoutScreen from './CheckoutScreen';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Payment from './Payment';
import ReviewOrder from './ReviewOrder';
import ThanksOrder from './ThanksOrder';
import ConsumerComponent from './ConsumerComponent';
export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator (
  {
    List: RestaurantListScreen,
    RestaurantItem: RestaurantItem,
    RestaurantDetails: RestaurantDetailList,
    DishDetails: DishDetailsScreen,
    CartList:CartListScreen,
    Checkout:CheckoutScreen,
    SignIn:SignIn,
    SignOut:SignOut,
    Payment:Payment,
    ReviewOrder:ReviewOrder,
    ThanksOrder:ThanksOrder,
 //   ConsumerComponent:ConsumerComponent,
  },
  {
    initialRouteName: 'List',
 //   initialRouteName:'ConsumerComponent',
  }
);

const styles = StyleSheet.create({

})