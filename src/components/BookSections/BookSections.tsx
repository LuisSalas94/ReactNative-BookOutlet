import React from 'react';
import {StyleSheet, View} from 'react-native';
import RenderGenres from './RenderGenres';
import {useBookSections} from '../../hooks/useBookSections';

const BookSections = () => {
  const {books, genres} = useBookSections();

  console.log('Books: ', books);

  return (
    <View style={styles.sectionContainer}>
      <RenderGenres genres={genres} />
    </View>
  );
};

export default BookSections;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 22,
  },
});
