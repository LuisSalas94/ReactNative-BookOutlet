import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import RenderItem from './RenderItem';

interface Props {
  genres: string[];
}

const RenderGenres = ({genres}: Props) => {
  return (
    <View>
      <FlatList
        data={['All', ...genres]}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item}
        horizontal={true}
      />
    </View>
  );
};

export default RenderGenres;

const styles = StyleSheet.create({});
