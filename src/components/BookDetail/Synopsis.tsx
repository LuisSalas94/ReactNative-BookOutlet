import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppDispatch} from '../../hooks/storeHooks';
import {Book} from '../../interfaces/bookInterface';
import {addToFavorites} from '../../features/favorites/favoritesSlice';

interface Props {
  book: Book;
}

const Synopsis = ({book}: Props) => {
  const {synopsis, description} = book;
  const dispatch = useAppDispatch();

  return (
    <View style={styles.synopsisContainer}>
      <View style={styles.synopsisTitleContainer}>
        <Text style={styles.synopsisTitleStyle}>Synopsis</Text>
        <TouchableOpacity
          style={styles.synopsisTitleIconContainer}
          onPress={() => dispatch(addToFavorites(book))}>
          <Icon name="bookmark-outline" size={22} color="#333" />
        </TouchableOpacity>
      </View>
      <Text style={styles.synopsisStyle}>{synopsis}</Text>
      <Text style={styles.synopsisStyle}>{description}</Text>
    </View>
  );
};

export default Synopsis;

const styles = StyleSheet.create({
  synopsisContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  synopsisTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  synopsisTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  synopsisTitleIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 0.8,
    borderColor: '#333',
  },
  synopsisStyle: {
    fontSize: 15,
    letterSpacing: 0.5,
    lineHeight: 22,
    marginTop: 20,
  },
});
