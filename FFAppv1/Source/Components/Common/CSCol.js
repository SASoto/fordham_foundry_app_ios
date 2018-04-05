import React from 'react';
import {StyleSheet, View} from 'react-native';

const CSCol = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'column',
    borderColor: '#8E8E8E',
    position: 'relative',
  }
};

export { CSCol };