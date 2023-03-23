import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <>
      <Text style={styles.titleContainer}>
        <Text style={styles.titleInner}>App</Text> Name
      </Text>
    </>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 20,
    fontSize: 25,
  },
  titleInner: {
    color: '#d1618a',
  },
});
