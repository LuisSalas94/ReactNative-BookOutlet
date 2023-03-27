import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import ShoppingCartBook from '../components/ShoppingCart/ShoppingCartBook';
import {useAppSelector} from '../hooks/storeHooks';
import TotalPrice from '../components/ShoppingCart/TotalPrice';
import EmptyShoppingCart from '../components/ShoppingCart/EmptyShoppingCart';

const CartScreen = () => {
  const bookCart = useAppSelector(state => state.cart.cart);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleStyle}>Shopping Cart</Text>
      <View style={styles.lineDivider} />
      <FlatList
        data={bookCart}
        keyExtractor={item => item.isbn}
        renderItem={({item}) => <ShoppingCartBook item={item} />}
      />
      <View style={styles.lineHeight} />
      {bookCart.length > 0 ? <TotalPrice /> : <EmptyShoppingCart />}
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  titleStyle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  lineDivider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  lineHeight: {
    marginBottom: 10,
  },
});
