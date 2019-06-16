import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ListItem, List, Icon, CheckBox } from 'react-native-elements';

class DishCardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,

      propObj: ""
    };
  }
 
  componentDidMount(){
    this.setState({ propObj: this.props });
    
  }
  
  render() {  
    
    return (
      

	<View style={{width:'90%',alignItems:'center',marginTop:10,backgroundColor:'#fbfbfb',marginLeft:20,borderRadius:10,borderColor:'gray',borderWidth:0.5}}>
		<View style={styles.titleView}>
                	<Text style={styles.titleCard}>{this.props.itemMenuId}</Text>
		</View>
              <ListItem
                   style={{backgroundColor:'red',padding:-30}}
                  titleStyle={styles.titleItem}
                  title={this.props.itemMenuName[0]}    
                  containerStyle={{ height:50,width:'100%' }}        
                  subtitle={
                    <View>
                      <Text style={styles.optionalDesc}>Optional Description</Text>
                    </View>
                  }             
                  rightIcon={
                    <CheckBox
                      containerStyle={{borderColor: "transparent", backgroundColor: "transparent"}}
                      iconRight
                      checkedIcon='dot-circle-o'
                      uncheckedIcon='circle-o'
                      title={"$" + this.props.itemMenuPrice[0]}
                      checked={this.state.checked1}
                      onIconPress={() => !this.state.checked1 ? this.setState({ checked1: true }) : this.setState({ checked1: false })}
                      checkedColor='red'     
                    />
                }          
              />     
              <ListItem
                  titleStyle={styles.titleItem}
                  title={this.props.itemMenuName[1]}          
                  containerStyle={{ height:50,width:'100%' }}  
                  subtitle={
                    <View>
                      <Text style={styles.optionalDesc}>Optional Description</Text>
                    </View>
                  }             
                  rightIcon={
                    <CheckBox
                      containerStyle={{borderColor: "transparent", backgroundColor: "transparent"}}
                      iconRight
                      checkedIcon='dot-circle-o'
                      uncheckedIcon='circle-o'
                      title={"$" + this.props.itemMenuPrice[1]}
                      checked={this.state.checked2}
                      onIconPress={() => !this.state.checked2 ? this.setState({ checked2: true }) : this.setState({ checked2: false })}
                      checkedColor='red'     
                    />
                }          
              />        
              <ListItem
                  titleStyle={styles.titleItem}
                  title={this.props.itemMenuName[2]}         
                  containerStyle={{ height:50,width:'100%' }}   
                  subtitle={
                    <View>
                      <Text style={styles.optionalDesc}>Optional Description</Text>
                    </View>
                  }             
                  rightIcon={
                    <CheckBox
                      containerStyle={{borderColor: "transparent", backgroundColor: "transparent"}}
                      iconRight
                      checkedIcon='dot-circle-o'
                      uncheckedIcon='circle-o'
                      title={"$" + this.props.itemMenuPrice[2]}
                      checked={this.state.checked3}
                      onIconPress={() => !this.state.checked3 ? this.setState({ checked3: true }) : this.setState({ checked3: false })}
                      checkedColor='red'     
                    />
                }          
              />     
              <ListItem
                 
                  titleStyle={styles.titleItem}
                  title={this.props.itemMenuName[3]}           
                  containerStyle={{ height:50,width:'100%' }} 
                  subtitle={
                    <View>
                      <Text style={styles.optionalDesc}>Optional Description</Text>
                    </View>
                  }             
                  rightIcon={
                    <CheckBox
                      containerStyle={{borderColor: "transparent", backgroundColor: "transparent"}}
                      iconRight
                      checkedIcon='dot-circle-o'
                      uncheckedIcon='circle-o'
                      title={"$" + this.props.itemMenuPrice[3]}
                      checked={this.state.checked4}
                      onIconPress={() => !this.state.checked4 ? this.setState({ checked4: true }) : this.setState({ checked4: false })}
                      checkedColor='red'     
                    />
                }          
              />                   
  
	</View>
         
    );
  } // render
} // class

const styles = StyleSheet.create({
    containerList:{
    backgroundColor:'blue', 
    borderRadius:8,
   
    marginRight: 10,
    marginLeft: 10,
   
    },
    tab:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
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
    fontSize: 18,
    color:'gray',
    height:20,
   
    },
    optionalDesc:{
      fontSize: 13,
      color: '#8e8e93',
     
    }
})

export default DishCardMenu;
