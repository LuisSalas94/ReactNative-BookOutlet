import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ShoppingCart = () => {
  return (
    <View style={styles.cartContainer}>
      <Icon name="cart-outline" size={38} color="#3f494a" />
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>1</Text>
      </View>
    </View>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  cartContainer: {
    position: 'relative',
  },
  counterContainer: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#d1618a',
    position: 'absolute',
    left: 20,
    top: -5,
  },
  counterText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
