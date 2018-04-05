import React from 'react';
import {View} from 'react-native';

//Rounded container for other components or tags
const Card = (props) => {
  return (
    //any component or tag inside Card will be displayed
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  //styling for Card
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
  }
};

export { Card };