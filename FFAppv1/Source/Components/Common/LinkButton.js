import React from 'react';
import {Text, TouchableOpacity, View, Linking} from 'react-native';

const LinkButton = ({jobBoard, jobKey, children}) => {
  const {buttonStyle, textStyle} = styles;

  return (
    <View style = {styles.container}>
    <TouchableOpacity onPress = {() => Linking.openURL(`${jobBoard[jobKey].link}`)} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    
    justifyContent: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    padding: 6
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#0981CC',
    borderRadius: 5,
    
    width: 50,
    borderColor: 'black',  
  }
};

export { LinkButton };