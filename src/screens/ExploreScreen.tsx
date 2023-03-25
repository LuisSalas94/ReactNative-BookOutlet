import React from 'react';
import {ScrollView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/BottomTabNavigator';
import Synopsis from '../components/BookDetail/Synopsis';
import Info from '../components/BookDetail/Info';
import BookImage from '../components/BookDetail/BookImage';
import Titles from '../components/BookDetail/Titles';
import BackIcon from '../components/BookDetail/BackIcon';
import BackGroundImage from '../components/BookDetail/BackGroundImage';
import Review from '../components/BookDetail/Review';
import Buy from '../components/BookDetail/Buy';

//* Use RootStackParamList to pass params to the screen
interface Props extends StackScreenProps<RootStackParams, 'ExploreScreen'> {}

const ExploreScreen = ({route}: Props) => {
  const {title, image, author, genre, num_pages, review, review_author, price} =
    route.params;

  return (
    <ScrollView>
      {/* BackgroundImage */}
      <BackGroundImage image={image} />

      {/* Back Icon */}
      <BackIcon />

      {/* Titles */}
      <Titles title={title} author={author} />

      {/* Image */}
      <BookImage image={image} />

      {/* Info Container */}
      <Info genre={genre} num_pages={num_pages} price={price} />

      {/* Synopsis */}
      <Synopsis book={route.params} />

      {/* Review */}
      <Review review={review} review_author={review_author} />

      {/* Buy */}
      <Buy />
    </ScrollView>
  );
};

export default ExploreScreen;
