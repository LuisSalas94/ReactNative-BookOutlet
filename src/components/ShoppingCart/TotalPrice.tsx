import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TotalPrice = () => {
  return (
    <View style={styles.totalContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Text style={styles.clearIcon}>Clear Cart</Text>
      </TouchableOpacity>
      <Text style={styles.boldStyle}>Total Price: $545.00</Text>
    </View>
  );
};

export default TotalPrice;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: 6,
    bottom: 20,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: '#C084fc',
    padding: 7,
    borderRadius: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginBottom: 80,
  },
  boldStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.5,
    color: '#333',
  },
  clearIcon: {
    fontSize: 17,
    color: '#C084fc',
  },
});
