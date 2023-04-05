import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useRenderAuthors} from '../../hooks/useRenderAuthors';

const RenderAuthors = () => {
  const {authorImages, authors} = useRenderAuthors();

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Meet The Authors</Text>
      <View style={styles.imageContainer}>
        {authorImages.map((image, index) => {
          return (
            <TouchableOpacity style={styles.imageContainer2}>
              <Image
                style={styles.imageStyle}
                source={{
                  uri: image,
                }}
              />
              <Text style={styles.textStyle}>{authors[index]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default RenderAuthors;

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginTop: 15,
  },
  imageContainer2: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'contain',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 12,
  },
  titleStyle: {
    fontSize: 18,
    color: '#c084dc',
  },
});
