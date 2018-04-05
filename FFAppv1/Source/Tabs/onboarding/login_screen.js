/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Text, View, Image, Button, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import {onSignIn} from './auth_user';

export default class login_screen extends Component {
  render() {
    return (
      <View flex={1} backgroundColor={'#F5FCFF'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View flexDirection = "column" marginTop = {20}>
          
            <View marginTop={10}>
            <TouchableOpacity onPress={ () => this.props.navigation.goBack()}>
            <Text>Back</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Image
                style = {styles.logo}
                source = {require('../../../Images/logo.png')}
                />
            </View>
            
            <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
            <Text style={{fontWeight: 'bold'}}>Username</Text>
            </View>
            <TextInput
                style={styles.input}
                autoCapitalize = 'none'
                autoCorrect = {false}
                placeholder = "user@example.com"
                placeholderTextColor = 'rgba(0,0,0,0.6)'>
            </TextInput>
            </View>

            <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
            <Text style={{fontWeight: 'bold'}}>Password</Text>
            </View>
            <TextInput
                style={styles.input}
                autoCapitalize = 'none'
                autoCorrect = {false}
                placeholder = "user@example.com"
                placeholderTextColor = 'rgba(0,0,0,0.6)'>
            </TextInput>
            </View>
            
            <View alignItems = "center">
            <TouchableOpacity style={styles.button} onPress={() => {onSignIn().then(() => this.props.navigation.navigate("SignedIn"));}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
            </TouchableOpacity>
            </View>

          </View>
      </TouchableWithoutFeedback>
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
    marginTop: 15,
    marginBottom: 20
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
    height: 175,
    width: 175
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
