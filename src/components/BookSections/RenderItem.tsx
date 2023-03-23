import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  item: string;
}

const RenderItem = ({item}: Props) => {
  const test = item => {
    console.log(item);
  };

  return (
    <TouchableOpacity onPress={() => test(item)} style={styles.container}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
