import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const NextButton = ({...props}) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.textStyle}>Next</Text>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    borderWidth: 1,
    padding: 10,
    width: 90,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#404066',
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#404066',
  },
});
