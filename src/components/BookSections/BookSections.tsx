import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fetchAsyncBooks} from '../../features/books/booksSlice';
import RenderGenres from './RenderGenres';
import {useBookSections} from '../../hooks/useBookSections';

const BookSections = () => {
  const {books, genres, dispatch} = useBookSections();

  useEffect(() => {
    dispatch(fetchAsyncBooks());
  }, [dispatch]);

  return (
    <View style={styles.sectionContainer}>
      <Text>BookSections</Text>
      <RenderGenres genres={genres} />
    </View>
  );
};

export default BookSections;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 12,
  },
});
