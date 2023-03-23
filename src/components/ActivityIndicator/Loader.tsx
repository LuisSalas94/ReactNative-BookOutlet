import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ccc" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
