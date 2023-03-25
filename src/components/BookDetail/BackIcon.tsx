import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={30} color="#333" />
    </TouchableOpacity>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  iconContainer: {
    borderWidth: 0.9,
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
    left: 12,
  },
});
