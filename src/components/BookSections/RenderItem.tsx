import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  item: string;
}

const RenderItem = ({item}: Props) => {
  const test = item => {
    console.log(item);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => test(item)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
  },
});
