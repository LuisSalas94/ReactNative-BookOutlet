import React from 'react';
import {StyleSheet, View} from 'react-native';
import RenderGenres from './RenderGenres';
import {useBookSections} from '../../hooks/useBookSections';
import Loader from '../ActivityIndicator/Loader';
import RenderBooks from './RenderBooks';

const BookSections = () => {
  const {books, genres, isLoading} = useBookSections();

  console.log('Books: ', books);
  console.log('Is Loading: ', isLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.sectionContainer}>
      <RenderGenres genres={genres} />
      <RenderBooks books={books} />
    </View>
  );
};

export default BookSections;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 22,
  },
});
