import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PageNotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You do not have favorites books yet!</Text>
      <View>
        <Text style={styles.text}>
          Uh oh, we can't seem to find the page you're looking for. Try going
        </Text>
        <Text style={styles.text}>
          back to the previous page to select a book for more information
        </Text>
      </View>
      <View style={styles.icon}>
        <Icon name="settings-outline" size={80} color="#c084fc" />
      </View>
    </View>
  );
};

export default PageNotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    color: '#c084fc',
    marginBottom: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 25,
  },
  icon: {
    marginTop: 30,
  },
});
