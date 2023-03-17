import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {windowHeight} from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  iconColor,
  backgroundColor,
  ...rest
}: any) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <Icon style={styles.icon} name={btnType} size={25} color={iconColor} />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 18,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'normal',
  },
});
