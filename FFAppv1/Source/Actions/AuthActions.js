import {EMAIL_CHANGED, PASSWORD_CHANGED, FIRSTNAME_CHANGED, LASTNAME_CHANGED, IS_EMPTY,LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,LOGIN_USER, EXISTS_FAIL, NO_USER, NEW_USER, LOGOUT_USER_SUCCESS, LOGGEDIN_USER} from './types' 
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

export const firstnameChanged = (text) => {
  return {
    type: FIRSTNAME_CHANGED,
    payload: text
  }
}

export const lastnameChanged = (text) => {
  return {
    type: LASTNAME_CHANGED,
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
function writeNewUserData(userId, email,firstname,lastname) {
  var refreshinit = "January 1, 2001 08:00:00"
  var initials = parseInitials(firstname,lastname)
  firebase.database().ref('users/' + userId).set({
    email: email,
    firstname: firstname,
    lastname: lastname,
    initials: initials,
    bio: "I'm a human who is associated with Fordham University, but I haven't updated my bio yet.",
    lastnewsrefresh: refreshinit,      //A string object – if dates/times need to be compared, must convert to date with 'new Date()'
    website: "",
    affiliation1: "",
    affiliation2: "",
    affiliation3: "",
    affiliation4: "",
    affiliation5: "",
  })
  initCampuses(userId)
}



//Initialize campus associations to false
function initCampuses(userId) {
  firebase.database().ref('users/' + userId + '/campuses/').set({
    rhcamp: false,
    lccamp: false,
    westcamp: false,
  })
  firebase.database().ref('campuses/rhcamp/members/' + userId).set(false)
  firebase.database().ref('campuses/lccamp/members/' + userId).set(false)
  firebase.database().ref('campuses/westcamp/members/' + userId).set(false)

  //console.log('Wrote user data successfully...??')
}

//Get first letter of first name and first letter of last name.
function parseInitials(firstname,lastname) {
  var name = firstname + " " + lastname;
  var initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  return(initials)
}

export const newUser = ({email, password, firstname, lastname}) => {
  if (email == '', password == '', firstname == '', lastname == '') {
    return(dispatch) => {
      isEmpty(email,password,firstname,lastname),
      alert ("Oops! Sign Up By Filling out Each Field.")
    }
  }
  else
  {
   return (dispatch) => {
    dispatch({type: NEW_USER})
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      //console.log('Trying to sign in with new account...')
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        //console.log('Error message is: ', errorMessage)
        // ...
      }).then(() => {
      //console.log('Trying to fetch userId of current user')
      var userId = firebase.auth().currentUser.uid;
      //console.log('userId is:', userId)
      writeNewUserData(userId,email,firstname,lastname)
      })
    })
    .then (() => {alert ('Your Account Was Created!');
      this.props({
        email,
        password,
        firstname,
        lastname,
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