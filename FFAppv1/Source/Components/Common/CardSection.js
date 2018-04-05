import React from 'react';
import {View} from 'react-native';

//Rectangular container for other components or tags
const CardSection = (props) => {
  return (
    //any component or tag inside CardSection will be displayed
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  //styling for CardSection
  containerStyle: {
    //flex: 1,
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    flexDirection: 'column',
    borderColor: 'black',
    //position: 'relative',
  }
};

export { CardSection };