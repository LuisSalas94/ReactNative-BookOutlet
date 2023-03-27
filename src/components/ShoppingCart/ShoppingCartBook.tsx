import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Book} from '../../interfaces/bookInterface';
import {windowWidth} from '../../utils/Dimensions';
import {useBookTitle} from '../../hooks/useBookTitle';
import ShoppingCartButtons from './ShoppingCartButtons';

interface Props {
  item: Book;
}

const ShoppingCartBook = ({item}: Props) => {
  const {title, author, price, image, num_pages} = item;
  const newTitle = useBookTitle(title);

  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.imageStyle}
        />
        <View>
          <Text style={styles.titleStyle}>{newTitle.newTitle}</Text>
          <Text style={styles.paddingVertical}>
            <Text style={styles.boldStyle}>Author:</Text> {author}
          </Text>
          <Text style={styles.paddingVertical}>
            <Text style={styles.boldStyle}>Price:</Text> $/{price - 1.5}
          </Text>
          <Text>
            <Text style={styles.boldStyle}>Number of Pages: </Text>
            {num_pages}
          </Text>
          <ShoppingCartButtons book={item} />
        </View>
      </View>
      <View style={styles.lineDivider} />
    </>
  );
};

export default ShoppingCartBook;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginTop: 20,
    width: windowWidth / 1.1,
    height: 140,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  lineDivider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 20,
    width: '85%',
    alignSelf: 'center',
  },
  imageStyle: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  titleStyle: {
    letterSpacing: 0.5,
    fontWeight: 'bold',
    fontSize: 15.5,
  },
  paddingVertical: {
    paddingVertical: 3,
  },
  boldStyle: {
    fontWeight: 'bold',
  },
});
