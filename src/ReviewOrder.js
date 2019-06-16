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
export default class ReviewOrder extends Component<Props> {

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
        headerTitle: "Review Order",
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
              marginLeft:-20
          },
       
    });
  render() {
    
    return (
       
          <View style={styles.root} >
             <ScrollView style={{backgroundColor:'white',width:'100%'}}>
              <View style={{flexDirection:'row',marginTop:10,justifyContent:'center'}}>
                <Text style={styles.header1}>Pick up from</Text>
                <Text style={styles.header}> Average Portuguese</Text>
              </View>
              <View style={styles.container}>              
                  <List containerStyle={styles.containerList}>

                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.orderList}
                    ListEmptyComponent={this.renderEmtpy}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}

                    extraData={this.state}
                  />
                 
                      <View style={styles.resultContainer} >
                          <View style={styles.totalContainer_l}>
                            <Text style={styles.totalItem}>Total Items</Text>          
                          </View>
                          <View style={styles.totalContainer_r}>
                            <Text style={styles.priceItem}>3</Text>          
                          </View>             
                      </View>
                       <View style={styles.resultContainer1} >
                          <View style={styles.totalContainer_l}>
                            <Text style={styles.totalItem}>Subtotal</Text>          
                          </View>
                          <View style={styles.totalContainer_r}>
                            <Text style={styles.priceItem}>$34.63</Text>          
                          </View>             
                      </View>
                    
              </List>
              </View>    
             

              <View style={styles.container1}>
                <TextInput
                  style={styles.txtInput}
                  placeholder="Name..."
                  placeholderTextColor="#8e8e93"
                />  
                 <TextInput
                  style={styles.txtInput_phone}
                  placeholder="Phone Number..."
                  placeholderTextColor="#8e8e93"
                />  
                 <TextInput
                  style={styles.txtInput}
                  placeholder="Address..."
                  placeholderTextColor="#8e8e93"
                />  

              </View>
              <View style={styles.container2}>
                <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                  <Text style={{fontSize:23,height:25,fontFamily: Platform.select({
                    ios: 'Aristotelica Text',
                    android:'aristotelica',
                  }),color:'gray'}}>Paying with</Text>
                  <Text style={{fontSize:23,textDecorationLine:'underline',height:25,fontFamily: Platform.select({
                    ios: 'Aristotelica Text',
                    android:'aristotelica',
                  }),color:'gray'}}> card</Text>
                </View>
                <TextInput
                  style={styles.txtInput_phone1}
                  placeholder="Card Number..."
                  placeholderTextColor="#8e8e93"
                />
                <TextInput
                  style={styles.txtInput_phone1}
                  placeholder="MM/YY..."
                  placeholderTextColor="#8e8e93"
                />
                <View style={{flexDirection:'row'}}>
                  <TextInput
                    style={styles.txtInput_phone_cvv}
                    placeholder="CVV..."
                    placeholderTextColor="#8e8e93"
                  />
                  <TextInput
                    style={styles.txtInput_phone_cvv1}
                    placeholder="Zipcode..."
                    placeholderTextColor="#8e8e93"
                  />
                </View>
              </View>
              </ScrollView>
              <View style={styles.singButtonContainer}>
                      <TouchableHighlight onPress={()=> this.props.navigation.navigate('ThanksOrder')} style={styles.singButton}>
                        <Text style={styles.signButton}>Place Order</Text>
                      </TouchableHighlight>
              </View> 
          </View>
        

    );
  }
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'white'
  },
  containerList:{
    backgroundColor: '#fbfbfb',
    borderRadius:8,
    borderTopColor: 'transparent',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
  },
  container: {
  
    width: '90%',
    flex:3,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:-20,
    borderRadius:10,
    marginLeft:20,
  },
  container1: {
     marginTop:10,
   
    width: '90%',
    flex:2,
    backgroundColor: '#fbfbfb',
    justifyContent:'flex-start',
    alignItems:'flex-start',    
    borderRadius:10,
    borderWidth:1,
    borderColor:'lightgray',
    paddingTop:6,
    paddingBottom:6,
    marginLeft:20
 //   borderColor:'red'
  },
  container2: {
     marginTop:10,
   marginLeft:10,
    marginRight:10,
    width: '90%',
    flex:2,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:'#fbfbfb',
    borderRadius:10,
    borderWidth:1,
    borderColor:'lightgray',
    marginLeft:20
 //   borderColor:'red'
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
    borderTopWidth:0.5,
    borderTopColor:'lightgray',
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
    height:50,
   
    fontSize:18,
    textAlign:'center',
    color:'#adadae',
    marginTop:10,
    textDecorationLine:'underline',
  },
   header1:{
   fontFamily: Platform.select({
                ios: 'Aristotelica Text',
                android:'aristotelica',
              }),
    height:50,
    color:'#adadae',
    fontSize:18,
    textAlign:'center',   
    marginTop:10,
  },
  txtInput:{
    fontSize: 20,
    color: '#8e8e93',
    width:'60%',
    marginBottom:12,
    height:40,
    backgroundColor:'#ededee',
    paddingLeft:15,
  },
  txtInput_email:{
    fontSize: 20,
    color: '#8e8e93',
    width:'45%',
    marginBottom:12,
    height:40,
    paddingLeft:15,
    backgroundColor:'#ededee'
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
    justifyContent: 'center',
  },
 
  txtInput:{
    fontSize: 20,
   
    color: '#c52323',
    backgroundColor: '#ededee',
    borderRadius: 8,
    width: '85%',
    height: 50,
    marginBottom:12,
    borderColor: 'red',
    marginTop:2,
    marginLeft:30,
    paddingLeft:15,
    padding: 2,
  },
  txtInput_phone:{
    fontSize: 20,
    
    color: '#c52323',
    backgroundColor: '#ededee',
    borderRadius: 8,
    width: '55%',
    height: 50,
    paddingLeft:15,
    borderColor: 'red',
    marginTop:2,
    marginLeft:30,
    padding: 2,
    marginBottom:12,
  },
  txtInput_phone1:{
    fontSize: 20,
    
    color: '#c52323',
    backgroundColor: '#ededee',
    borderRadius: 8,
    width: '85%',
    height: 50,
    borderColor: 'red',
    marginTop:2,
   
    paddingLeft:10,
    padding: 2,
    marginBottom:12,
  },
  txtInput_phone_cvv:{
    fontSize: 20,
    
    color: '#c52323',
    backgroundColor: '#ededee',
    borderRadius: 8,
    width: '35%',
    height: 40,
    borderColor: 'red',
    marginTop:2,
   
    padding: 2,
    paddingLeft:15,
    marginBottom:12,
  },
  txtInput_phone_cvv1:{
    fontSize: 20,
    
    color: '#c52323',
    backgroundColor: '#ededee',
    borderRadius: 8,
    width: '50%',
    height: 40,
    borderColor: 'red',
    marginTop:2,
    marginLeft:10,
    padding: 2,
    paddingLeft:15,
    marginBottom:12,
  }
});
