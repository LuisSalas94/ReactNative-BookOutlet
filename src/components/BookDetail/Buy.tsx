import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {windowWidth} from '../../utils/Dimensions';

const Buy = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buyButtonStyle}>
        <Text style={styles.buyButtonTextStyle}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buy;

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
    alignItems: 'center',
  },
  buyButtonStyle: {
    backgroundColor: '#ccc',
    width: windowWidth / 1.2,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buyButtonTextStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
