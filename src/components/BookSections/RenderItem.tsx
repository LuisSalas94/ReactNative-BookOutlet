import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  item: string;
}

const RenderItem = ({item}: Props) => {
  const test = item => {
    console.log(item);
  };

  let iconName = '';
  if (item === 'All') {
    iconName = 'book-outline';
  } else if (item === 'Science') {
    iconName = 'bulb-outline';
  } else if (item === 'History') {
    iconName = 'man-outline';
  } else if (item === 'Social Philosophy') {
    iconName = 'leaf-outline';
  } else if (item === 'Biology') {
    iconName = 'flask-outline';
  } else if (item === 'Cosmology') {
    iconName = 'rocket-outline';
  } else if (item === 'Self Help') {
    iconName = 'happy-outline';
  }

  return (
    <TouchableOpacity onPress={() => test(item)} style={styles.container}>
      <Icon name={iconName} size={15} color="#333" />
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginBottom: 15,
    borderWidth: 0.9,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
