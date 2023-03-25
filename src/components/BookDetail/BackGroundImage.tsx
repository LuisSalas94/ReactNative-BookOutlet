import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {windowHeight} from '../../utils/Dimensions';
import {windowWidth} from '../../utils/Dimensions';

interface Props {
  image: string;
}

const BackGroundImage = ({image}: Props) => {
  return (
    <ImageBackground
      source={{uri: image}}
      resizeMode="stretch"
      style={styles.imageStyle}
    />
  );
};

export default BackGroundImage;

const styles = StyleSheet.create({
  imageStyle: {
    width: windowWidth,
    height: windowHeight * 0.68,
    opacity: 0.3,
  },
});
