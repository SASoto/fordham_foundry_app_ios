import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const EventButton = ({onPress, children}) => {
  const {buttonStyle, textStyle} = styles;

  return (
    <View style = {styles.container}>
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    padding: 8,
    paddingTop: 10
  },
  buttonStyle: {
    backgroundColor: '#0981CC',
    borderRadius: 5,
    width: 100,
    height: 38,
    borderColor: 'black',
    
  }
};

export { EventButton };