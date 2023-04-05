import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowHeight} from '../../utils/Dimensions';

const FormButton = ({buttonTitle, ...rest}: any) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 18,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c084fc',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#c084fc',
    fontFamily: 'Lato-Regular',
  },
});
