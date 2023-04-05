import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRenderItem} from '../../hooks/useRenderItem';
import {filterBooksByGenre} from '../../features/books/booksSlice';
import {useAppDispatch} from '../../hooks/storeHooks';

interface Props {
  item: string;
}

const RenderItem = ({item}: Props) => {
  const dispatch = useAppDispatch();

  const {iconName} = useRenderItem(item);

  const filterBook = item => {
    dispatch(filterBooksByGenre(item));
  };

  return (
    <TouchableOpacity onPress={() => filterBook(item)} style={styles.container}>
      <Icon name={iconName} size={15} color="#c084fc" />
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
