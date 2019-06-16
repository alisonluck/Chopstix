import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, ListItem, List, Icon, CheckBox } from 'react-native-elements';

class CardMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,

      propObj: ""
    };
  }

  componentDidMount(){
    this.setState({ propObj: this.props })
  }

  render() {  
    return (
  //      <Card titleStyle={styles.titleCard} title={this.props.itemMenuId} containerStyle={styles.card}>
            <View style={{width:'90%',alignItems:'center',marginTop:10,backgroundColor:'#fbfbfb',marginLeft:20,borderRadius:10,borderColor:'gray',borderWidth:0.5}}>
		<View style={styles.titleView}>
                <Text style={styles.titleCard}>{this.props.itemMenuId}</Text>
		</View>
              <ListItem
                  titleStyle={styles.titleItem}
                  title={this.props.itemMenuName[0]}
                  containerStyle={{ height:65,width:'100%'}}   
                  subtitle={
                    <View>
                      <Text style={styles.optionalDesc}>{this.props.itemMenuOption[0]}</Text>
                    </View>
                  }
                  onPress={()=> this.props.navigation.navigate('DishDetails')}
                  rightIcon={
                    <Text style={styles.optionalDesc}>{this.props.itemMenuPrice[0]}</Text>
                }
              />
              <ListItem
                  titleStyle={styles.titleItem}
                  title={this.props.itemMenuName[1]}
                  containerStyle={{ height:65,width:'100%'}}
                  subtitle={
                    <View>
                      <Text style={styles.optionalDesc}>{this.props.itemMenuOption[1]}</Text>
                    </View>
                  }
                  onPress={()=> this.props.navigation.navigate('DishDetails')}
                  rightIcon={
                    <Text style={styles.optionalDesc}>{this.props.itemMenuPrice[1]}</Text>
                }
              />
              <ListItem
                  titleStyle={styles.titleItem}
                  title={this.props.itemMenuName[2]}
                  containerStyle={{ height:65,width:'100%' }}
                  subtitle={
                    <View>
                      <Text style={styles.optionalDesc}>{this.props.itemMenuOption[2]}</Text>
                    </View>
                  }
                  onPress={()=> this.props.navigation.navigate('DishDetails')}
                  rightIcon={
                    <Text style={styles.optionalDesc}>{this.props.itemMenuPrice[2]}</Text>
                }
              />
              <ListItem
                  titleStyle={styles.titleItem}
                  title={this.props.itemMenuName[3]}
                  containerStyle={{ height:65,width:'100%' }}
                  subtitle={
                    <View>
                      <Text style={styles.optionalDesc}>{this.props.itemMenuOption[3]}</Text>
                    </View>
                  }
                  onPress={()=> this.props.navigation.navigate('DishDetails')}
                  rightIcon={
                    <Text style={styles.optionalDesc}>{this.props.itemMenuPrice[3]}</Text>
                }
              />
            </View>
//        </Card>


    );
  } // render
} // class

const styles = StyleSheet.create({
    containerList:{
      backgroundColor:'white', 
      borderRadius:8,
    
      marginRight: 30,
      marginLeft: 30,
      marginBottom: 5,
    },
    tab:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'red',
    },
    card:{
        borderRadius: 5,
        marginBottom: 10,
       
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
      color: '#8e8e93',
      marginTop:20,
  //    textDecorationLine:'underline'
      
       width:'70%',
    	
       textAlign:'center',
	
	
    },
    titleItem:{
      color: '#8e8e93',
      height:20,
      fontSize: 18,

    },
    optionalDesc:{
      fontSize: 14,
      color: '#8e8e93'
    }
})

export default CardMenu;
