import React, {Component} from 'react';
import {Text, View, Image, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, TouchableOpacity, TextInput} from 'react-native';
import {emailChanged, passwordChanged, loginUser, loggedInUser, newUser} from '../../Actions';
import {connect} from 'react-redux';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

import {Button, Spinner} from '../../Components/Common';
import ViewContainer from '../../Components/Common/ViewContainer';

class login_screen extends Component {

  // Tracks change in email prop value
   onEmailChange(text){
     this.props.emailChanged(text)
   }

   // Tracks change in password prop value
   onPasswordChange(text){
     this.props.passwordChanged(text)
   }

   // Logs in user with current email and password prop value
  onButtonPress(){
    const {email, password} = this.props
    this.props.loginUser({ email, password })
  }

  // Checks if loggedIn value has changed to true
  checkFlag() {
    if(this.props.loggedIn === null) {
      setTimeout(this.checkFlag.bind(this), 1000)
    }
    else {
      this.props.navigation.navigate("SignedIn")
    //   const resetAction = NavigationActions.reset({
    //     index:0,
    //     actions: [
    //       NavigationActions.navigate("SignedIn")
    //     ]
    //   })
    //   this.props.navigation.dispatch(resetAction)
     }
  }

  // Checks if loading value has changed to true
  // If so, check for change in loggedIn value
  checkStuff() {
    if(this.props.loading === true) {
      {this.checkFlag()}
    }
  }

  renderErrorMess() {
    if(this.props.loading === false && this.props.loggedIn === false)
    {
      return (
        <Text style = {styles.errorTextStyle}> 
        {this.props.error}
        </Text>
        )
    }
  }

  render(){
    return(
    <View flex={1}>
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accesible={false}>
      <View flexDirection = "column" marginTop = {20}>
      <View marginTop={10}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      </View>
        <View style = {styles.logoContainer}>
            <Image
              style = {styles.logo}
              source = {require('../../../Images/logo.png')}
            />
            <Text style = {styles.quote}>
              Fordham University's Business Incubator
            </Text>
        </View>

        <KeyboardAvoidingView
          behavior = 'padding'>

          <View style={styles.inputContainer}>
          <View style={styles.labelContainer}>
            <Text style={{fontWeight: 'bold'}}>Email</Text>
            </View>
          <TextInput 
            style = {styles.input}
            autoCapitalize = 'none'
            autoCorrect = {false}
            onChangeText= {this.onEmailChange.bind(this)}
            placeholder = "user@example.com"
            placeholderTextColor = 'rgba(0,0,0,0.6)'
            value = {this.props.email}
          />
          </View>

          <View style={styles.inputContainer}>
          <View style={styles.labelContainer}>
            <Text style={{fontWeight: 'bold'}}>Password</Text>
          </View>
          <TextInput
            style = {styles.input}
            autoCapitalize = 'none'
            autoCorrect = {false}
            secureTextEntry
            onChangeText = {this.onPasswordChange.bind(this)}
            placeholder = "********"
            placeholderTextColor = 'rgba(0,0,0,0.6)'
            value = {this.props.password}
          />
          </View>
          <View alignItems = "center">
          <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>     
          </TouchableOpacity>
          </View>
          
        </KeyboardAvoidingView>
      </View>
      </TouchableWithoutFeedback>
      {this.checkStuff()}
      {this.renderErrorMess()}
    </View>
    );
  }
}

const styles = ({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emailContainer:{
    padding:10,
  },
  logoContainer:{
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20
  },
  logo:{
    height: 200,
    width: 200,
  },
  labelContainer: {
    marginLeft: 7,
    marginBottom: 5
  },
  sign: {
    fontFamily: 'GillSans-Light',
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    fontWeight: '400'
  },
  quote:{
    fontFamily : 'GillSans-Light', 
    fontSize: 15,
    marginTop: 2,
    width:350, 
    textAlign: 'center'
  },
  inputContainer: {
    marginLeft: 15,
    marginBottom: 30
  },
  input:{
    fontFamily: 'GillSans-Light',
    height: 40,
    width: 300,
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    paddingHorizontal: 10
  },
  errorTextStyle:{
    fontSize:15,
    alignSelf:'center',
    color:'red',

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
    error: state.auth.error,
    loading: state.auth.loading,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps,{emailChanged, passwordChanged, loginUser, loggedInUser, newUser})(login_screen)
