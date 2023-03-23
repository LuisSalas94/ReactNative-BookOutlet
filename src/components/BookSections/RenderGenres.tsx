import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import RenderItem from './RenderItem';

interface Props {
  genres: string[];
}

const RenderGenres = ({genres}: Props) => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        numColumns={4}
        data={['All', ...genres]}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default RenderGenres;

const styles = StyleSheet.create({
  flatListContainer: {
    alignItems: 'center',
  },
});
