 //Header at top of screen
//When header is called by other functions, its passed a props object param
//props has an attribute called headerText, whoever calls it (App) can set this to whatever it wants
import React from 'react'
import {Text, View} from 'react-native'

//Create Header component
const Header = (props) => {
  const {textStyle, viewStyle} = styles

  return ( 
    <View style = {viewStyle}>
      <Text style = {textStyle}>{props.headerText}</Text>
    </View>
  )
}

//Styling, create object with styles for each jsx tag
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

//Make availabe for other files to use/reference
export { Header }