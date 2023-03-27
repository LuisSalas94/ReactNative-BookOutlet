import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {windowWidth} from '../../utils/Dimensions';

const TotalPrice = () => {
  return (
    <View style={styles.totalContainer}>
      <View>
        <View style={styles.priceStyle}>
          <Text style={styles.boldStyle}>Sub Total</Text>
          <Text style={styles.boldStyle}>$545.00</Text>
        </View>
        <View style={styles.priceStyle}>
          <Text style={styles.boldStyle}>Shipping</Text>
          <Text style={styles.boldStyle}>Free</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Text style={styles.clearIcon}>CHECKOUT [$545.00 TOTAL]</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalPrice;

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 6,
    width: windowWidth - 40,
    bottom: 20,
    marginTop: 50,
    borderWidth: 0.8,
    borderColor: '#C084fc',
    padding: 7,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  priceStyle: {
    flexDirection: 'row',
    width: windowWidth - 40,
    justifyContent: 'space-around',
  },
  boldStyle: {
    fontSize: 18,
    letterSpacing: 0.2,
    color: '#333',
  },
  clearIcon: {
    fontSize: 17,
    color: '#C084fc',
    letterSpacing: 0.5,
  },
});
