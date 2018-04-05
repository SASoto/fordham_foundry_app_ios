import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const DeleteButton = ({onPress, children}) => {
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
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 120
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    padding: 8
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: 'maroon',
    borderRadius: 5,
    borderColor: 'black',
  }
};

export {DeleteButton};