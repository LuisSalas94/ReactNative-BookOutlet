import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Book} from '../../interfaces/bookInterface';

interface Props {
  item: Book;
}

const RenderBook = ({item}: Props) => {
  const {title, image, price, author} = item;
  const uri = image;

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri}} style={styles.imageContainer} />
      <Text style={styles.imageTitle}>{title}</Text>
      <Text style={styles.imageAuthor}>{author}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.imagePrice}>$/{price} </Text>
        <Text> - $/{price - 1.5}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RenderBook;

const styles = StyleSheet.create({
  container: {
    height: 330,
    width: 170,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 25,
    alignItems: 'center',
  },
  imageContainer: {
    height: 220,
    width: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 16,
  },
  imageTitle: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 3,
  },
  imageAuthor: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 3,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imagePrice: {
    fontSize: 14,
    textAlign: 'center',
    color: 'tomato',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
});
