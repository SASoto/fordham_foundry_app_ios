/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Text, View, Image, Button, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

export default class onboarding_screen extends Component {

  render() {
    return (
      <View flex={1} backgroundColor={'#F5FCFF'}>
        <View flexDirection = "column" backgroundColor={'#F5FCFF'}>
          <View style={styles.container}>
              <Image
              style = {styles.logo}
              source = {require('../../../Images/logo.png')}
              />
          </View>
          
          <View alignItems = "center" marginBottom={15}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
          </View>

          <View alignItems = "center">
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Signup")}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Signup</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 100,
    marginBottom: 75
  },
  inputContainer: {
    marginLeft: 15,
    marginBottom: 30
  },
  labelContainer: {
    marginLeft: 7,
    marginBottom: 5
  },
  logo:{
    height: 300,
    width: 300
  },
  input: {
    fontFamily: 'GillSans-Light',
    height: 40,
    width: 300,
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 150,
    backgroundColor: '#2ab9e7',
    padding: 10
  }
});