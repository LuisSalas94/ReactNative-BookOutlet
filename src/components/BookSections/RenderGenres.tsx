import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  genres: string[];
}

const RenderGenres = ({genres}: Props) => {
  console.log('from RenderGenres: ', genres);
  return (
    <View>
      <Text>RenderGenres</Text>
    </View>
  );
};

export default RenderGenres;

const styles = StyleSheet.create({});
