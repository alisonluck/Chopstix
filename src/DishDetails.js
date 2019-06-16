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
    ScrollView
} from 'react-native';
import { TabView, TabBar, SceneMap ,TabViewAnimated} from 'react-native-tab-view';
import CircleCheckBox from 'react-native-circle-checkbox';
import Icon from 'react-native-vector-icons/Ionicons';

import { SearchBar, Card, List,ListItem ,CheckBox} from 'react-native-elements';

//import { getMenu } from '../utils/api';
import RestaurantItem from './RestaurantItem';
import { connect } from 'react-redux';
import DishCardMenu from './DishCardMenu';
import Separator from './vertical-separator';
import Empty from './empty';
export default class DishDetailsScreen extends Component {
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
  var menuid = new Array();
  var menuprice = new Array();
  var menuoption = new Array();
  menuid[0] = 'Watermelon';
  menuid[1] = 'Tomato';
  menuid[2] = 'Chorizo';
  menuid[3] = 'Manzana';

  menuprice[0] = '';
  menuprice[1] = '+1.99';
  menuprice[2] = '';
  menuprice[3] = '';

  menuoption[0] = 'Optional Description';
  menuoption[1] = 'rice with chicken and a glass of milk with soy sauce/BBQ';
  menuoption[2] = 'rice with shrimp,some pork,veggies';
  menuoption[3] = 'rice with chicken and a glass of milk with soy sauce/BBQ';

  data[0] = {
        itemMenuId: 'Flavor',
      itemMenuName: menuid,
      itemMenuPrice: menuprice,
      itmeMenuoption:menuoption
  }
  
    this.setState({ Menu: data });
  }


  keyExtractor = item => item.itemMenuId.toString()
  renderEmtpy = () => <Empty text={this.state.errData} />
  itemSeparator = () => <Separator style={{backgroundColor:'red'}}/>
  renderItem = ({item}) => {
    return (
	      <DishCardMenu
	        {...item}
	      />
    )
  }

  

  static navigationOptions = ({ navigation }) => ({
      headerLeft: <TouchableOpacity onPress={()=> {navigation.goBack()}}><Icon name="ios-close-circle" size={25} color="gray" style={{paddingLeft: 10}}/></TouchableOpacity>,
      headerTitle: `Bubble Tea`,
      headerTitleStyle: {
            fontFamily: Platform.select({
              ios: 'Aristotelica Text',
              android:'aristotelica',
            }),
           color: "#ca2545",
            fontWeight:'normal',
            fontSize: 27,
            
            flex: 1,
            marginLeft:-20,
            textAlign: 'center'
        }
  });

  render() {
    
    return (
      
      <View style={{flex:1,justifyContent:'flex-start', backgroundColor: "white"}}>
      <ScrollView style={{backgroundColor:'white'}}>
          <View style={{height:30,alignItems:'center',marginTop:20}}>
            <Text style={{fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),fontSize:18,color:'gray'}}>Cup of tea with tapiocka bubbles in it</Text>
          </View>
         <View style={{flex: 3,backgroundColor: "transparent",marginTop:-10,marginBottom:10,marginRight:5,marginLeft:5,borderRadius:8}}>
          
            
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.Menu}
                ListEmptyComponent={this.renderEmtpy}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItem}
                extraData={this.state}
              />
            
        

        </View> 
        <View style={{flex: 1,alignItems: 'stretch',marginBottom:25,marginTop:-10}}>
          
              <View style={{width:'88%',alignItems:'center',marginTop:10,backgroundColor:'#fbfbfb',marginLeft:25,borderRadius:10,borderColor:'gray',borderWidth:0.5}}>
		<View style={styles.titleView}>
                	<Text style={styles.titleCard}>Size</Text>
		</View>
                  <ListItem
                        titleStyle={styles.titleItem}
                        title='Small'    
                        containerStyle={{ height:50,width:'95%',}}                                     
                        rightIcon={
                        <CircleCheckBox
				checked={true}	
				innerColor={'gray'}
				outerColor={'gray'}
				outerSize={18}
				innerSize={10}	
				styleCheckboxContainer={styles.circlecheckbox}	
				onToggle={(checked)=>{}}	
			/>
                        }          
                  />    
                   <ListItem
                        titleStyle={styles.titleItem}
                        title='Large'    
                        containerStyle={{ height:50,width:'95%',}}                                     
                        rightIcon={
                            <CircleCheckBox
				checked={true}	
				innerColor={'gray'}
				outerColor={'gray'}
				outerSize={18}
				innerSize={10}		
				styleCheckboxContainer={styles.circlecheckbox}		
				onToggle={(checked)=>{}}
			/>
                        }          
                  />    
               </View>
          
        </View>

       <View style={{flex: 1,alignItems: 'center',justifyContent:'center',marginTop:-10,height:60,width:'95%',marginLeft:10,marginRight:10}}>
           <TextInput
              style={styles.txtInput}
              placeholder="Special request..."
   
            />
        </View>
        </ScrollView>
        <View style={styles.btnBContainer} >
          <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('CartList')
            }>
          
            <Text style={styles.txtButton}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  containerList:{
    backgroundColor: "transparent",
    borderRadius:8,
    marginRight: 10,
    marginLeft: 10,
   marginTop:8,
    borderTopColor: 'transparent',
    borderBottomColor:'transparent',
    justifyContent: 'center',
    textAlign:'center',
    alignItems: 'center'
  },
     circlecheckbox:{
		marginRight:20,
	},
  tab:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
   textInputView:{
    flex: 1,
    justifyContent: 'center',
   
    alignItems: 'center'
  },
  card:{
    borderRadius: 5,
    widht:'100%'
  },
  titleCard:{
    fontSize: 15,
    color: '#8e8e93'
  },
  titleItem:{
    color: 'gray',
    width:'100%'
  },
  btnBContainer:{
 
 //   justifyContent: "flex-end",
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop:30,
    height: 60
  },
  button: {
    width: "90%",
    height: 60,
    backgroundColor: "red",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    
    marginBottom: 10,
  },
  txtButton: {
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    fontSize: 27,
    color: 'white',
  },
	txtInput:{
	    fontSize: 19,
	    fontFamily: Platform.select({
	      ios: 'Aristotelica Text',
	      android:'aristotelica',
	    }),
	    color: '#c52323',
      height:60,
	    backgroundColor: '#f1f1f1',
	    borderRadius: 8,
      paddingLeft:15,
	    width: '95%',
  },
  card:{
    borderRadius: 5,
    backgroundColor: "#fbfbfb",
    },
    titleView:{
     
      color: '#8e8e93',
      marginTop:20,
  //    textDecorationLine:'underline'
        paddingBottom:10,
       borderBottomColor:'black',
       borderBottomWidth:0.6,
	
       alignItems:'center',
    	width:'70%',
       textAlign:'center',
	
	
    },	
    titleCard:{
      fontSize: 18,
      
      marginTop:10,
  //    textDecorationLine:'underline'
      
       width:'70%',
    	
       textAlign:'center',
	
	
    },
    titleItem:{
 //   color: '#8e8e93',
    fontSize: 15,
    color:'lightgray',
    height:20,
    color:'gray'
   
    },
    optionalDesc:{
      fontSize: 12,
      color: '#8e8e93',
     
    }
})