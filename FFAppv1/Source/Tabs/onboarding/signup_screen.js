/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Text, View, Image, Button, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import {emailChanged, passwordChanged, firstnameChanged, lastnameChanged, loginUser, loggedInUser, newUser} from '../../Actions';
import {connect} from 'react-redux';
import firebase from 'firebase';

class signup_screen extends Component {
    // Checks when a user has successfuly signed up and allows 
    // for transition to the rest of the app
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
          if(user) {
            this.props.loggedInUser();
          }
        });
    }

    onEmailChange(text){
        this.props.emailChanged(text)
    }

    onFirstNameChange(text){
        this.props.firstnameChanged(text)
    }

    onLastNameChange(text){
        this.props.lastnameChanged(text)
    }

    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onNewHere() {
        const {email, password, firstname, lastname} = this.props
        this.props.newUser({email: email || '', password: password || '', firstname: firstname || '', lastname: lastname || '',})
    }

    checkFlag() {
        if(this.props.loggedIn === null) {
          setTimeout(this.checkFlag.bind(this), 1000)
        }
        else {
          this.props.navigation.navigate("SignedIn")
        //     const resetAction = NavigationActions.reset({
        //         index:0,
        //         actions: [
        //           NavigationActions.navigate("SignedIn")
        //         ]
        //     })
        //     this.props.navigation.dispatch(resetAction)
         }
    }

    checkStuff() {
        if(this.props.loading) {
          {this.checkFlag()}
        }
    }

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
            <Text style={{fontWeight: 'bold'}}>First Name</Text>
            </View>
            <TextInput
                style={styles.input}
                autoCapitalize = 'words'
                autoCorrect = {false}
                placeholder = "Darth"
                onChangeText = {this.onFirstNameChange.bind(this)}
                placeholderTextColor = 'rgba(0,0,0,0.6)'
                value = {this.props.firstname}>
            </TextInput>
            </View>

            <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
            <Text style={{fontWeight: 'bold'}}>Last Name</Text>
            </View>
            <TextInput
                style={styles.input}
                autoCapitalize = 'words'
                autoCorrect = {false}
                placeholder = "Vader"
                onChangeText = {this.onLastNameChange.bind(this)}
                placeholderTextColor = 'rgba(0,0,0,0.6)'
                value = {this.props.lastname}>
            </TextInput>
            </View>

            <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
            <Text style={{fontWeight: 'bold'}}>Email</Text>
            </View>
            <TextInput
                style={styles.input}
                autoCapitalize = 'none'
                autoCorrect = {false}
                placeholder = "example@fordham.edu"
                onChangeText = {this.onEmailChange.bind(this)}
                placeholderTextColor = 'rgba(0,0,0,0.6)'
                value = {this.props.email}>
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
                placeholder = "Must contain at least 8 characters."
                onChangeText = {this.onPasswordChange.bind(this)}
                placeholderTextColor = 'rgba(0,0,0,0.6)'
                value = {this.props.password}>
            </TextInput>
            </View>
            
            <View alignItems = "center">
            <TouchableOpacity style={styles.button} onPress={this.onNewHere.bind(this)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Signup</Text>
            </TouchableOpacity>
            </View>

          </View>
      </TouchableWithoutFeedback>
      {this.checkStuff()}
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
    error: state.auth.error,
    loading: state.auth.loading,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps,{emailChanged, passwordChanged, firstnameChanged, lastnameChanged, loginUser, loggedInUser, newUser})(signup_screen)
