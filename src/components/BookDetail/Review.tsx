import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  review: string;
  review_author: string;
}

const Review = ({review, review_author}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.reviewStyle}>"{review}"</Text>
      <Text style={styles.review_AuthorStyle}>{review_author}</Text>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 45,
    alignItems: 'flex-end',
  },
  reviewStyle: {
    fontSize: 15.5,
    textAlign: 'left',
    letterSpacing: 0.3,
    lineHeight: 20,
    fontStyle: 'italic',
    fontWeight: '500',
  },
  review_AuthorStyle: {
    fontSize: 14,
    marginTop: 3,
  },
});
