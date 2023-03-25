import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../../utils/Dimensions';
import {useBookTitle} from '../../hooks/useBookTitle';

interface Props {
  title: string;
  author: string;
}

const Titles = ({title, author}: Props) => {
  const {newTitle} = useBookTitle(title);

  return (
    <View
      style={[
        styles.titleContainer,
        newTitle.length >= 30 ? styles.longTitle : styles.smallTitle,
      ]}>
      <Text style={styles.titleStyle}>{newTitle}</Text>
      <Text style={styles.authorStyle}>{author}</Text>
    </View>
  );
};

export default Titles;

const styles = StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    top: 30,
    alignItems: 'center',
    gap: 8,
  },
  longTitle: {
    left: windowWidth * 0.25,
    textAlign: 'center',
  },
  smallTitle: {
    left: windowWidth * 0.35,
    textAlign: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  authorStyle: {
    fontSize: 15,
  },
});
