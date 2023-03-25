import React from 'react';
import {StyleSheet, View} from 'react-native';
import RenderGenres from './RenderGenres';
import {useBookSections} from '../../hooks/useBookSections';
import Loader from '../ActivityIndicator/Loader';
import RenderBooks from './RenderBooks';
import RenderAuthors from '../AuthorSection/RenderAuthors';

const BookSections = () => {
  const {genres, isLoading, filteredBook} = useBookSections();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.sectionContainer}>
      <RenderGenres genres={genres} />
      <RenderBooks books={filteredBook} />
      <RenderAuthors />
    </View>
  );
};

export default BookSections;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 22,
  },
});
