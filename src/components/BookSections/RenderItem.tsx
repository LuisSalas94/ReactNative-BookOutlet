import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRenderItem} from '../../hooks/useRenderItem';

interface Props {
  item: string;
}

const RenderItem = ({item}: Props) => {
  const test = item => {
    console.log(item);
  };

  const {iconName} = useRenderItem(item);

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
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
