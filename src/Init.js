import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, hr} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Trivial from './Trivia';

class Init extends Component{
 
  render(){
    return(
      <View>
        <View style={styles.header} >
         <Text style={{ fontSize: 33, fontWeight: 'bold' }}>Welcome to the Trivia Challenge</Text>
        </View>
        <View style={styles.Body} >
         <Text style={{ fontSize: 22 }}>You will be presented with 10 true or false question</Text>
         <Text style={{ fontSize: 18 }}>Can you score 100%?</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column'
  },
  header : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    padding: 20,
    marginTop: 50,
    marginBottom: 50
  },
  Body : {
    flex : 4,
    alignItems : 'center',
    justifyContent : 'center',
    padding: 20,
    marginTop: 20,
    marginBottom: 80
    
  },
})
export default Init