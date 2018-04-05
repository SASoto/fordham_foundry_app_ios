import React,{Component} from 'react';
import {Text, View, Linking, Image} from 'react-native';
import {Button, ClickMe} from '../../Components/Common';

import ViewContainer from '../../Components/Common/ViewContainer';
import {logoutUser, loggedInUser} from '../../Actions';
import {connect} from 'react-redux';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {handleLogout} from '../handlelogout';

class logout_screen extends Component {

  // Logs out user and performs transition to onboarding screen
	onButtonPress(){
    this.props.logoutUser()
    if(this.props.loggedIn === true) {
    	{this.checkFlag()}
  	}
  }

  // Checks for moment when loggedIn prop value changes to false
  checkFlag() {
    if(this.props.loggedIn === true) {
      console.log("In here")
      setTimeout(this.checkFlag.bind(this), 1000)
    }
    else {
      handleLogout(this.props.navigation)
     }
  }

  renderContent() {
    if(this.props.loggedIn === true) {
      return(
          <View marginTop = {20} alignItems = "center">
          <View alignItems = "center">
                    <Image source = {require('../../../Images/logo.png')} 
                      style={{
                      width: 200,
                      height: 200,
                      }}/>
                </View>

                <View>
                    <Text style = {styles.headTextStyle}>
                    {firebase.auth().currentUser.email}
                    </Text>
                </View>
          <View>
            <Button onPress={this.onButtonPress.bind(this)}> Log out </Button>
          </View>
          <View height = {70}/>
            <ClickMe onPress = {() => Linking.openURL('https://goo.gl/forms/Gv0ZJiEMQbzauTOo1')}>
              <Text style = {styles.feedbackText}>Leave us feedback by clicking here!</Text>        
            </ClickMe>
          </View>
        );
    } else {
        return(
            <View marginTop = {20} alignItems = "center">
            <View alignItems = "center">
              <Image source = {require('../../../Images/logo.png')} 
                style={{
                width: 200,
                height: 200,
              }}/>
              <Text style = {styles.headTextStyle}>
              See you again soon!
              </Text>
            </View>
            </View>
          );
    }
  }

	render() {
    return (
      <ViewContainer>
      {this.renderContent()}
      </ViewContainer>
    )
	}
}

const styles = {
	feedbackText: {
		fontSize: 20,
		color: '#0981CC',
		fontWeight: '400',
		fontFamily: 'GillSans-Light',
		justifyContent: "center"
	}
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {logoutUser, loggedInUser})(logout_screen)