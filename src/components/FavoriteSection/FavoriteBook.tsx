import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useBookTitle} from '../../hooks/useBookTitle';
import {Book} from '../../interfaces/bookInterface';
import {windowWidth} from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import {removeFromFavorites} from '../../features/favorites/favoritesSlice';
import {addToCart} from '../../features/cart/cartSlice';
import {useAppDispatch} from '../../hooks/storeHooks';

interface Props {
  book: Book;
}

const FavoriteBook = ({book}: Props) => {
  const {image, title, price, author} = book;
  const {newTitle} = useBookTitle(title);
  const uri = image;
  const disptach = useAppDispatch();

  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.imageStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{newTitle}</Text>
        <Text>{author}</Text>
        <Text style={styles.priceStyle}>
          <Text style={styles.price1}>$/{price}</Text>
          <Text> - $/{price - 1.5}</Text>
        </Text>
        <View style={styles.mainIconContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => disptach(addToCart(book))}>
            <Icon name="cart-outline" size={20} color="#333" />
            <Text>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => disptach(removeFromFavorites(book))}>
            <Icon name="trash-outline" size={20} color="#333" />
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FavoriteBook;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginTop: 50,
    width: windowWidth / 1.1,
    height: 140,
    borderColor: '#ccc',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imageStyle: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceStyle: {
    fontSize: 14,
    marginTop: 8,
  },
  textContainer: {},
  mainIconContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 6,
    bottom: 20,
    marginTop: 20,
    borderWidth: 0.8,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
  },
  price1: {
    color: 'tomato',
    textDecorationLine: 'line-through',
  },
});
