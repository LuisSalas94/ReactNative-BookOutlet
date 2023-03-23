import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Book} from '../../interfaces/bookInterface';
import RenderBook from './RenderBook';

interface Books {
  books: Book[];
}

const RenderBooks = ({books}: Books) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={books}
        renderItem={({item}) => <RenderBook item={item} />}
        keyExtractor={item => item.isbn}
      />
    </View>
  );
};

export default RenderBooks;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
