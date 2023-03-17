import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SkipButton = ({...props}) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.textStyle}>Skip</Text>
    </TouchableOpacity>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    borderWidth: 1,
    padding: 10,
    width: 90,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#e0dfe0',
    backgroundColor: '#404066',
  },
  textStyle: {
    color: '#e0dfe0',
  },
});
