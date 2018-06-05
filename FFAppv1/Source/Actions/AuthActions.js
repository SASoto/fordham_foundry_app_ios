import {EMAIL_CHANGED, PASSWORD_CHANGED, IS_EMPTY,LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,LOGIN_USER, EXISTS_FAIL, NO_USER, NEW_USER, LOGOUT_USER_SUCCESS, LOGGEDIN_USER} from './types' 
import {Actions} from 'react-native-router-flux'
import firebase from 'firebase'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}
//Pass the second part a "newUser" prop to display "Account created!"
export const loginUser = ({email, password}) => {
    if (email == '', password == '') {
    return(dispatch) =>{
      isEmpty(email,password),
      alert ("Sign In By Entering an Email and Password!")
    }
  }
  else
  {
  return (dispatch) => {
    dispatch({type: LOGIN_USER})
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch( ()=> loginUserFail(dispatch)
        )

  }
  }
}

//Add the new user to the 'users' database branch.
function writeUserData(userId, email) {
  firebase.database().ref('users/' + userId).set({
    email: email,
  })
  console.log('Wrote user data successfully...??')
}

export const newUser = ({email, password}) => {
  if (email == '', password == '') {
    return(dispatch) => {
      isEmpty(email,password),
      alert ("Sign Up By Entering an Email and Password!")
    }
  }
  else
  {
   return (dispatch) => {
    dispatch({type: NEW_USER})
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      console.log('Trying to sign in with new account...')
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error message is: ', errorMessage)
        // ...
      }).then(() => {
      console.log('Trying to fetch userId of current user')
      var userId = firebase.auth().currentUser.uid;
      console.log('userId is:', userId)
      writeUserData(userId,email)
      })
    })
    .then (() => {alert ('Your Account Was Created!');
      this.props({
        email,
        password,
        loading

      })

      })
      .catch(() => existsFail(dispatch))
  }
  }
}


export const isEmpty = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: IS_EMPTY})
    
  }
}

export const noUser = (dispatch) => {
  dispatch ({
    type: NO_USER
  })
}

export const existsFail = (dispatch) => {
  dispatch({
    type: EXISTS_FAIL
  })
}

export const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
}

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
}

export const logoutUser = () => {
  firebase.auth().signOut()
  return {
    type: LOGOUT_USER_SUCCESS
  }
}

export const loggedInUser = (user) => {
  return {
    type: LOGGEDIN_USER,
    payload: user
  }
}