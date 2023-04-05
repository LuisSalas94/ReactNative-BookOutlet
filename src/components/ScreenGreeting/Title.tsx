import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <>
      <Text style={styles.titleContainer}>
        <Text>Book</Text> <Text style={styles.titleInner}>Outlet</Text>
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
    color: '#c084fc',
  },
});
