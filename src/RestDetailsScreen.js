import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    Platform,
    FlatList,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native';
import { TabView, TabBar, SceneMap ,TabViewAnimated} from 'react-native-tab-view';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchBar, Card, List } from 'react-native-elements';
import { getMenu } from '../utils/api';
import RestaurantItem from './RestaurantItem';
import { connect } from 'react-redux';
import CardMenu from './CardMenu';
import Separator from './vertical-separator';
import Empty from './empty';

class RestDetailsScreen extends Component {
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
  var data = new Array();
  var menuItem = new Array();
  var menuItem1 = new Array();
  var menuoption = new Array();
  var menuprice = new Array();
  menuItem[0] = 'Strupwaffle Tortila';
  menuItem[1] = 'Tsu Chicken with Milk';
  menuItem[2] = 'Shrimp and Stuff';
  menuItem[3] = 'Tsu Chicken with Milk';

  menuoption[0] = 'Optional Description';
  menuoption[1] = 'rice with chicken and a glass of milk with soy sauce/BBQ';
  menuoption[2] = 'rice with shrimp,some pork,veggies';
  menuoption[3] = 'rice with chicken and a glass of milk with soy sauce/BBQ';

  menuprice[0] = '$17.95';
  menuprice[1] = '$7.69';
  menuprice[2] = '$8.99';
  menuprice[3] = '$7.69';

  data[0] = {
     itemMenuId: 'Lunch Specials',
      itemMenuName: menuItem,
      itemMenuOption:menuoption,
      itemMenuPrice: menuprice,
  }
 
  menuItem1[0] = 'Some Other with Food';
  menuItem1[1] = 'Tsu Chicken with Milk';
  menuItem1[2] = 'Shrimp and Stuff';
  menuItem1[3] = 'Tsu Chicken with Milk';

  menuoption[0] = 'Optional Description';
  menuoption[1] = 'rice with chicken and a glass of milk with soy sauce/BBQ';
  menuoption[2] = 'rice with shrimp,some pork,veggies';
  menuoption[3] = 'rice with chicken and a glass of milk with soy sauce/BBQ';

  menuprice[0] = '$17.95';
  menuprice[1] = '$7.69';
  menuprice[2] = '$8.99';
  menuprice[3] = '$7.69';
  data[1] = {
     itemMenuId: 'Appetizers',
      itemMenuName: menuItem1,
      itemMenuOption:menuoption,
      itemMenuPrice: menuprice,
  }
  /*
  data[2] = {
     itemMenuId: 'AAA',
      itemMenuName: 'Shrimp and Stuff',
      itemMenuOption:'rice with shrimp,some pork,veggies',
      itemMenuPrice: '$8.99',
  }
  data[3] = {
     itemMenuId: 'AAA',
      itemMenuName: 'Tsu Chicken with Milk',
      itemMenuOption:'rice with chicken and a glass of milk with soy sauce/BBQ',
      itemMenuPrice: '$7.69',
  }
  */
    this.setState({ Menu: data });
  }


  keyExtractor = item => item.itemMenuId.toString()
  renderEmtpy = () => <Empty text={this.state.errData} />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    const navigation = this.props.navigation;
    return (

      <CardMenu
        navigation={this.props.navigation}
        {...item}
        
      />
    
    )
  }

 
  render() {
    
    return (
      <View style={{flex: 1,backgroundColor:'white'}}>

        <View>
          <SearchBar
            lightTheme
            style={{borderRadius:10}}
            containerStyle={{backgroundColor: 'white',borderRadius:10}}
            inputStyle={{backgroundColor: '#ededee',borderRadius:10}}
            icon={{ type: 'Font-awesome', name: 'search' }}
            clearIcon={{name: 'keyboard-voice', style:{marginTop:-10,marginLeft:20, fontSize:32, color:'white', borderColor: 'red', height: 50, width: 50,}}} 
            placeholder='Search Menu' />
        </View>
        <View style={{flex: 1,width:'100%',backgroundColor:'white'}}>
         
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.Menu}
              ListEmptyComponent={this.renderEmtpy}
              ItemSeparatorComponent={this.itemSeparator}
              renderItem={this.renderItem}
              extraData={this.state}
            />
         
        </View>
        <View style={styles.btnBContainer} >
        <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Checkout')
        }>
         
            <Text style={styles.txtButton}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const AboutUs = () => (
  <View style={ { backgroundColor: '#673ab7' }} />
);

  

export default class RestaurantDetailList extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'tab1', title: 'Menu' },
      { key: 'tab2', title: 'About' },
     
    
    ],
  };
  _renderLabel = ({ route }) => (
      <View style={{borderRightColor:'lightgray',
              borderLeftWidth:0.6,
              
             width:'110%',
             textAlign:'center',
              height:50,
             marginTop:-5,alignItems:'center',justifyContent:'center'}}>
      <Text style={{ color: '#ca2545',fontSize:24, fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
              
      }}>{route.title}</Text>
      </View>
    
  );

  renderHeader = props => <TabBar {...props} renderLabel={this._renderLabel} labelStyle={{ color: 'red',fontSize:15,}}  style={{backgroundColor:'white',height:50}} />;
  renderScene = ({ route }) => {
    switch (route.key) {
      case 'tab1':
        return <RestDetailsScreen navigation={this.props.navigation}/>;
      case 'tab2':
        return <AboutUs />;
      default:
        null;
    }
  };
  tabBarOptions: {
        upperCaseLabel: false,
    }

   static navigationOptions = ({ navigation, screenProps }) => ({
      headerLeft: <TouchableOpacity onPress={()=> {navigation.goBack()}}><Icon name="ios-arrow-back" size={25} color="red" style={{paddingLeft: 10}}/></TouchableOpacity>,
      headerTitle: `${navigation.state.params.restName}`,
      headerTitleStyle: {
            fontFamily: Platform.select({
              ios: 'Aristotelica Text',
              android:'aristotelica',
            }),
            color: "#ca2545",
            fontSize: 23,
            fontWeight:'normal',
            flex: 1,
            textAlign: 'center'
        },
      headerRight: <Icon name="ios-cart-outline" size={25} color="#ff2d55" style={{paddingRight: 10}}/>
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabViewAnimated
          navigationState={this.state}
          style={{ flex: 1 }}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerList:{
    backgroundColor:'white', 
    borderRadius:8,
    marginRight: 10,
    marginLeft: 10,
   
    borderTopColor: 'transparent',
  },
  tab:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  card:{
    borderRadius: 5,
  },
  titleCard:{
    fontSize: 15,
    color: '#8e8e93'
  },
  titleItem:{
    color: '#8e8e93'
  },
  btnBContainer:{
//    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
    height: 60,
    marginTop:10,
  },
  button: {
    width: "90%",
    height: 60,
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