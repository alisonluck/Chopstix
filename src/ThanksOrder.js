import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    TouchableOpacity,
    SafeAreaView,
    View,
    TouchableHighlight,
    TextInput,
    Picker,
    FlatList,
    Platform,
    ScrollView,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux'
import Separator from './vertical-separator';
import { SearchBar, List } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import ReviewerOrderItem from './ReviewerOrderItem';
import Empty from './empty';
export default class ThanksOrder extends Component<Props> {

  state = {
    text: '',
    password: '',
    listItem:'',
    orderList:[],
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
      
      <ReviewerOrderItem
        {...item}
      />
     
    )
  }
  static navigationOptions =({ navigation })=>({
        headerLeft: <TouchableOpacity onPress={()=> {navigation.goBack()}}><Icon name="ios-arrow-back" size={25} color="red" style={{paddingLeft: 10}}/></TouchableOpacity>,
        headerTitle: "Thanks for Ordering",
        headerStyle:{
          fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
        },
        headerTitleStyle: {
              fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
              fontWeight: "normal",
              color: "#ca2545",
              fontSize: 27,
              flex: 1,
              textAlign: 'center',
              marginLeft:-20,
          },
       
    });
  render() {
    
    return (
        
          <View style={styles.root} >
            <ScrollView style={{backgroundColor:'white',}}>
              <View style={{flex:1,alignItems:'center',width:'100%',}}>
                <View style={{flexDirection:'row',height:30,marginTop:10,justifyContent:'center'}}>
                  <Text style={styles.header1}>Pick up from</Text>
                  <Text style={styles.header}> Average Portuguese</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                  <Text style={styles.header1}>Your order will be ready for</Text>
                  <Text style={styles.header}> pick up in 15-20 min</Text>
                </View>
                 <View style={{flexDirection:'row',justifyContent:'center'}}>
                  <Text style={styles.header1}>Order Number:176529871</Text>
                  
                </View>
              </View>
              <View style={styles.container}>              
                  <List containerStyle={styles.containerList}>
                      
                      <View style={{height:40,marginTop:10,marginBottom:20,width:'60%',paddingBottom:20,borderBottomWidth:1,borderBottomColor:'gray'}}>
                       
                        <Text style={styles.header4}> Average Portuguese</Text>
                      </View>
                      <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.orderList}
                        ListEmptyComponent={this.renderEmtpy}
                        ItemSeparatorComponent={this.itemSeparator}
                        renderItem={this.renderItem}

                        extraData={this.state}
                      />           
                  </List>
              </View>    
            
              <View style={styles.container2}>
                <View style={{flexDirection:'row',marginTop:20,}}>
                  <Text style={styles.header3}>Paid with</Text>
                  <Text style={styles.header2}> Card</Text>
                </View>
                <View style={{width:'100%',height:45,alignItems:'flex-start',justifyContent:'center',marginTop:10}}>
                    <Text style={{color:'gray',paddingTop:5,paddingBottom:5,borderRadius:8,backgroundColor:'lightgray',textAlign:'center',marginLeft:35,width:120,height:45,fontFamily: Platform.select({ios: 'Aristotelica Text',android:'aristotelica',}),fontSize:25}}>**5783</Text>
                </View>
              </View> 
              </ScrollView>
              <View style={styles.singButtonContainer}>
                      <TouchableHighlight onPress={()=> this.props.navigation.goBack()} style={styles.singButton}>
                        <Text style={styles.signButton}>Close</Text>
                      </TouchableHighlight>
              </View> 
          </View>
       
    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,  
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white'
  },
  containerList:{
    backgroundColor: '#fbfbfb',
    borderRadius:8,
    borderTopColor: 'transparent',
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    alignItems:'center',
    borderWidth:1,
  },
  container: {
  
    width: '95%',
    flex:3,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    alignItems:'center',
   
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
  },
  container1: {
     marginTop:10,
   
    width: '95%',
    flex:2,
    backgroundColor: '#fbfbfb',
    justifyContent:'flex-start',
    alignItems:'flex-start',    
    borderRadius:10,
    borderWidth:1,
    borderColor:'lightgray',
   
 //   borderColor:'red'
  },
  container2: {
     marginTop:20,
   marginLeft:20,
    marginRight:10,
    width: '90%',
    height:200,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: '#fbfbfb',
    borderRadius:10,
    borderWidth:1,
    borderColor:'lightgray',
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
    borderTopWidth:1,

    alignItems: 'center',
   height:45
  },
  resultContainer1:{
//    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
   
  
    alignItems: 'center',
   height:45
  },
  header:{
   fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
    height:30,
    color:'black',
    fontSize:17,
    textAlign:'center',
    color:'#a8a8a9',
    textDecorationLine:'underline',
  },
  header2:{
    fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
    height:30,
    color:'black',
    fontSize:22,
    textAlign:'center',
    color:'#a8a8a9',
    textDecorationLine:'underline',
  },
  header4:{
   
    height:30,
    color:'black',
    fontSize:22,
    textAlign:'center',
    color:'#a8a8a9',
   
  },
  header3:{
   fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
    height:30,
    color:'black',
    fontSize:22,
    textAlign:'center',
    color:'#a8a8a9',
   
  },
   header1:{
   fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
    height:30,
   
    color:'black',
    fontSize:17,
    textAlign:'center',
    color:'#a8a8a9',
    fontWeight:'normal',

  },
  txtInput:{
      fontSize: 18,
    color: '#8e8e93',
    width:'80%',
    marginBottom:12,
    backgroundColor:'lightgray'
  },
  txtInput_email:{
      fontSize: 18,
    color: '#8e8e93',
    width:'45%',
    marginBottom:12,
    backgroundColor:'lightgray'
  },
  listItem:{
    flex:1,
      width:'100%',
      height:40,
      fontSize:22,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center', 
  },
  listItem_total:{
      flex:1,
      width:'100%',
      height:40,
      fontSize:22,
      marginTop:5,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center', 
  },
   subListItemL:{
      width:200,
      height:70,
      fontSize:22,
      alignItems:'center',
      marginLeft:30,
      
  },
  subListItemR:{
      width:100,
      height:70,
      fontSize:18,
  },
  cvv_zipcode:{
      width:'90%',
      height:40,
      fontSize:22,
     flexDirection:'row',
     justifyContent:'center',
     marginBottom:12,
     alignItems:'center'
  },
  cvv:{
      width:'50%',
      height:40,
      fontSize:22,
     flexDirection:'row',
     justifyContent:'flex-start',
     marginBottom:12,
     alignItems:'center'
  },
   zipcode:{
      width:'50%',
      height:40,
      fontSize:22,
     flexDirection:'row',
     justifyContent:'flex-start',
     marginBottom:12,
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
    backgroundColor: "red",
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
  
    marginTop:15,
    width: '100%',
    alignItems: 'center',
  },
  singButton:{
    width: '90%',
    height: 55,
    backgroundColor: "red",
    borderWidth:1,
    borderRadius: 8,
    borderColor:'red',
    alignItems: 'center',
    paddingTop:10,paddingBottom:10,
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
    width: '95%',
    height: 35,
    marginBottom:12,
    borderColor: 'red',
    marginTop:5,
    marginLeft:10,
    padding: 6,
  },
  txtInput_phone:{
    fontSize: 19,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: '#c52323',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '55%',
    height: 35,
    borderColor: 'red',
    marginTop:5,
    marginLeft:10,
    padding: 6,
    marginBottom:12,
  },
  txtInput_phone1:{
    fontSize: 19,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: '#c52323',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '85%',
    height: 35,
    borderColor: 'red',
    marginTop:5,
    marginLeft:10,
    padding: 6,
    marginBottom:12,
  },
  txtInput_phone_cvv:{
    fontSize: 19,
    fontFamily: Platform.select({
      ios: 'Aristotelica Text',
      android:'aristotelica',
    }),
    color: '#c52323',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '42%',
    height: 35,
    borderColor: 'red',
    marginTop:5,
    marginLeft:10,
    padding: 6,
    marginBottom:12,
  }
});
