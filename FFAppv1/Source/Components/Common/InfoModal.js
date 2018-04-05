import React from 'react'
import {Modal, View, Text, Button, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import {CardSection} from './CardSection'

import IonIcon from 'react-native-vector-icons/Ionicons';

const InfoModal = ({children,visible,onReturn, position}) => {
  const {containerStyle,textCont, textStyle} = styles
  return(
    <Modal
      animationType="fade"
      onRequestClose={ ()=>{} }
      transparent
      visible={visible}
      position = {position}
    >
    <TouchableWithoutFeedback onPress = {onReturn}>
    
      <View style={containerStyle}>
        
        <TouchableWithoutFeedback>
          <View backgroundColor = "maroon">
          <View style = {styles.closeButtonCont}>
            <TouchableOpacity onPress = {onReturn}>
              <IonIcon name = "ios-close" size = {32} color = "white"/>
            </TouchableOpacity>
          </View>
        
          <View style={textCont}>
            <Text style={textStyle}>{children}</Text>
          </View>
          </View>
        </TouchableWithoutFeedback>
        
      </View>
    </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles={
  textStyle: {
    fontSize: 16,
    color: 'white'
  },
  textCont:{
    //flex:1,
    alignItems: 'center',
    textAlign: 'center',
    //flexDirection: 'row',
    //justifyContent: 'center',
    paddingLeft: 10,
    paddingBottom: 6,
    paddingRight: 10
  },
  containerStyle:{
    backgroundColor: 'rgba(0,0,0,0.75)',
    //position:'relative',
    flex:1,
    marginTop: 20,
    //flexDirection: 'column',
  },
  closeButtonCont: {
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingTop: 5
  }
}

export {InfoModal}
