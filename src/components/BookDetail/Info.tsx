import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {windowWidth} from '../../utils/Dimensions';

interface Props {
  genre: string;
  num_pages: number;
  price: number;
}

const Info = ({genre, num_pages, price}: Props) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoIconContainer}>
        <Icon name="star" size={18} color="#fcc402" />
        <Text style={styles.boldStyle}>4.8</Text>
      </View>
      <View style={styles.genreStyle}>
        <Text style={styles.boldStyle}>{genre}</Text>
      </View>
      <View style={styles.pagesStyle}>
        <Text style={styles.pagesTextStyle}>{num_pages}</Text>
        <Text>Pages</Text>
      </View>
      <View style={styles.priceStyle}>
        <Text style={styles.boldStyle}>$/{price - 1.5}</Text>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  infoContainer: {
    height: 70,
    width: windowWidth - 30,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'relative',
    top: -40,
    left: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  infoIconContainer: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#fff8df',
    padding: 4,
    borderRadius: 10,
    width: 60,
    justifyContent: 'center',
  },
  genreStyle: {
    backgroundColor: '#e2fcfb',
    padding: 6,
    borderRadius: 10,
  },
  pagesStyle: {
    backgroundColor: '#f9e8f9',
    padding: 6,
    borderRadius: 10,
    flexDirection: 'row',
  },
  pagesTextStyle: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  priceStyle: {
    backgroundColor: '#BBF7D0',
    padding: 6,
    borderRadius: 10,
  },
  boldStyle: {
    fontWeight: 'bold',
  },
});
