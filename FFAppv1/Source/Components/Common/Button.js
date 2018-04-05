import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//Custom button component
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    //any component or tag inside Button will be displayed as text
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
  //width sets width of button
  container: {
    flexDirection: 'row',
    width: 250,
    marginBottom: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    padding: 8
  },
  //borderRadius rounds-out corners of button
  buttonStyle: {
    flex: 1,
    backgroundColor: 'maroon',
    borderRadius: 5,
    borderColor: 'black',
    
  }
};

export { Button };