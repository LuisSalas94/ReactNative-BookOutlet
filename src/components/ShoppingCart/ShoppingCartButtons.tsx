import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppDispatch} from '../../hooks/storeHooks';
import {Book} from '../../interfaces/bookInterface';
import {deleteFromCart} from '../../features/cart/cartSlice';

interface Props {
  book: Book;
}

const ShoppingCartButtons = ({book}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => dispatch(deleteFromCart(book))}>
        <Icon name="trash-outline" size={20} color="#fff" />
        <Text style={styles.iconContainerTextStyle}>Remove</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer2}>
        <TouchableOpacity style={styles.removeStyle}>
          <Icon name="remove-outline" size={20} color="#333" />
        </TouchableOpacity>
        <Text>1</Text>
        <TouchableOpacity style={styles.addStyle}>
          <Icon name="add-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShoppingCartButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 6,
    bottom: 20,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#C084fc',
  },
  iconContainerTextStyle: {
    color: '#fff',
  },
  iconContainer2: {
    width: 60,
    height: 30,
    flexDirection: 'row',
    gap: 6,
    borderWidth: 0.8,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  removeStyle: {
    borderRightWidth: 0.8,
    borderColor: '#ccc',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addStyle: {
    borderLeftWidth: 0.8,
    borderColor: '#ccc',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
