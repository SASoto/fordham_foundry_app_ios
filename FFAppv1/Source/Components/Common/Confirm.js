import React from 'react'
import {Modal, View, Button, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import {CardSection} from './CardSection'

import IonIcon from 'react-native-vector-icons/Ionicons';

const Confirm = ({children,visible,onReturn, position}) => {
  const {containerStyle,textStyle} = styles
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
        <CardSection>
        <TouchableWithoutFeedback>
          <View>
          <View style = {styles.closeButtonCont}>
            <TouchableOpacity onPress = {onReturn}>
              <IonIcon name = "ios-close" size = {40}/>
            </TouchableOpacity>
          </View>
        
          <View style={textStyle}>
            {children}
          </View>
          </View>
        </TouchableWithoutFeedback>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles={
  textStyle:{
    //flex:1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10
  },
  containerStyle:{
    backgroundColor: 'rgba(0,0,0,0.75)',
    //position:'relative',
    flex:1,
    justifyContent:'center',
    flexDirection: 'column'
  },
  closeButtonCont: {
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingTop: 5
  }
}

export {Confirm}
