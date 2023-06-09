import React from 'react';
import {ScrollView, StyleSheet, Text, FlatList, View} from 'react-native';
import FavoriteBook from '../components/FavoriteSection/FavoriteBook';
import {useAppSelector} from '../hooks/storeHooks';
import PageNotFound from '../components/FavoriteSection/PageNotFound';

const Favorites = () => {
  const favoritesBooks = useAppSelector(state => state.favorites.favorites);

  if (!favoritesBooks.length) {
    return <PageNotFound />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleStyle}>These are your favorites Books:</Text>
      <FlatList
        data={favoritesBooks}
        renderItem={({item}) => <FavoriteBook book={item} />}
        keyExtractor={item => item.isbn}
      />
      <View style={styles.divider} />
    </ScrollView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  titleStyle: {
    fontSize: 20,
    marginTop: 20,
  },
  divider: {
    height: 100,
  },
});
