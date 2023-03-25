import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {windowHeight} from '../../utils/Dimensions';
import {windowWidth} from '../../utils/Dimensions';

interface Props {
  image: string;
}

const BookImage = ({image}: Props) => {
  return (
    <View style={styles.mainImageContainer}>
      <Image
        source={{uri: image}}
        resizeMode="contain"
        style={styles.mainImageStyle}
      />
    </View>
  );
};

export default BookImage;

const styles = StyleSheet.create({
  mainImageContainer: {
    position: 'absolute',
    top: windowHeight * 0.11,
    left: windowWidth * 0.2,
  },
  mainImageStyle: {
    width: 300,
    height: 420,
    borderRadius: 5,
    resizeMode: 'stretch',
  },
});
