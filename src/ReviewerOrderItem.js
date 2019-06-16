import React, { Component } from 'react';
import {
    Text,
    View, 
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import RestDetailsScreen from './RestDetailsScreen'

export default class ReviewerOrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_uri: 'https://staticc04.insing.com/images/02/f6/10/00/pc_600x450.jpg'
    };
  }

  render() {
    return (

        <View style={styles.container}>
          <View style={styles.left}>
             <Text style={styles.title}>{this.props.name}</Text>
              <Text style={styles.sub_title}>{this.props.option}</Text>
          </View>
          <View style={styles.right}>
               <Text style={styles.sub_title}>{this.props.price}</Text>
          </View>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
     height:50,
    flexDirection: 'row',
    alignItems:'center',
    marginTop:10,
    marginLeft:20,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor:'white',
  },
  left:{
     width: '80%',
    height: 60,
    marginLeft:10,
    justifyContent: 'flex-start',
    alignItems:'flex-start'
  },
  right: {
   justifyContent: 'center',
    width: '20%',
    height: 60,
  },
  sub_title: {
    fontSize: 16,
    color: '#8e8e93',
    height:35,
    
  },
  title: {
    fontSize: 20,
    color: '#8e8e93',
    height:25,
    
  },
  rightSubContainer:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
 

})