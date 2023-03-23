import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BookSections from '../components/BookSections/BookSections';
import ScreenGreeting from '../components/ScreenGreeting/ScreenGreeting';
import ShoppingCart from '../components/ScreenGreeting/ShoppingCart';
import Title from '../components/ScreenGreeting/Title';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.container}>
        <Title />
        <ShoppingCart />
      </View>
      <ScreenGreeting />
      <View style={styles.booksContainer}>
        <BookSections />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  homeContainer: {
    padding: 25,
  },
  booksContainer: {},
});

/*
#d1618a
#3f494a
*/
